<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';

const statusBarHeight = ref(`${uni.getSystemInfoSync().statusBarHeight}px`);
const navIndex = ref(0);
const navTop = ref([]);
const marTop = ref(0);
const logoUrl = ref('');

const configApi = ref({}); // 分享类容配置
const tabsScrollLeft = ref(0); // tabs 当前偏移量
const scrollLeft = ref(0);
const circular = ref(true);
const interval = ref(3000);
const duration = ref(500);
const indicatorDots = ref(false);
const siteName = ref('首页'); // 首页 title
const autoplay = ref(true);
const goodScroll = ref(true); // 精品推荐开关
const listActive = ref(0); // 当前选中项
const goodType = ref(1); // 精品推荐 Type
const params = reactive({ page: 1, limit: 10 });
const loading = ref(false);
const iSshowH = ref(false);

const slideShows = ref([]); // 轮播图
const menus = ref([]); // 菜单
const scrollingNews = ref([]); // 新闻简报
const couponList = ref([]); // 优惠劵列表
const productRecommends = ref([]); // 商品推荐
const tempArr = ref([]); // 精品推荐临时数组

// 生命周期钩子
onMounted(() => {
  // 在页面加载时执行的逻辑
  // ...
  slideShows.value = JSON.parse(
    '[\n    {\n      "name": "轮播 1",\n      "picUrl": "https://static.iocoder.cn/mall/banner-01.jpg",\n      "url": "/pages/goods_details/index?id=633"\n    },\n    {\n      "name": "轮播 2",\n      "picUrl": "https://static.iocoder.cn/mall/banner-02.jpg",\n      "url": ""\n    }\n  ]'
  );
  menus.value = JSON.parse(
    '[\n    {\n      "name": "领优惠券",\n      "picUrl": "https://api.java.crmeb.net/crmebimage/public/content/2023/01/11/2dfb64490f694d78a1ae9b0176884122arrur012nc.png",\n      "url": "/pages/users/commission_rank/index"\n    },\n    {\n      "name": "行业资讯",\n      "picUrl": "https://static.iocoder.cn/mall/6a23b4be15894945b8908762cd6ac10ftxrly6psan.png",\n      "url": "/pages/news_list/index"\n    },\n    {\n      "name": "砍价列表",\n      "picUrl": "https://static.iocoder.cn/mall/dd796e2a4f1e4be287b7e3f045b74513aa0fl2hbcv.png",\n      "url": "/pages/activity/goods_bargain/index"\n    },\n    {\n      "name": "分销中心",\n      "picUrl": "https://static.iocoder.cn/mall/9217fff82f4e4cb2994b0a0350229bf8n5keuknzj4.png",\n      "url": "/pages/news_list/index"\n    },\n    {\n      "name": "限时秒杀",\n      "picUrl": "https://static.iocoder.cn/mall/b2264d00e92e42118756cbeed35835c2u3d250a2ip.png",\n      "url": "/pages/activity/goods_seckill/index"\n    },\n    {\n      "name": "商品分类",\n      "picUrl": "https://static.iocoder.cn/mall/4b6583ac95714bcab675e137717692054zxy59qiiy.png",\n      "url": "/pages/goods_list/index?cid=0&title="\n    },\n    {\n      "name": "签到",\n      "picUrl": "https://static.iocoder.cn/mall/358787702d464984bcd8e3f6d937188337prsofmsp.png",\n      "url": "/pages/users/user_sgin/index"\n    },\n    {\n      "name": "拼团列表",\n      "picUrl": "https://static.iocoder.cn/mall/3c1129aeef7f4ed2acc999a2f3c04770q1onmg3vp0.png",\n      "url": "/pages/users/user_get_coupon/index"\n    },\n    {\n      "name": "地址管理",\n      "picUrl": "https://static.iocoder.cn/mall/04bde8bb2f2e4acaa7f961f7fa785d8880rv7z7pvt.png",\n      "url": "/pages/users/user_address_list/index"\n    },\n    {\n      "name": "优惠劵",\n      "picUrl": "https://static.iocoder.cn/mall/76943158b9c44d64ab837ec9aa738d5cckxo88dutd.png",\n      "url": "/pages/users/user_coupon/index"\n    }\n  ]'
  );

  // 在页面显示时执行的逻辑
  uni.setNavigationBarTitle({
    title: siteName
  });
});

