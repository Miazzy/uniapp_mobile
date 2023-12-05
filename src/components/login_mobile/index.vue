<script setup lang="ts">
import { computed, ref } from 'vue';
const BACK_URL = 'login_back_url';
// import { mapGetters } from 'vuex';
// import * as AuthApi from '@/api/member/auth';
// import * as UserApi from '@/api/member/user';
// import * as BrokerageAPI from '@/api/trade/brokerage';
// import { iosBinding } from '@/api/public';
// const { userInfo, isLogin } = mapGetters(['userInfo', 'isLogin']);

const account = ref('');
const codeNum = ref('');
const isApp = ref(0);

const isUp = ref(false);
const authKey = ref('');
const socialCode = ref('');
const socialState = ref('');
const isShow = ref(true);
const isPos = ref(true);
const appleShow = ref('');
const platform = ref('');
const userInfo = ref({});
const isLogin = ref(true);

const disabled = computed(() => !account.value);

const text = computed(() =>
  (!userInfo.phone && isLogin) || (userInfo.phone && isLogin)
    ? '立即绑定'
    : '立即登录'
);

const code = async () => {
  if (!account.value) {
    // return $util.Tips({
    //   title: '请填写手机号码'
    // });
  }

  if (!/^1(3|4|5|7|8|9|6)\d{9}$/i.test(account.value)) {
    // return $util.Tips({
    //   title: '请输入正确的手机号码'
    // });
  }

  try {
    // const res = await AuthApi.sendSmsCode(account.value, 1);
    // $util.Tips({ title: res.message });
    // sendCode();
  } catch (err) {
    // return $util.Tips({
    //   title: err
    // });
  }
};

const close = () => {
  // $emit('close', false);
};

const loginBtn = () => {
  if (!account.value) {
    // return $util.Tips({
    //   title: '请填写手机号码'
    // });
  }

  if (!/^1(3|4|5|7|8|9|6)\d{9}$/i.test(account.value)) {
    // return $util.Tips({
    //   title: '请输入正确的手机号码'
    // });
  }

  // if (!codeNum.value) return $util.Tips({ title: '请填写验证码' });

  if (!/^[\w\d]+$/i.test(codeNum.value)) {
    // return $util.Tips({
    //   title: '请输入正确的验证码'
    // });
  }

    // uni.showLoading({
    //   title: !userInfo.phone && isLogin ? '正在绑定中' : '正在登录中'
    // });

    //   if (!userInfo.phone && isLogin) {
    //     try {
    //       const res = await iosBinding({
    //         captcha: codeNum.value,
    //         phone: account.value
    //       });

    //       $util.Tips({
    //         title: '绑定手机号成功',
    //         icon: 'success'
    //       });

    //       isApp.value = 1;
    //       getUserInfo();
    //     } catch (error) {
    //       uni.hideLoading();
    //       $util.Tips({
    //         title: error
    //       });
    //     }
    //   } else {
    //     try {
    //       const res = await AuthApi.smsLogin({
    //         mobile: account.value,
    //         code: codeNum.value,
    //         socialType: 31,
    //         socialCode: socialCode.value,
    //         socialState: socialState.value
    //       });

    //       const data = res.data;
    //       $store.commit('LOGIN', {
    //         token: res.data.accessToken
    //       });
    //       getUserInfo(data);
    //       bindBrokerUser();
    //     } catch (error) {
    //       uni.hideLoading();
    //       $util.Tips({
    //         title: error
    //       });
    //     }
    //   }
};

const getUserInfo = (data) => {
//   $store.commit('SETUID', data.userId);
//   $store.commit('OPENID', data.openid);

//   UserApi.getUserInfo()
//     .then((res) => {
//       uni.hideLoading();
//       $store.commit('UPDATE_USERINFO', res.data);

//       // 调回登录前页面
//       // #ifdef MP
//       $util.Tips(
//         {
//           title: '登录成功',
//           icon: 'success'
//         },
//         {
//           tab: 3
//         }
//       );
//       close();
//       // #endif
//       // #ifdef H5
//       $emit('wechatPhone', true);
//       // #endif
//     })
//     .catch((err) => {
//       uni.hideLoading();
//       console.error(err);
//     });
};

const bindBrokerUser = () => {
//   const spread = $Cache.get('spread');
//   if (spread > 0) {
//     BrokerageAPI.bindBrokerageUser(spread);
//   }
};
</script>

<template>
  <view v-if="isUp">
    <view v-if="isShow" class="mobile-bg" @click="close"></view>
    <view
      class="mobile-mask animated"
      :class="{ slideInUp: isUp }"
      :style="{ position: isPos ? 'fixed' : 'static' }"
    >
      <view class="input-item">
        <input v-model="account" type="text" placeholder="输入手机号" />
      </view>
      <view class="input-item">
        <input v-model="codeNum" type="text" placeholder="输入验证码" />
        <button class="code" :disabled="disabled" @click="code">
          {{ text }}
        </button>
      </view>
      <view class="sub_btn" @click="loginBtn">
        {{ text }}
      </view>
    </view>
  </view>
</template>

<style scoped>
.mobile-bg {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}

.isPos {
  position: static;
}

.mobile-mask {
  z-index: 20;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 67rpx 30rpx;
  background: #fff;

  .input-item {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 86rpx;
    margin-bottom: 38rpx;

    input {
      flex: 1;
      display: block;
      height: 100%;
      padding-left: 40rpx;
      border-radius: 43rpx;
      border: 1px solid #dcdcdc;
    }

    .code {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 220rpx;
      height: 86rpx;
      margin-left: 30rpx;
      background: rgba(233, 51, 35, 0.05);
      font-size: 28rpx;
      color: $theme-color;
      border-radius: 43rpx;

      &[disabled] {
        background: rgba(0, 0, 0, 0.05);
        color: #999;
      }
    }
  }

  .sub_btn {
    width: 690rpx;
    height: 86rpx;
    line-height: 86rpx;
    margin-top: 60rpx;
    background: #e93323;
    border-radius: 43rpx;
    color: #fff;
    font-size: 28rpx;
    text-align: center;
  }
}

.animated {
  animation-duration: 0.4s;
}
</style>
