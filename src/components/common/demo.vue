<template>
  <div class="demo-container">
    <div class="demo">
      <slot></slot>
      <div class="icon-container">
        <Tooltip :title="show ? '收起代码' : '显示代码'" placement="bottom">
          <Icon name="development-surface" @click="handleShow" />
        </Tooltip>
        <Tooltip :title="copySuccess ? '复制成功' : '复制代码'" placement="bottom">
          <Icon name="copy-surface" @click="handleCopy" @mouseleave="onMouseleave" />
        </Tooltip>
      </div>
    </div>
    <div class="code" v-highlight v-show="show">
      <pre>
        <code>{{ code }}</code>
      </pre>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import Message from '@uni-vue/message';

export default defineComponent({
  name: 'Demo',
  props: {
    code: {
      type: String,
    }
  },
  data() {
    return {
      show: false,
      copySuccess: false
    }
  },
  methods: {
    handleShow() {
      this.show = !this.show
    },
    handleCopy() {
      // navigator.clipboard.writeText(this.code).then(() => {
      //   this.copySuccess = true;
      //   Message.success({
      //     text: '复制成功',
      //   });
      // });
      const textarea = document.createElement("textarea");
      textarea.value = `${this.code}`;
      document.body.appendChild(textarea);
      textarea.select();
      if (document.execCommand("copy")) {
        document.execCommand("copy");
      }
      document.body.removeChild(textarea);
      this.copySuccess = true;
      Message.success({
        text: '复制成功',
      });
    },
    onMouseleave() {
      this.copySuccess = false;
    }
  }
})
</script>

<style lang="less">
  .demo-container {
    .demo {
      margin-top: 16px;
      padding: 40px 20px 0 20px;
      background-color: #f2f3f7;
      .icon-container {
        height: 65px;
        display: flex;
        align-items: center;
        justify-content: center;
        svg {
          font-size: 24px;
          color: #969696;
          cursor: pointer;
          outline: none;
          &:first-child {
            margin-right: 16px;
          }
          &:hover {
            color: #d20000;
          }
        }
      }
    }
    .code {
      margin-top: 16px;
      border: 1px solid #e5e5e5;
    }
  }
</style>