// 定义methods
const setTabList = () => {
  // ...
};

// 获取Coupon
const getCoupon = () => {};

//
const ProductNavTab = () => {};

//
const goDetail = () => {};

// 其他方法的定义
</script>

<template>
  <view>
    <view class="page-index" :class="{ bgf: navIndex > 0 }">
      <!-- #ifdef H5 -->
      <view class="header">
        <view class="serch-wrapper flex">
          <view class="logo">
            <image :src="logoUrl" mode="" />
          </view>
          <navigator
            url="/pages/goods_search/index"
            class="input"
            hover-class="none"
          >
            <text class="iconfont icon-xiazai5" /> 搜索商品
          </navigator>
        </view>
      </view>
      <!-- #endif -->
      <!-- #ifdef MP -->
      <view class="mp-header">
        <view class="sys-head" :style="{ height: statusBarHeight }"></view>
        <view class="serch-box" style="height: 40px">
          <view class="serch-wrapper flex">
            <view class="logo">
              <image :src="logoUrl" mode=""></image>
            </view>
            <navigator
              url="/pages/goods_search/index"
              class="input"
              hover-class="none"
              ><text class="iconfont icon-xiazai5"></text> 搜索商品</navigator
            >
          </view>
        </view>
      </view>
      <!-- #endif -->
      <!-- 首页展示 -->
      <view
        v-if="navIndex === 0"
        class="page_content"
        :style="`margin-top:${marTop}px;`"
      >
        <view class="mp-bg"></view>
        <!-- banner 轮播图 -->
        <view v-if="slideShows.length" class="swiper">
          <swiper
            indicator-dots="true"
            :autoplay="true"
            :circular="circular"
            :interval="interval"
            :duration="duration"
            indicator-color="rgba(255,255,255,0.6)"
            indicator-active-color="#fff"
          >
            <block v-for="(item, index) in slideShows" :key="index">
              <swiper-item>
                <navigator
                  :url="item?.url"
                  class="slide-navigator acea-row row-between-wrapper"
                  hover-class="none"
                >
                  <image
                    :src="item?.picUrl"
                    class="slide-image"
                    lazy-load
                  ></image>
                </navigator>
              </swiper-item>
            </block>
          </swiper>
        </view>

        <!-- 新闻简报 -->
        <view
          v-if="scrollingNews?.length"
          class="notice acea-row row-middle row-between"
        >
          <view class="pic">
            <image src="/static/images/xinjian.png" />
          </view>
          <text class="line">|</text>
          <view class="swipers">
            <swiper
              :indicator-dots="indicatorDots"
              :autoplay="autoplay"
              interval="2500"
              duration="500"
              vertical="true"
              circular="true"
            >
              <block v-for="(item, index) in scrollingNews" :key="index">
                <swiper-item>
                  <navigator class="item" :url="item?.url" hover-class="none">
                    <view class="line1">{{ item?.name }}</view>
                  </navigator>
                </swiper-item>
              </block>
            </swiper>
          </view>
          <view class="iconfont icon-xiangyou" />
        </view>

        <!-- menu 菜单 -->
        <view v-if="menus.length" class="nav acea-row">
          <view v-for="(item, index) in menus" :key="index" class="menu-column">
            <navigator
              v-if="item?.show === '1'"
              class="item"
              :url="item?.url"
              open-type="switchTab"
              hover-class="none"
            >
              <view class="pictrue">
                <image :src="item?.picUrl"></image>
              </view>
              <view class="menu-txt">{{ item?.name }}</view>
            </navigator>
            <navigator v-else class="item" :url="item?.url" hover-class="none">
              <view class="pictrue">
                <image :src="item?.picUrl"></image>
              </view>
              <view class="menu-txt">{{ item?.name }}</view>
            </navigator>
          </view>
        </view>

        <!-- 优惠券 -->
        <view v-if="couponList?.length > 0" class="couponIndex">
          <view class="acea-row" style="height: 100%">
            <view class="titBox">
              <view class="tit1">领取优惠券</view>
              <view class="tit2">福利大礼包，省了又省</view>
              <navigator
                class="item"
                url="/pages/users/user_get_coupon/index"
                hover-class="none"
              >
                <view class="tit3"
                  >查看全部 <text class="iconfont icon-xiangyou"></text
                ></view>
              </navigator>
            </view>
            <view class="listBox acea-row">
              <view
                v-for="(item, index) in couponList"
                :key="index"
                class="list"
                :class="item?.canTake ? 'listActive' : 'listHui'"
              >
                <view
                  class="tit line1"
                  :class="item?.canTake ? 'titActive' : 'pricehui'"
                  >{{ item?.name }}</view
                >
                <view
                  class="price"
                  :class="item?.canTake ? 'icon-color' : 'pricehui'"
                >
                  <text v-if="item?.discountType === 1"
                    >{{ item?.discountPrice }} 元</text
                  >
                  <text v-else
                    >{{ (item?.discountPercent / 10.0).toFixed(1) }} 折</text
                  >
                </view>
                <view
                  v-if="item?.canTake"
                  class="ling icon-color"
                  @click="getCoupon(item?.id, index)"
                  >领取</view
                >
                <view v-else class="ling pricehui fonthui">已领取</view>
                <view class="priceM">满{{ item?.usePrice }}元可用</view>
              </view>
            </view>
          </view>
        </view>

        <!-- 首页推荐 -->
        <view class="sticky-box" :style="`top:${marTop}px;`">
          <scroll-view
            class="scroll-view_H"
            style="width: 100%"
            scroll-x="true"
            scroll-with-animation
            :scroll-left="tabsScrollLeft"
            @scroll="scroll"
          >
            <view id="tab_list" class="tab nav-bd">
              <view
                v-for="(item, index) in productRecommends"
                id="tab_item"
                :key="index"
                :class="{ active: listActive === index }"
                class="item"
                @click="ProductNavTab(item, index)"
              >
                <view class="txt">{{ item?.name }}</view>
                <view class="label">{{ item?.tag }}</view>
              </view>
            </view>
          </scroll-view>
        </view>
        <!-- 首发新品 -->
        <view class="index-product-wrapper" :class="iSshowH ? 'on' : ''">
          <view
            class="list-box animated"
            :class="tempArr.length > 0 ? 'fadeIn on' : ''"
          >
            <view
              v-for="(item, index) in tempArr"
              :key="index"
              class="item"
              @click="goDetail(item)"
            >
              <view class="pictrue">
                <span
                  v-if="
                    item?.activityList &&
                    item?.activityList[0] &&
                    item?.activityList[0]?.type === 1
                  "
                  class="pictrue_log pictrue_log_class"
                  >秒杀</span
                >
                <span
                  v-if="
                    item?.activityList &&
                    item?.activityList[0] &&
                    item?.activityList[0].type === 2
                  "
                  class="pictrue_log pictrue_log_class"
                  >砍价</span
                >
                <span
                  v-if="
                    item?.activityList &&
                    item?.activityList[0] &&
                    item?.activityList[0].type === 3
                  "
                  class="pictrue_log pictrue_log_class"
                  >拼团</span
                >
                <image :src="item?.picUrl" mode="" />
              </view>
              <view class="text-info">
                <view class="title line1">{{ item?.name }}</view>
                <view class="old-price"
                  ><text>¥{{ item?.marketPrice }}</text></view
                >
                <view class="price"> <text>￥</text>{{ item?.price }} </view>
              </view>
            </view>
          </view>
          <view
            v-if="goodScroll"
            class="loadingicon acea-row row-center-wrapper"
          >
            <text class="loading iconfont icon-jiazai" :hidden="!loading" />
          </view>
          <view v-if="!goodScroll" class="mores-txt flex">
            <text>我是有底线的</text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<style lang="scss">
