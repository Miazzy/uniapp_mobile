<script lang="ts" setup>
import { useInit } from '@/hooks/useInit';

onLoad(() => {
  const { pageName, pagePath, pageQuery } = useInit();
  console.log(pageName, pagePath, pageQuery, 'pageName,pagePath, pageQuery');
});

const show = ref(false);
const openAlert = () => {
  show.value = true;
};
const hideAlert = () => {
  show.value = false;
};

const visible = ref(false);
const open = () => {
  visible.value = true;
};

const card = reactive({
  img: {
    url: 'https://www.thorui.cn/h5/static/images/news/avatar_1.jpg'
  },
  title: {
    text: 'CSDN云计算'
  },
  tag: {
    text: '1小时前'
  },
  header: {
    bgcolor: '#F7F7F7',
    line: true
  }
});

const toast = ref();
const dataList = ref([]);
const list = [
  'https://sf1-cdn-tos.toutiaostatic.com/obj/arco-mobile/_static_/large_image_1.jpg',
  'https://sf1-cdn-tos.toutiaostatic.com/obj/arco-mobile/_static_/large_image_2.jpg',
  'https://sf1-cdn-tos.toutiaostatic.com/obj/arco-mobile/_static_/large_image_3.jpg'
];

dataList.value = [
  {
    name: 'refresh',
    size: 30
  },
  {
    name: 'search',
    size: 30
  },
  {
    name: 'close',
    size: 30
  },
  {
    name: 'shut',
    size: 30
  },
  {
    name: 'plus',
    size: 30
  },
  {
    name: 'star',
    size: 30
  },
  {
    name: 'revoke',
    size: 30
  },
  {
    name: 'shop',
    size: 30
  },
  {
    name: 'shop',
    size: 30
  },
  {
    name: 'order',
    size: 30
  },
  {
    name: 'feedback',
    size: 30
  },
  {
    name: 'like',
    size: 30
  }
];

onMounted(() => {
  const options = {
    msg: '一般消息提示~',
    duration: 2000
  };
});
</script>

