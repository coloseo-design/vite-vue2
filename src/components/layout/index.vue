<template>
  <div class="page">
    <Header
      placeholder="请输入内容查询"
      title="联通设计系统"
      :href="href"
      size="lg"
      search-type="primary"
      :right-nav-items="menus"
      @rightNavItemClick="onRightNavItemClick"
      style="background: #fff;"
    >
      <template #renderMenu="menu">
        <Dropdown :trigger="['click']" @visibleChange="handleChange">
          <div class="right-menu" style="display: flex; align-items: center;">
            <div class="icon">
              <Icon :name="menu.icon" v-if="menu.icon" />
              <img v-else src="../../assets/avatar-line.png" width="24" />
            </div>
            <div class="title">{{ menu.title }}</div>
            <div class="dropdown-icon"><Icon :name="dropdownKey === menu.key && visible ? 'up2-line' : 'down2-line'" /></div>
          </div>
          <template #overlay>
            <div v-if="menu.icon" class="dropdownPop">
              <p><a @click="gotoVersion1">1.x</a></p>
            </div>
            <div v-else class="dropdownPop">
              <p><a href="#"><Icon name="user-line" />个人信息</a></p>
              <p><a href="#"><Icon name="setting-line" />个人设置</a></p>
              <p><a href="#"><Icon name="logout-line" />退出登陆</a></p>
              <p><a href="#"><Icon name="news-line" />我的消息</a></p>
            </div>
          </template>
        </Dropdown>
      </template>
    </Header>
    <Menu :items="items" mode="horizontal" type="publicity" topNav @select="onTopNavSelect" />
    <div class="bottom-container">
      <Menu :items="items2" v-model="selectKey" :openValues="openKeys" @select="handleSelect" @collapsed="onCollapsed" style="position: absolute; left: 0px; top: 0px; bottom: 0px;" />
      <div class="right-container" :style="{position: 'absolute', left: collapsed ? 0 : '206px', height: '100%', width: collapsed ? '100%' : 'calc(100% - 206px)'}">
        <div class="content" :style="{'margin-left': collapsed ? '0' : '16px'}">
          <div class="content-wrap">
            <router-view></router-view>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue';
import { mapState, mapMutations } from 'vuex';
import Icon from '@uni-vue/icon';
import Footer from './footer.vue';

export default defineComponent({
  data() {
    return {
      href: `${location.origin}`,
      openKeys: ['快速使用'],
      selectKey: '快速使用',
      menus: [
        {
          title: '版本切换',
          key: '版本切换',
          icon: 'menu-line',
        },
        {
          title: '欢迎您',
          key: '欢迎您',
          icon: '',
        },
      ],
      dropdownKey: '',
      visible: false,
      items: [
        {
          title: '首页',
          value: '首页',
        },
        {
          title: '设计规范',
          value: '设计规范',
        },
        {
          title: 'Web端组件库',
          value: 'Web端组件库',
        },
        {
          title: '移动端组件库',
          value: '移动端组件库',
        },
        {
          title: '页面模板Pro',
          value: 'Pro',
          children: [
            {
              title: 'React Pro',
              value: 'React Pro',
              children: [
                {
                  title: '开发者模式',
                  value: 'react-pro/'
                },
                {
                  title: '演示页面',
                  value: '演示页面1',
                },
              ]
            },
            {
              title: 'Vue 2.0 Pro',
              value: 'Vue 2.0 Pro',
              children: [
                {
                  title: '开发者模式',
                  value: 'vue-pro/'
                },
                {
                  title: '演示页面',
                  value: '演示页面2',
                },
              ]
            },
            {
              title: 'JS Pro',
              value: 'JS Pro',
              children: [
                {
                  title: '开发者模式',
                  value: 'js-pro/'
                },
                {
                  title: '演示页面',
                  value: '演示页面3',
                },
              ]
            }
          ]
        },
        {
          title: '图表库',
          value: '图表库',
        },
        {
          title: '资源与下载',
          value: '资源与下载',
        },
      ],
      items2: [
        {
          icon: this.$createElement(Icon, { props: { name: 'file-editing-line' } }),
          title: '快速使用',
          value: '快速使用',
        },
        {
          icon: this.$createElement(Icon, { attrs: { name: 'chart-ring-line' } }),
          title: '色彩',
          value: '色彩',
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
      routeMapping: {
        '业务类': '/business',
        '宣传类': '/publicity',
        '综合类': '/comprehensive',
        '快速使用': '/',
        '色彩': '/colors',
        '内嵌式导航': '/inline',
        '展开式导航': '/vertical',
        '顶部导航': '/horizontal',
        '富文本编辑': '/editor',
      }
    }
  },
  components: { Footer },
  computed: {
    ...mapState(['collapsed']),
  },
  mounted() {
    this.value = this.$route.name;
    this.openKeys = [this.items2.find(i => i?.children?.some(n => n.value === this.$route.name))?.value];
  },
  methods: {
    ...mapMutations(['updateCollapsed']),
    onRightNavItemClick(evt, nav) {
      this.dropdownKey = nav.key;
    },
    handleChange(visible) {
      this.visible = visible;
    },
    handleSelect({ value }) {
      this.$router.push(this.routeMapping[value]);
      const rightContainer = document.querySelector('.right-container');
      rightContainer.scrollTop = 0;
    },
    gotoVersion1(evt) {
      evt.preventDefault();
      // 跳转到v1版本
      window.open(location.origin + '/v1/');
    },
    onTopNavSelect({ item }) {
      if (item.keyPath[0] === 'Pro') {
        if (item.title === '开发者模式') {
          window.open(location.origin + `/${item.value}/`, '_self');
        } else {
          window.open(location.origin + `/preview-js-pro/`);
        }
      }
    },
    onCollapsed(collapsed) {
      this.updateCollapsed(collapsed);
    }
  }
})
</script>

<style lang="less">
  .page {
    min-height: 100vh;
    .right-menu {
      font-size: 16px;
      display: flex;
      align-items: center;
      .icon {
        display: inline-flex;
        color: #595959;
      }
      .title {
        margin-left: 8px;
      }
      .dropdown-icon {
        font-size: 14px;
        margin-left: 4px;
        display: inline-flex;
        color: #595959;
      }
    }
    .bottom-container {
      position: absolute;
      top: 140px;
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
        footer {
          text-align: center;
          font-size: 16px;
          padding: 38px 0 32px;
          height: 132px;
          img {
            margin-right: 5px;
            vertical-align: baseline;
          }
          .row1 {
            color: #2f2f2f;
          }
          .row2 {
            color: #999;
            margin-top: 18px;
          }
        }
      }
    }

    .title2 {
      font-weight: 500;
      font-size: 28px;
      line-height: 36px;
      color: #282828;
    }
    .title3 {
      margin-top: 28px;
      font-weight: 500;
      font-size: 20px;
      line-height: 28px;
      color: #282828;
    }
  }
  .dropdownPop {
    p {
      padding: 8px 16px;
      margin: 0;
      a {
        color: #282828;
        display: flex;
        align-items: center;
      }
      svg {
        font-size: 16px;
        margin-right: 4px;
      }
      &:hover {
        background: #f4f4f4;
        a {
          color: #c20000;
        }
      }
    }
  }
</style>