page {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #fff;
}

.nav.acea-row {
  display: flex;
  flex-wrap: wrap;

  .menu-column {
    width: 20%;
    box-sizing: border-box;
  }
}

.notice {
  width: 100%;
  height: 70rpx;
  border-radius: 10rpx;
  background-color: #fff;
  margin-bottom: 25rpx;
  line-height: 70rpx;
  padding: 0 14rpx;
  .line {
    color: #cccccc;
  }
  .pic {
    width: 130rpx;
    height: 36rpx;
    image {
      width: 100%;
      height: 100%;
      display: block !important;
    }
  }
  .swipers {
    height: 100%;
    width: 444rpx;
    overflow: hidden;
    swiper {
      height: 100%;
      width: 100%;
      overflow: hidden;
      font-size: 22rpx;
      color: #333333;
    }
  }
  .iconfont {
    color: #999999;
    font-size: 20rpx;
  }
}
.couponIndex {
  width: auto;
  height: 238rpx;
  background-image: url('~@/static/images/yhjsy.png');
  background-size: 100% 100%;
  padding-left: 42rpx;
  margin-bottom: 30rpx;

  .titBox {
    padding: 47rpx 0;
    text-align: center;
    height: 100%;

    .tit1 {
      color: #ffebd2;
      font-size: 34rpx;
      font-weight: 600;
    }

    .tit2 {
      color: #ffebd2;
      font-size: 22rpx;
      margin: 10rpx 0 26rpx 0;
    }

    .tit3 {
      color: #ffdaaf;
      font-size: 24rpx;
      .iconfont {
        font-size: 20rpx;
      }
    }
  }

  .listBox {
    padding: 14rpx 0;

    .listActive {
      background-image: url('~@/static/images/lingyhj.png');
      background-size: 100% 100%;
    }

    .listHui {
      background-image: url('~@/static/images/weiling.png');
      background-size: 100% 100%;
    }

    .list {
      width: 170rpx;
      height: 210rpx;
      padding: 16rpx 0;
      text-align: center;
      margin-left: 24rpx;

      .tit {
        font-size: 18rpx;
        padding: 0 26rpx;
      }

      .titActive {
        color: #c99959;
      }

      .price {
        font-size: 46rpx;
        font-weight: 900;
        margin-top: 4rpx;
      }

      .pricehui {
        color: #b2b2b2;
      }
      .fonthui {
        background-color: #f5f5f5 !important;
      }
      .yuan {
        font-size: 24rpx;
      }

      .ling {
        font-size: 24rpx;
        margin-top: 9.5rpx;
        width: 102rpx;
        height: 36rpx;
        line-height: 36rpx;
        background-color: #ffe5c7;
        border-radius: 28rpx;
        margin: auto;
      }

      .priceM {
        color: #ffdaaf;
        font-size: 22rpx;
        margin-top: 14rpx;
      }
    }
  }
}

