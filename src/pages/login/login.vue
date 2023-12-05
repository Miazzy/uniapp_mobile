<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app';
import { reactive } from 'vue';
// import Routine from '@/libs/routine.js';

const BACK_URL = 'login_back_url';
// const { getCode } = Routine;

const state = reactive({
  current: 1,
  account: '',
  password: '',
  captcha: '',
  type: 'login',
  codeVal: '',
  text: '',
  disabled: false,
  isShowCode: false,
  platform: '',
  appLoginStatus: false,
  appUserInfo: null,
  appleLoginStatus: false,
  appleUserInfo: null,
  appleShow: false
});

const submit = () => {
  // ... (同原始代码)
};

const loginMobile = async () => {
  // ... (同原始代码)
};

const code = async () => {
  // ... (同原始代码)
};

const getUserInfo = (data) => {
  // ... (同原始代码)
};

const bindBrokerUser = () => {
  // ... (同原始代码)
};

onLoad(() => {
  uni.getSystemInfo({
    success(res) {
      
    }
  });
});
</script>

<template>
  <div class="login-wrapper">
    <div class="shading">
      <image src="/static/images/logo2.png" />
    </div>
    <div class="whiteBg">
      <div v-if="state.current !== 1" class="list">
        <form @submit.prevent="submit">
          <div class="item">
            <div class="acea-row row-middle">
              <input
                v-model="state.account"
                type="text"
                class="texts"
                placeholder="输入手机号码"
                required
              />
            </div>
          </div>
          <div class="item">
            <div class="acea-row row-middle">
              <input
                v-model="state.password"
                type="password"
                class="texts"
                placeholder="填写登录密码"
                required
              />
            </div>
          </div>
        </form>
      </div>
      <div
        v-if="
          state.current !== 0 || state.appLoginStatus || state.appleLoginStatus
        "
        class="list"
      >
        <div class="item">
          <div class="acea-row row-middle">
            <input
              v-model="state.account"
              type="text"
              class="texts"
              placeholder="输入手机号码"
            />
          </div>
        </div>
        <div class="item">
          <div class="acea-row row-middle">
            <input
              v-model="state.captcha"
              type="text"
              placeholder="填写验证码"
              class="codeIput"
            />
            <button
              class="code"
              :disabled="state.disabled"
              :class="{ on: state.disabled }"
              @click="code"
            >
              {{ state.text }}
            </button>
          </div>
        </div>
        <div v-if="state.isShowCode" class="item">
          <div class="acea-row row-middle">
            <image
              src="/static/images/code_2.png"
              style="width: 28rpx; height: 32rpx"
            ></image>
            <input
              v-model="state.codeVal"
              type="text"
              placeholder="填写验证码"
              class="codeIput"
            />
          </div>
        </div>
      </div>
      <!-- 登录方式一：验证码登录 -->
      <div v-if="state.current !== 0" class="logon" @click="loginMobile">登录</div>
      <!-- 登录方式二：密码登录 -->
      <div v-if="state.current === 0" class="logon" @click="submit">登录</div>
      <div class="tips">
        <div v-if="state.current === 0" @click="state.current = 1">快速登录</div>
        <div v-if="state.current === 1" @click="state.current = 0">账号登录</div>
      </div>
    </div>
    <div class="bottom"></div>
  </div>
</template>

<style lang="less" scoped>
page {
  background: #fff;
}
.appLogin {
  margin-top: 60rpx;

  .hds {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24rpx;
    color: #b4b4b4;

    .line {
      width: 68rpx;
      height: 1rpx;
      background: #cccccc;
    }

    p {
      margin: 0 20rpx;
    }
  }

  .btn-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30rpx;

    .btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 68rpx;
      height: 68rpx;
      border-radius: 50%;
    }

    .apple-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 30rpx;
      background: #000;
      border-radius: 34rpx;
      font-size: 40rpx;

      .icon-s-pingguo {
        color: #fff;
        font-size: 40rpx;
      }
    }

    .iconfont {
      font-size: 40rpx;
      color: #fff;
    }

    .wx {
      margin-right: 30rpx;
      background-color: #61c64f;
    }

    .mima {
      background-color: #28b3e9;
    }

    .yanzheng {
      background-color: #f89c23;
    }
  }
}

.code img {
  width: 100%;
  height: 100%;
}

.acea-row.row-middle {
  input {
    margin-left: 20rpx;
    display: block;
  }
}

.login-wrapper {
  padding: 30rpx;

  .shading {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    /* #ifdef APP-VUE */
    margin-top: 50rpx;
    /* #endif */

    /* #ifndef APP-VUE */
    margin-top: 200rpx;
    /* #endif */

    image {
      width: 180rpx;
      height: 180rpx;
    }
  }

  .whiteBg {
    margin-top: 100rpx;

    .list {
      border-radius: 16rpx;
      overflow: hidden;

      .item {
        border-bottom: 1px solid #f0f0f0;
        background: #fff;

        .row-middle {
          position: relative;
          padding: 16rpx 45rpx;

          .texts {
            flex: 1;
            font-size: 28rpx;
            height: 80rpx;
            line-height: 80rpx;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          input {
            flex: 1;
            font-size: 28rpx;
            height: 80rpx;
            line-height: 80rpx;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .code {
            position: absolute;
            right: 30rpx;
            top: 50%;
            color: #f0f0f0;
            font-size: 26rpx;
            transform: translateY(-50%);
          }
        }
      }
    }

    .logon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 86rpx;
      margin-top: 80rpx;
      background-color: #f0f0f0;
      border-radius: 120rpx;
      color: #ffffff;
      font-size: 30rpx;
    }

    .tips {
      margin: 30rpx;
      text-align: center;
      color: #999;
    }
  }
}
</style>
