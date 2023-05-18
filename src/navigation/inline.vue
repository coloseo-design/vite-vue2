<template>
  <div class="inline">
    <div class="title2">内嵌式导航</div>
    <Demo :code="code">
      <div style="background: #fff;">
        <Menu :items="items" style="height: 400px;" />
      </div>
    </Demo>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import Icon from '@uni-vue/icon';

export default defineComponent({
  data() {
    const items = [{
      title: '工作台',
      value: '工作台',
      icon: this.$createElement(Icon, { props: { name: 'app-line' } }),
      children: [{
        title: '二级标题1',
        value: '二级标题1',
      }, {
        title: '二级标题2',
        value: '二级标题2',
        children: [{
          title: '三级标题1',
          value: '三级标题1',
        }, {
          title: '三级标题2',
          value: '三级标题2',
          children: [{
            title: '四级标题1',
            value: '四级标题1',
          }, {
            title: '四级标题2',
            value: '四级标题2',
          }, {
            title: '四级标题3',
            value: '四级标题3',
          }]
        }, {
          title: '三级标题3',
          value: '三级标题3',
        }]
      }, {
        title: '二级标题3',
        value: '二级标题3',
      }]
    }, {
      title: '表单页',
      value: '表单页',
      icon: this.$createElement(Icon, { props: { name: 'setting-line' } }),
    }, {
      title: '列表页',
      value: '列表页',
      icon: this.$createElement(Icon, { props: { name: 'menu-line' } }),
    }, {
      title: '详情页',
      value: '详情页',
      icon: this.$createElement(Icon, { props: { name: 'document1-line' } }),
    }, {
      title: '结果页',
      value: '结果页',
      icon: this.$createElement(Icon, { props: { name: 'check1-line' } }),
    }, {
      title: '弹框页',
      value: '弹框页',
      icon: this.$createElement(Icon, { props: { name: 'popup-window-line' } }),
    }, {
      title: '异常页',
      value: '异常页',
      icon: this.$createElement(Icon, { props: { name: 'attention1-line' } }),
    }];
    return {
      items,
      code: `
<template>
  <div style="background: #fff;">
    <Menu :items="items" style="height: 400px;" />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import Icon from '@uni-vue/icon';

export default defineComponent({
  data() {
    const items = [{
      title: '工作台',
      value: '工作台',
      icon: this.$createElement(Icon, { props: { name: 'app-line' } }),
      children: [{
        title: '二级标题1',
        value: '二级标题1',
      }, {
        title: '二级标题2',
        value: '二级标题2',
        children: [{
          title: '三级标题1',
          value: '三级标题1',
        }, {
          title: '三级标题2',
          value: '三级标题2',
          children: [{
            title: '四级标题1',
            value: '四级标题1',
          }, {
            title: '四级标题2',
            value: '四级标题2',
          }, {
            title: '四级标题3',
            value: '四级标题3',
          }]
        }, {
          title: '三级标题3',
          value: '三级标题3',
        }]
      }, {
        title: '二级标题3',
        value: '二级标题3',
      }]
    }, {
      title: '表单页',
      value: '表单页',
      icon: this.$createElement(Icon, { props: { name: 'setting-line' } }),
    }, {
      title: '列表页',
      value: '列表页',
      icon: this.$createElement(Icon, { props: { name: 'menu-line' } }),
    }, {
      title: '详情页',
      value: '详情页',
      icon: this.$createElement(Icon, { props: { name: 'document1-line' } }),
    }, {
      title: '结果页',
      value: '结果页',
      icon: this.$createElement(Icon, { props: { name: 'check1-line' } }),
    }, {
      title: '弹框页',
      value: '弹框页',
      icon: this.$createElement(Icon, { props: { name: 'popup-window-line' } }),
    }, {
      title: '异常页',
      value: '异常页',
      icon: this.$createElement(Icon, { props: { name: 'attention1-line' } }),
    }];
    return {
      items,
    }
  }
})
<\/script>
      `,
    }
  },
})
</script>