<template>
  <view>
    <view class="title-content" style="">Icon示例</view>
    <view class="tui-content">
      <tui-icon name="about" :size="32"></tui-icon>
      <tui-icon name="about-fill" :size="48" unit="rpx"></tui-icon>
      <tui-icon name="about" size="{{32}}"></tui-icon>
      <tui-icon name="about-fill" size="{{48}}" unit="rpx"></tui-icon>
    </view>

    <view class="title-content" style="">Button示例</view>
    <view class="tui-content">
      <tui-button height="68rpx">页面主操作</tui-button>
      <tui-button type="warning" height="68rpx">页面次要操作</tui-button>
      <tui-button type="danger" height="68rpx">页面次要操作</tui-button>
      <tui-button type="gray-primary" height="68rpx">页面次要操作</tui-button>
      <tui-button plain height="68rpx">页面主操作</tui-button>
      <tui-button type="warning" plain height="68rpx">页面次要操作</tui-button>
      <tui-button type="danger" plain height="68rpx">页面次要操作</tui-button>
      <tui-button height="68rpx">页面主操作</tui-button>
      <tui-button type="warning" shape="circle" height="68rpx"
        >页面次要操作</tui-button
      >
      <tui-button type="danger" shape="rightAngle" height="68rpx"
        >页面次要操作</tui-button
      >
      <tui-button disabled height="68rpx">页面主操作</tui-button>
      <tui-button type="warning" disabled height="68rpx"
        >页面次要操作</tui-button
      >
      <tui-button type="danger" disabled height="68rpx"
        >页面次要操作</tui-button
      >
      <tui-button disabled loading height="68rpx">页面主操作</tui-button>
      <tui-button type="warning" disabled loading height="68rpx"
        >页面次要操作</tui-button
      >
      <tui-button type="danger" disabled loading height="68rpx"
        >页面次要操作</tui-button
      >
      <tui-button width="372rpx" height="68rpx">页面主操作</tui-button>
    </view>

    <view class="title-content" style="">Tag示例</view>
    <view class="tui-content">
      <tui-tag type="black">实心标签</tui-tag>
      <tui-tag type="white">实心标签</tui-tag>
      <tui-tag type="danger">实心标签</tui-tag>
      <tui-tag type="warning">实心标签</tui-tag>
      <tui-tag type="black" padding="12rpx">实心标签</tui-tag>
      <tui-tag type="white" padding="20rpx 30rpx">实心标签</tui-tag>
      <tui-tag type="danger" padding="20rpx 30rpx">实心标签</tui-tag>
      <tui-tag type="warning" padding="8rpx" size="24rpx">实心标签</tui-tag>
      <tui-tag type="black" plain>实心标签</tui-tag>
      <tui-tag type="white" plain>实心标签</tui-tag>
      <tui-tag type="danger" plain>实心标签</tui-tag>
      <tui-tag type="warning" plain>实心标签</tui-tag>
      <tui-tag type="black">实心标签</tui-tag>
      <tui-tag type="white" shape="circle">实心标签</tui-tag>
      <tui-tag type="danger" shape="circleLeft">实心标签</tui-tag>
      <tui-tag type="warning" shape="circleRight">实心标签</tui-tag>
    </view>

    <view class="title-content" style="">Badge示例</view>
    <view class="tui-content">
      <view class="tui-badge-item" style="width: 2.2rem">
        <tui-icon name="message"></tui-icon>
        <tui-badge
          type="danger"
          absolute
          scale-ratio="{{0.8}}"
          translate-x="40%"
          top="0.125rem"
          >9</tui-badge
        >
      </view>
    </view>

    <view class="title-content" style="">List示例</view>
    <view class="tui-content">
      <tui-list-view title="不带箭头">
        <tui-list-cell>不带箭头</tui-list-cell>
        <tui-list-cell>不带箭头</tui-list-cell>
        <tui-list-cell>不带箭头</tui-list-cell>
      </tui-list-view>

      <!-- hover 默认为true，所以不需要设置 -->
      <tui-list-view title="带箭头，有点击效果" color="#777">
        <tui-list-cell arrow> 带箭头，有点击效果 </tui-list-cell>
        <tui-list-cell arrow> 带箭头，有点击效果 </tui-list-cell>
        <tui-list-cell arrow> 带箭头，有点击效果 </tui-list-cell>
      </tui-list-view>

      <tui-card :image="card.img" :title="card.title" :tag="card.tag">
        <template #body>
          <view class="tui-default"> 默认卡片内容部分 slot=>body </view>
        </template>
        <template #footer>
          <view class="tui-default"> 默认卡片底部 slot=>footer </view>
        </template>
      </tui-card>

      <tui-grid>
        <block v-for="(item, index) in dataList" :key="index">
          <tui-grid-item :cell="5">
            <view class="tui-grid-icon">
              <tui-icon :name="item.name"></tui-icon>
            </view>
            <text class="tui-grid-label">{{ item.name }}</text>
          </tui-grid-item>
        </block>
      </tui-grid>

      <!-- <tui-loading></tui-loading> -->
      <tui-loadmore :index="1"></tui-loadmore>
      <tui-loadmore :index="2"></tui-loadmore>
      <tui-loadmore :index="3"></tui-loadmore>

      <tui-nomore text="NO MORE"></tui-nomore>
      <tui-nomore text="我是有底线的"></tui-nomore>

      <tui-tips
        ref="toast"
        background-color="#5677fc"
        color="#fff"
        :size="30"
        position="center"
        >提示消息</tui-tips
      >

      <tui-divider>默认divider</tui-divider>
      <tui-scroll-top :scrollTop="0"></tui-scroll-top>
      <!-- <tui-textarea placeholder="请输入内容"></tui-textarea> -->
    </view>

    <view class="title-content" style="">Button示例</view>
    <view class="button-content">
      <i-button>Button</i-button>
      <i-button type="primary">主要按钮</i-button>
      <i-button type="secondary">次要按钮</i-button>
      <i-button type="outline">线框按钮</i-button>
      <i-button status="normal">正常按钮</i-button>
      <i-button status="success">成功按钮</i-button>
      <i-button status="danger">危险按钮</i-button>
      <i-button status="warning">警告按钮</i-button>
      <i-button shape="square">方形</i-button>
      <i-button shape="round">圆角</i-button>
      <i-button shape="circle" icon="edit"> </i-button>
      <i-button loading>加载中</i-button>
      <view>
        <i-button icon="plus" inline style="width: 120px; margin-right: 10px"
          >图标按钮</i-button
        >
        <i-button icon="export" inline style="width: 120px">图标按钮</i-button>
      </view>
    </view>

    <view class="title-content" style="">Icon示例</view>
    <view class="icon-content">
      <i-icon name="smile" size="30"></i-icon>
      <i-icon name="smile" size="30" color="#27C346"></i-icon>
      <i-icon name="send" :rotate="-45" size="30"></i-icon>
      <i-icon name="loading" size="30"></i-icon>
    </view>

    <view class="title-content" style="">Divider示例</view>
    <view class="divider-content">
      <text>Note that this is a message. </text>
      <i-divider></i-divider>
      <text>Note that this is a message. </text>

      <text>Note that this is a message. </text>
      <i-divider align="start"> Text </i-divider>
      <text>Note that this is a message. </text>
      <i-divider> Text </i-divider>
      <text>Note that this is a message. </text>
      <i-divider align="end"> Text </i-divider>
    </view>

    <view class="title-content" style="">Avatar示例</view>
    <view class="avatar-content">
      <i-avatar></i-avatar>
      <i-avatar size="large" bg-color="#4080FF">T</i-avatar>
      <i-avatar
        size="large"
        src="https://sf1-cdn-tos.toutiaostatic.com/obj/arco-mobile/_static_/small_image_6.jpeg"
      ></i-avatar>
      <i-avatar shape="circle"></i-avatar>
      <i-avatar shape="square"></i-avatar>
      <i-avatar size="huge"></i-avatar>
      <i-avatar size="large"></i-avatar>
      <i-avatar size="medium"></i-avatar>
      <i-avatar size="small"></i-avatar>
      <i-avatar size="mini"></i-avatar>
    </view>

    <view class="title-content" style="">Card示例</view>
    <view class="card-content">
      <i-card title="Title" extra="More">
        <view>This is content</view>
        <view>This is content</view>
        <view>This is content</view>
      </i-card>

      <i-card title="Title" extra="More" :header-style="{ border: 'none' }">
        <template #cover>
          <view style="overflow: hidden">
            <image
              mode="aspectFill"
              src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a20012a2d4d5b9db43dfc6a01fe508c0.png~tplv-uwbnlip3yd-webp.webp"
              style="width: 100%; height: 200px"
            ></image>
          </view>
        </template>

        <view>This is content</view>
        <view>This is content</view>
        <view>This is content</view>

        <template #footer>
          <view>This is footer</view>
        </template>
      </i-card>
    </view>

    <view class="title-content" style="">Cell示例</view>
    <view class="cell-content">
      <i-cell label="Cell"></i-cell>
      <i-cell label="List Cell" icon="user"></i-cell>
    </view>

    <view class="title-content" style="">Badge示例</view>
    <view class="badge-content">
      <i-badge dot></i-badge>
      <i-badge text="2"></i-badge>
      <i-badge text="12"></i-badge>
      <i-badge position="br" icon="star">
        <view class="demo-block"> </view>
      </i-badge>
      <i-badge dot position="tl">
        <view class="demo-block"> </view>
      </i-badge>
    </view>

    <view class="title-content" style="">Tag示例</view>
    <view class="tag-content">
      <iui-tag size="large">Large</iui-tag>
      <iui-tag size="medium">Medium</iui-tag>
      <iui-tag size="small">small</iui-tag>
      <iui-tag color="#f53f3f">Red</iui-tag>
      <iui-tag color="#165dff">Blue</iui-tag>
      <iui-tag color="#7bc616">Green</iui-tag>
      <iui-tag icon="github-fill">Github</iui-tag>
    </view>

    <view class="title-content" style="">Ellipsis示例</view>
    <view class="ellipsis-content">
      <iui-ellipsis :lines="4" action>
        This was long before digital audio: this was done with razor blades.
        Today, it's called sampling, and the influence of these bands is felt in
        nearly all it's called sampling, and the influence of these bands is
        felt in nearly all it's called sampling, and the influence of these
        bands is felt in nearly all branches of modern pop music.
      </iui-ellipsis>
    </view>

    <view class="title-content" style="">alert示例</view>
    <view class="alert-content">
      <i-button
        type="primary"
        inline
        style="width: 120px; margin-right: 10px"
        @click="open"
        >打开弹框1</i-button
      >
      <i-button type="primary" inline style="width: 120px" @click="openAlert"
        >打开弹框2</i-button
      >
      <iui-dialog
        v-model="visible"
        :cancel="false"
        title="Dialog Title"
        confirm-text="I know"
      >
        I am a single-line content of the body, center-aligned by default.
      </iui-dialog>
      <tui-alert :show="show" @click="hideAlert" @cancel="hideAlert">
        这是一个alert弹框
      </tui-alert>
    </view>

    <view class="title-content" style="">statistic示例</view>
    <view class="statistic-content">
      <iui-statistic title="Download" :value="125670" separator>
      </iui-statistic>
      <iui-statistic
        extra="Comment"
        :value="40509"
        :precision="2"
      ></iui-statistic>

      <iui-statistic title="New User" :value="125670" separator>
        <template #suffix>
          <iui-icon name="arrowup" style="font-weight: 600"></iui-icon>
        </template>
      </iui-statistic>

      <iui-statistic
        title="User Growth Rate"
        :value="50.52"
        :precision="2"
        :value-style="{ color: '#00B42A' }"
      >
        <template #prefix>
          <iui-icon name="arrowup" style="font-weight: 600"></iui-icon>
        </template>
        <template #suffix> % </template>
      </iui-statistic>
    </view>

    <view class="title-content" style="">noticebar示例</view>
    <view class="noticebar-content">
      <iui-noticebar> Note that this is a reminder message. </iui-noticebar>

      <iui-noticebar icon="sound">
        Note that this is a reminder message.
      </iui-noticebar>

      <iui-noticebar icon="sound" animation>
        Note that this is a reminder message. The message is long, but I can
        choose to have it scroll or wrap, as it does now.
      </iui-noticebar>
    </view>

    <view class="title-content" style="">swiper示例</view>
    <view class="swiper-content">
      <iui-swiper :list="list"></iui-swiper>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.title-content {
  margin-top: 10px;
  margin-left: 8px;
  font-size: 22px;
}
.button-content {
  padding: 0px 5px 0px 5px;
  .iui-button {
    padding: 2px 0px 2px 0px;
    margin: 0px 0px 4px 0px;
  }
}

