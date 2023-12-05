<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';

const app = getApp();
const sysHeight = ref(`${uni.getSystemInfoSync().statusBarHeight}px`);
const pageHeight = computed(() => {
  let height: any = null;
  // #ifdef MP
  height = '100%';
  // #endif
  // #ifdef H5
  height = app?.globalData?.windowHeight
    ? app?.globalData?.windowHeight
    : '100%';
  // #endif
  return height;
});

// 其余变量声明
const orderMenu = ref([
  {
    img: '/static/images/order1.png',
    title: '待付款',
    url: '/pages/users/order_list/index?status=0',
    num: 0
  },
  {
    img: '/static/images/order2.png',
    title: '待发货',
    url: '/pages/users/order_list/index?status=1',
    num: 0
  },
  {
    img: '/static/images/order3.png',
    title: '待收货',
    url: '/pages/users/order_list/index?status=2',
    num: 0
  },
  {
    img: '/static/images/order4.png',
    title: '待评价',
    url: '/pages/users/order_list/index?status=3',
    num: 0
  },
  {
    img: '/static/images/order5.png',
    title: '售后/退款',
    url: '/pages/users/user_return_list/index',
    num: 0
  }
]);
const brokerageUser = ref({}); // 分销信息
const slideShows = ref([]); // 轮播图
const circular = ref(true); //
const interval = ref(3000); //
const duration = ref(500); //
const autoplay = ref(true); //
const menus = ref([]); // 用户菜单
const servicePic = ref('/static/images/customer.png');
const favoriteCount = ref(0); // 收藏数量
const couponCount = ref(0); // 优惠劵数量
const userInfo = ref({});
const isLogin = ref(true);

// 生命周期钩子转换
onMounted(() => {
  // ...
});

// 方法转换
const navito = (e: string) => {
  //   window.location.href = `https://${e}`;
};

const kefuClick = () => {
  //   location.href = chatUrl.value;
};

// ... 其余方法 ...

// 获取个人中心图标
const getMyMenus = () => {
  // ...
};

// 编辑页面
const goEdit = () => {
  //   if (!isLogin.value) {
  //     toLogin();
  //     return;
  //   }
  //   uni.navigateTo({
  //     url: '/pages/users/user_info/index'
  //   });
};

// 签到
const goSignIn = () => {
  //   uni.navigateTo({
  //     url: '/pages/users/user_sgin/index'
  //   });
};

// goMenuPage
const goMenuPage = (url: string) => {
  //   if (isLogin.value) {
  //     uni.navigateTo({
  //       url
  //     });
  //   } else {
  //     // #ifdef MP
  //     openAuto();
  //     // #endif
  //   }
};
</script>

