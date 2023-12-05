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
</script>

<template>
  <view>
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
      <i-button type="primary" inline @click="open" style="width: 120px;margin-right: 10px;">打开弹框1</i-button>
      <i-button type="primary" inline @click="openAlert" style="width: 120px;">打开弹框2</i-button>
      <iui-dialog
        v-model="visible"
        :cancel="false"
        title="Dialog Title"
        confirm-text="I know"
      >
        I am a single-line content of the body, center-aligned by default.
      </iui-dialog>
      <tui-alert :show="show" @click="hideAlert" @cancel="hideAlert"> 这是一个alert弹框 </tui-alert>
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
</style>
