<template>
  <div class="page">
    <PageHeader />
    <div class="container">
      <ProMenu :items="navs" v-model="selectKey" :openValues="openKeys" @select="handleSelect" @collapsed="onCollapsed"
        style="position: absolute; left: 0px; top: 0px; bottom: 0px;" />
      <div class="right-container"
        :style="{ position: 'absolute', left: collapsed ? 0 : '206px', height: '100%', width: collapsed ? '100%' : 'calc(100% - 206px)' }">
        <div class="content" :style="{ 'margin-left': collapsed ? '0' : '16px' }">
          <div class="content-wrap">
            <router-view>
              <!-- vue router -->
            </router-view>
          </div>
        </div>
        <PageFooter />
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue';
import { mapState, mapMutations } from 'vuex';
import Icon from '@uni-vue/icon';
import PageFooter from './footer.vue';
import PageHeader from './header.vue';

export default defineComponent({
  data() {
    return {
      openKeys: ['富文本'],
      selectKey: '富文本',
      navs: [
        {
          icon: this.$createElement(Icon, { props: { name: 'file-editing-line' } }),
          title: '富文本',
          value: '富文本',
        },
        {
          icon: this.$createElement(Icon, { attrs: { name: 'chart-ring-line' } }),
          title: '表格',
          value: '表格',
        },
        {
          icon: this.$createElement(Icon, { props: { name: 'app-line' } }),
          title: '头部',
          value: '头部',
          children: [
            {
              title: '业务类',
              value: '业务类'
            },
            {
              title: '宣传类',
              value: '宣传类'
            },
            {
              title: '综合类',
              value: '综合类'
            },
          ],
        },
        {
          icon: this.$createElement(Icon, { props: { name: 'list2-line' } }),
          title: '导航',
          value: '导航',
          children: [
            {
              title: '内嵌式导航',
              value: '内嵌式导航'
            },
            {
              title: '展开式导航',
              value: '展开式导航'
            },
            {
              title: '顶部导航',
              value: '顶部导航'
            },
          ],
        },
        {
          icon: this.$createElement(Icon, { props: { name: 'edit-line' } }),
          title: '富文本编辑',
          value: '富文本编辑',
        },
      ],
    }
  },
  components: { PageFooter, PageHeader },
  computed: {
    ...mapState(['collapsed']),
  },
  mounted() {
    this.value = this.$route.name;
    this.openKeys = [this.navs.find(i => i?.children?.some(n => n.value === this.$route.name))?.value];
  },
  methods: {
    // vuex
    ...mapMutations(['updateCollapsed']),
    handleSelect({ value }) {
      const routeMapping = {
        '业务类': '/business',
        '宣传类': '/publicity',
        '综合类': '/comprehensive',
        '富文本': '/',
        '色彩': '/colors',
        '内嵌式导航': '/inline',
        '展开式导航': '/vertical',
        '顶部导航': '/horizontal',
        '表格': '/table',
      };
      this.$router.push(routeMapping[value]);
    },
    onCollapsed(collapsed) {
      // vuex
      this.updateCollapsed(collapsed);
    }
  }
})
</script>

<style lang="less">
.page {
  min-height: 100vh;
  .container {
    position: absolute;
    top: 56px;
    left: 0px;
    right: 0px;
    bottom: 0px;

    .right-container {
      background: #eee;
      overflow: auto;

      .content {
        background-color: #fff;
        padding: 40px 56px;

        .content-wrap {
          max-width: 1366px;
          min-width: 960px;
          margin: 0 auto;
        }
      }
    }
  }
}
</style>