.sticky-box {
  /* #ifndef APP-PLUS-NVUE */
  display: flex;
  position: -webkit-sticky;
  /* #endif */
  position: sticky;
  /* #ifdef H5*/
  top: var(--window-top);
  /* #endif */

  z-index: 99;
  flex-direction: row;
  margin: 0px;
  background: #f5f5f5;
  padding: 30rpx 0;
}

.listAll {
  width: 20%;
  text-indent: 62rpx;
  font-size: 30rpx;
  border-left: 1px #eee solid;
  margin: 1% 0;
  padding: 5rpx;
  position: relative;

  image {
    position: absolute;
    left: 20rpx;
    top: 8rpx;
  }
}

.tab {
  position: relative;
  display: flex;
  font-size: 28rpx;
  white-space: nowrap;

  &__item {
    flex: 1;
    padding: 0 20rpx;
    text-align: center;
    height: 60rpx;
    line-height: 60rpx;
    color: #666;

    &.active {
      color: #09c2c9;
    }
  }
}

.tab__line {
  display: block;
  height: 6rpx;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1;
  border-radius: 3rpx;
  position: relative;
  background: #2fc6cd;
}

.scroll-view_H {
  white-space: nowrap;
  width: 100%;
}

.privacy-wrapper {
  z-index: 999;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #7f7f7f;

  .privacy-box {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 560rpx;
    padding: 50rpx 45rpx 0;
    background: #fff;
    border-radius: 20rpx;

    .title {
      text-align: center;
      font-size: 32rpx;
      text-align: center;
      color: #333;
      font-weight: 700;
    }

    .content {
      margin-top: 20rpx;
      line-height: 1.5;
      font-size: 26rpx;
      color: #666;
      text-indent: 54rpx;

      i {
        font-style: normal;
        color: #f0f0f0;
      }
    }

    .btn-box {
      margin-top: 40rpx;
      text-align: center;
      font-size: 30rpx;

      .btn-item {
        height: 82rpx;
        line-height: 82rpx;
        background: linear-gradient(90deg, #f67a38 0%, #f11b09 100%);
        color: #fff;
        border-radius: 41rpx;
      }

      .btn {
        padding: 30rpx 0;
      }
    }
  }
}

.page-index {
  display: flex;
  flex-direction: column;
  min-height: 100%;
  background: linear-gradient(180deg, #fff 0%, #f5f5f5 100%);

  .header {
    width: 100%;
    background-color: #f0f0f0;
    padding: 28rpx 30rpx;

    .serch-wrapper {
      align-items: center;

      .logo {
        width: 118rpx;
        height: 42rpx;
        margin-right: 24rpx;
      }

      image {
        width: 118rpx;
        height: 42rpx;
      }

      .input {
        display: flex;
        align-items: center;
        width: 546rpx;
        height: 58rpx;
        padding: 0 0 0 30rpx;
        background: rgba(247, 247, 247, 1);
        border: 1px solid rgba(241, 241, 241, 1);
        border-radius: 29rpx;
        color: #bbbbbb;
        font-size: 26rpx;

        .iconfont {
          margin-right: 20rpx;
          font-size: 26rpx;
          color: #666666;
        }
      }
    }

    .tabNav {
      padding-top: 24rpx;
    }
  }

  /* #ifdef MP */
  .mp-header {
    z-index: 999;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    /* #ifdef H5 */
    padding-bottom: 20rpx;
    /* #endif */
    background-color: #f0f0f0;

    .serch-wrapper {
      height: 100%;
      align-items: center;
      padding: 0 50rpx 0 53rpx;

      image {
        width: 118rpx;
        height: 42rpx;
        margin-right: 30rpx;
      }

      .input {
        display: flex;
        align-items: center;
        /* #ifdef MP */
        width: 305rpx;
        /* #endif */
        height: 50rpx;
        padding: 0 0 0 30rpx;
        background: rgba(247, 247, 247, 1);
        border: 1px solid rgba(241, 241, 241, 1);
        border-radius: 29rpx;
        color: #bbbbbb;
        font-size: 28rpx;

        .iconfont {
          margin-right: 20rpx;
        }
      }
    }
  }

  /* #endif */

  .page_content {
    background-color: #f5f5f5;
    /* #ifdef H5 */
    // margin-top: 20rpx !important;
    /* #endif */
    padding: 0 30rpx;

    .swiper {
      position: relative;
      width: 100%;
      height: 280rpx;
      margin: 0 auto;
      border-radius: 10rpx;
      overflow: hidden;
      margin-bottom: 25rpx;
      /* #ifdef MP */
      z-index: 10;
      margin-top: 20rpx;

      /* #endif */
      swiper,
      .swiper-item,
      image {
        width: 100%;
        height: 280rpx;
        border-radius: 10rpx;
      }
    }

    .nav {
      padding-bottom: 26rpx;
      background: #fff;
      opacity: 1;
      border-radius: 14rpx;
      width: 100%;
      margin-bottom: 30rpx;

      .item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 30rpx;

        image {
          width: 82rpx;
          height: 82rpx;
        }
      }
    }

    .nav-bd {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .txt {
          font-size: 32rpx;
          color: #282828;
        }

        .label {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 124rpx;
          height: 32rpx;
          margin-top: 5rpx;
          font-size: 24rpx;
          color: #999;
        }

        &.active {
          color: #f0f0f0;

          .txt {
            color: #f0f0f0;
          }

          .label {
            background: linear-gradient(90deg, #f0f0f0 0%, #f0f0f0 100%);
            border-radius: 16rpx;
            color: #fff;
          }
        }
      }
    }

    .index-product-wrapper {
      margin-bottom: 110rpx;

      &.on {
        min-height: 1500rpx;
      }

      .list-box {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        .item {
          width: 335rpx;
          margin-bottom: 20rpx;
          background-color: #fff;
          border-radius: 10rpx;
          overflow: hidden;

          image {
            width: 100%;
            height: 330rpx;
          }

          .text-info {
            padding: 10rpx 20rpx 15rpx;

            .title {
              color: #222222;
            }

            .old-price {
              margin-top: 8rpx;
              font-size: 26rpx;
              color: #aaaaaa;
              text-decoration: line-through;

              text {
                margin-right: 2px;
                font-size: 20rpx;
              }
            }

            .price {
              display: flex;
              align-items: flex-end;
              color: #f0f0f0;
              font-size: 34rpx;
              font-weight: 800;

              text {
                padding-bottom: 4rpx;
                font-size: 24rpx;
                font-weight: 800;
              }

              .txt {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 28rpx;
                height: 28rpx;
                margin-left: 15rpx;
                margin-bottom: 10rpx;
                border: 1px solid #f0f0f0;
                border-radius: 4rpx;
                font-size: 22rpx;
                font-weight: normal;
              }
            }
          }
        }

        &.on {
          display: flex;
        }
      }
    }
  }
}

.productList {
  /* #ifdef H5 */
  padding-bottom: 140rpx;
  /* #endif */
}

.productList .list {
  padding: 0 20rpx;
}

.productList .list.on {
  background-color: #fff;
  border-top: 1px solid #f6f6f6;
}

.productList .list .item {
  width: 345rpx;
  margin-top: 20rpx;
  background-color: #fff;
  border-radius: 10rpx;
}

.productList .list .item.on {
  width: 100%;
  display: flex;
  border-bottom: 1rpx solid #f6f6f6;
  padding: 30rpx 0;
  margin: 0;
}

.productList .list .item .pictrue {
  position: relative;
  width: 100%;
  height: 345rpx;
}

.productList .list .item .pictrue.on {
  width: 180rpx;
  height: 180rpx;
}

.productList .list .item .pictrue image {
  width: 100%;
  height: 100%;
  border-radius: 20rpx 20rpx 0 0;
}

.productList .list .item .pictrue image.on {
  border-radius: 6rpx;
}

.productList .list .item .text {
  padding: 20rpx 17rpx 26rpx 17rpx;
  font-size: 30rpx;
  color: #222;
}

.productList .list .item .text.on {
  width: 508rpx;
  padding: 0 0 0 22rpx;
}

.productList .list .item .text .money {
  font-size: 26rpx;
  font-weight: bold;
  margin-top: 8rpx;
}

.productList .list .item .text .money.on {
  margin-top: 50rpx;
}

.productList .list .item .text .money .num {
  font-size: 34rpx;
}

.productList .list .item .text .vip {
  font-size: 22rpx;
  color: #aaa;
  margin-top: 7rpx;
}

.productList .list .item .text .vip.on {
  margin-top: 12rpx;
}

.productList .list .item .text .vip .vip-money {
  font-size: 24rpx;
  color: #282828;
  font-weight: bold;
}

.productList .list .item .text .vip .vip-money image {
  width: 46rpx;
  height: 21rpx;
  margin-left: 4rpx;
}

.pictrue {
  position: relative;
}

.fixed {
  z-index: 100;
  position: fixed;
  left: 0;
  top: 0;
  background: linear-gradient(90deg, red 50%, #ff5400 100%);
}

.mores-txt {
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 70rpx;
  color: #999;
  font-size: 24rpx;

  .iconfont {
    margin-top: 2rpx;
    font-size: 20rpx;
  }
}

.menu-txt {
  font-size: 24rpx;
  color: #454545;
}

.mp-bg {
  position: absolute;
  left: 0;
  /* #ifdef H5 */
  top: 98rpx;
  /* #endif */
  width: 100%;
  height: 304rpx;
  background: linear-gradient(180deg, #e93323 0%, #f5f5f5 100%, #751a12 100%);
}
</style>