<template>
  <view class="new-users copy-data" :style="{ height: pageHeight }">
    <view class="mid" style="flex: 1; overflow: hidden">
      <scroll-view scroll-y="true" style="height: 100%">
        <view class="bg"></view>
        <view class="head pad30">
          <view class="user-card">
            <view class="user-info">
              <!-- 头像 -->
              <image
                v-if="userInfo?.avatar"
                class="avatar"
                :src="userInfo?.avatar"
                @click="goEdit"
              />
              <image
                v-else
                class="avatar"
                src="/static/images/f.png"
                mode=""
                @click="goEdit()"
              ></image>
              <!-- 昵称 -->
              <view class="info">
                <view v-if="!isLogin" class="name">请点击登录</view>
                <view v-else class="name">
                  {{ userInfo?.nickname }}
                  <view v-if="userInfo?.level" class="vip">
                    <image :src="userInfo?.level?.icon" alt="" />
                    <view style="margin-left: 10rpx" class="vip-txt">{{
                      userInfo?.level?.name || ''
                    }}</view>
                  </view>
                </view>
                <!-- 手机 -->
                <view v-if="userInfo?.mobile" class="num" @click="goEdit">
                  <view class="num-txt">{{ userInfo?.mobile }}</view>
                  <view class="icon">
                    <image src="/static/images/edit.png" mode="" />
                  </view>
                </view>
                <view v-else-if="isLogin" class="phone">绑定手机号</view>
              </view>
            </view>
            <view class="num-wrapper">
              <view
                class="num-item"
                @click="goMenuPage('/pages/users/user_money/index')"
              >
                <text class="num">{{
                  userInfo?.nowMoney ? Number(userInfo?.nowMoney).toFixed(2) : 0
                }}</text>
                <view class="txt">余额</view>
              </view>
              <view
                class="num-item"
                @click="goMenuPage('/pages/users/user_integral/index')"
              >
                <text class="num">{{ userInfo?.point ?? 0 }}</text>
                <view class="txt">积分</view>
              </view>
              <view
                class="num-item"
                @click="goMenuPage('/pages/users/user_coupon/index')"
              >
                <text class="num">{{ couponCount }}</text>
                <view class="txt">优惠券</view>
              </view>
              <view
                class="num-item"
                @click="goMenuPage('/pages/users/user_goods_collection/index')"
              >
                <text class="num">{{ favoriteCount }}</text>
                <view class="txt">收藏</view>
              </view>
            </view>
            <view class="sign" @click="goSignIn">签到</view>
          </view>

          <!-- 订单中心 -->
          <view class="order-wrapper">
            <view class="order-hd flex">
              <view class="left">订单中心</view>
              <navigator
                class="right flex"
                hover-class="none"
                url="/pages/users/order_list/index"
                open-type="navigate"
              >
                查看全部
                <text class="iconfont icon-xiangyou"></text>
              </navigator>
            </view>
            <view class="order-bd">
              <block v-for="(item, index) in orderMenu" :key="index">
                <navigator
                  class="order-item"
                  hover-class="none"
                  :url="item.url"
                >
                  <view class="pic">
                    <image :src="item.img" mode=""></image>
                    <text v-if="item.num > 0" class="order-status-num">{{
                      item.num
                    }}</text>
                  </view>
                  <view class="txt">{{ item.title }}</view>
                </navigator>
              </block>
            </view>
          </view>
        </view>

        <view class="contenBox">
          <!-- 轮播 -->
          <view v-if="slideShows.length > 0" class="slider-wrapper">
            <swiper
              indicator-dots="true"
              :autoplay="autoplay"
              :circular="circular"
              :interval="interval"
              :duration="duration"
              indicator-color="rgba(255,255,255,0.6)"
              indicator-active-color="#fff"
            >
              <block v-for="(item, index) in slideShows" :key="index">
                <swiper-item class="borRadius14">
                  <image
                    :src="item?.picUrl"
                    class="slide-image"
                    @click="navito(item?.url)"
                  ></image>
                </swiper-item>
              </block>
            </swiper>
          </view>

          <image src="/static/images/support.png" alt="" class="support" />
          <view class="uni-p-b-98"></view>
        </view>
      </scroll-view>
    </view>
  </view>
</template>

<style scoped lang="less">
page,
body {
  height: 100%;
}