.icon-content {
  padding: 0px 5px 0px 5px;
}

.divider-content {
  padding: 0px 5px 0px 5px;

  :deep(.iui-divider-text) {
    background-color: #fefefe;
  }
}

.card-content {
  padding: 0px 5px 0px 5px;
  :deep(.iui-card) {
    border-radius: 2px;
    border: 1px solid #e0e0e0;
    background-color: #fefefe;
    font-size: 14px;
    box-sizing: border-box;
    width: 100%;
  }
  :deep(.iui-card-header) {
    display: flex;
    align-items: center;
    padding: 10px 16px;
    border-bottom: 1px solid #e0e0e0;
  }
  :deep(.iui-card-footer) {
    padding: 16px;
    border-top: 1px solid #e0e0e0;
  }
}

.cell-content {
  padding: 0px 5px 0px 5px;

  :deep(.iui-cell-wrapper) {
    width: 100%;
    background-color: #fefefe;
  }
  :deep(.iui-cell-wrapper .iui-cell-label) {
    font-size: 16px;
    white-space: nowrap;
    color: #303030;
  }
}

.ellipsis-content {
  padding: 0px 5px 0px 5px;
  :deep(.iui-ellipsis) {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    position: relative;
    color: #303030;
  }
  :deep(.iui-ellipsis-action) {
    position: absolute;
    right: 0;
    bottom: 0;
    background: #fefefe;
    color: #303030;
    padding-left: 24px;
  }
}

.statistic-content {
  padding: 0px 5px 0px 5px;
}

.noticebar-content {
  padding: 0px 5px 0px 5px;
}

.swiper-content {
  padding: 0px 2px 0px 2px;
}

.tui-content {
  padding: 0px 2px 0px 2px;

  :deep(.tui-btn) {
    margin: 2px 0px 2px 0px;
  }

  .tui-badge-item {
    position: relative;
  }

  .tui-default {
    padding: 20rpx 30rpx;
  }
  .tui-grid-icon {
    width: 64rpx;
    height: 64rpx;
    margin: 0 auto;
    text-align: center;
    vertical-align: middle;
  }

  .tui-grid-label {
    display: block;
    text-align: center;
    font-weight: 400;
    color: #333;
    font-size: 28rpx;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: 10rpx;
  }
}
</style>