.bg {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 420rpx;
  background-image: url('/static/images/user_bg.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.contenBox {
  padding: 0 30rpx;
}

.support {
  width: 219rpx;
  height: 74rpx;
  margin: 54rpx auto;
  display: block;
}

.new-users {
  display: flex;
  flex-direction: column;
  height: 100%;

  .sys-head {
    position: relative;
    width: 100%;
    background: linear-gradient(90deg, #f0f0f0 0%, #f0f0f0 100%);

    .sys-title {
      z-index: 10;
      position: relative;
      height: 43px;
      text-align: center;
      line-height: 43px;
      font-size: 36rpx;
      color: #ffffff;
    }
  }

  .head {
    background: linear-gradient(
      360deg,
      rgba(255, 121, 49, 0) 0%,
      rgba(248, 74, 29, 0.82) 39%,
      #e93323 100%
    );
    // padding: 0 30rpx;

    .user-card {
      position: relative;
      width: 100%;
      margin: 0 auto;
      padding: 35rpx 0 30rpx 0;
      .user-info {
        z-index: 20;
        position: relative;
        display: flex;

        .avatar {
          width: 120rpx;
          height: 120rpx;
          border-radius: 50%;
        }

        .info {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          margin-left: 20rpx;
          padding: 15rpx 0;

          .name {
            display: flex;
            align-items: center;
            color: #fff;
            font-size: 31rpx;

            .vip {
              display: flex;
              align-items: center;
              padding: 6rpx 20rpx;
              background: rgba(0, 0, 0, 0.2);
              border-radius: 18px;
              font-size: 20rpx;
              margin-left: 12rpx;

              image {
                width: 27rpx;
                height: 27rpx;
              }
            }
          }

          .num {
            display: flex;
            align-items: center;
            font-size: 26rpx;
            color: rgba(255, 255, 255, 0.6);

            image {
              width: 22rpx;
              height: 23rpx;
              margin-left: 20rpx;
            }
          }
        }
      }

      .num-wrapper {
        z-index: 30;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 30rpx;
        color: #fff;

        .num-item {
          width: 33.33%;
          text-align: center;

          .num {
            font-size: 42rpx;
            font-weight: bold;
          }

          .txt {
            margin-top: 10rpx;
            font-size: 26rpx;
            color: rgba(255, 255, 255, 0.6);
          }
        }
      }

      .sign {
        z-index: 200;
        position: absolute;
        right: -12rpx;
        top: 80rpx;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 120rpx;
        height: 60rpx;
        background: linear-gradient(
          90deg,
          rgba(255, 225, 87, 1) 0%,
          rgba(238, 193, 15, 1) 100%
        );
        border-radius: 29rpx 4rpx 4rpx 29rpx;
        color: #282828;
        font-size: 28rpx;
        font-weight: bold;
      }
    }

    .order-wrapper {
      background-color: #fff;
      border-radius: 14rpx;
      padding: 30rpx 16rpx;
      position: relative;
      z-index: 11;

      .order-hd {
        justify-content: space-between;
        font-size: 30rpx;
        color: #282828;
        margin-bottom: 40rpx;
        padding: 0 16rpx;

        .left {
          color: #282828;
          font-size: 30rpx;
          font-weight: 600;
        }

        .right {
          align-items: center;
          color: #666666;
          font-size: 26rpx;

          .icon-xiangyou {
            margin-left: 5rpx;
            font-size: 24rpx;
          }
        }
      }

      .order-bd {
        display: flex;
        justify-content: space-between;
        padding: 0;

        .order-item {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          .pic {
            position: relative;
            text-align: center;

            image {
              width: 48rpx;
              height: 48rpx;
            }
          }

          .txt {
            margin-top: 15rpx;
            font-size: 26rpx;
            color: #454545;
          }
        }
      }
    }
  }

  .slider-wrapper {
    margin: 20rpx 0;
    height: 138rpx;

    swiper,
    swiper-item {
      height: 100%;
    }

    image {
      width: 100%;
      height: 100%;
    }
  }

  .user-menus {
    background-color: #fff;
    border-radius: 14rpx;

    .menu-title {
      padding: 30rpx 30rpx 40rpx;
      font-size: 30rpx;
      color: #282828;
      font-weight: 600;
    }

    .list-box {
      display: flex;
      flex-wrap: wrap;
      padding: 0;
    }

    .item {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: column;
      width: 25%;
      margin-bottom: 47rpx;
      font-size: 26rpx;
      color: #333333;

      image {
        width: 52rpx;
        height: 52rpx;
        margin-bottom: 18rpx;
      }

      &:last-child::before {
        display: none;
      }
    }

    button {
      font-size: 28rpx;
    }
  }

  .phone {
    color: #fff;
  }

  .order-status-num {
    min-width: 12rpx;
    background-color: #fff;
    color: #ee5a52;
    border-radius: 15px;
    position: absolute;
    right: -14rpx;
    top: -15rpx;
    font-size: 20rpx;
    padding: 0 8rpx;
    border: 1px solid #ee5a52;
  }
}
</style>
