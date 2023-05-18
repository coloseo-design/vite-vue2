import Vue from 'vue';
import "./style.css";
import hls from "highlight.js";
import VueRouter from "vue-router";
import Button from '@uni-vue/button';
import Icon from '@uni-vue/icon';
import ThemeProvider from '@uni-vue/ThemeProvider';
import Header from '@uni-vue/header';
import Dropdown from '@uni-vue/dropdown';
import Menu from '@uni-vue/menu';
import Tooltip from '@uni-vue/tooltip';
import Badge from '@uni-vue/badge';
import Message from '@uni-vue/message';

import Home from './home/index.vue';
import Business from './head/business.vue';
import Publicity from './head/publicity.vue';
import Comprehensive from './head/comprehensive.vue';
import Demo from './components/common/demo.vue';
import Layout from './components/layout/index.vue';
import Startup from './startup/index.vue';
import Inline from './navigation/inline.vue';
import Horizontal from './navigation/horizontal.vue';
import Vertical from './navigation/vertical.vue';
import Editor from './editor.vue';

import '@uni-vue/button/lib/styles/index.css';
import '@uni-vue/header/lib/styles/index.css';
import '@uni-vue/dropdown/lib/styles/index.css';
import '@uni-vue/menu/lib/styles/index.css';
import '@uni-vue/tooltip/lib/styles/index.css';
import '@uni-vue/badge/lib/styles/index.css';
import '@uni-vue/message/lib/styles/index.css';

import 'highlight.js/styles/arduino-light.css'; // 引入内置样式

import store from './store/index.js';

const router = new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: Startup,
      name: '快速使用'
    },
    {
      path: '/colors',
      component: Home,
      name: '色彩'
    },
    {
      path: '/business',
      component: Business,
      name: '业务类'
    },
    {
      path: '/publicity',
      component: Publicity,
      name: '宣传类'
    },
    {
      path: '/comprehensive',
      component: Comprehensive,
      name: '综合类'
    },
    {
      path: '/inline',
      component: Inline,
      name: '内嵌式导航'
    },
    {
      path: '/horizontal',
      component: Horizontal,
      name: '顶部导航'
    },
    {
      path: '/vertical',
      component: Vertical,
      name: '展开式导航'
    },
    {
      path: '/editor',
      component: Editor,
      name: '富文本编辑'
    }
  ],
});

Vue.use(VueRouter);
Vue.directive("highlight", function (el) {
  const blocks = el.querySelectorAll("pre code");
  blocks.forEach((block) => {
    hls.highlightBlock(block);
  });
});

Vue.use({
  install(app) {
    app.component(Button.name, Button);
    app.component(Icon.name, Icon);
    app.component(Header.name, Header);
    app.component(Dropdown.name, Dropdown);
    app.component(Menu.name, Menu);
    app.component(Tooltip.name, Tooltip);
    app.component(Badge.name, Badge);
    app.component(Demo.name, Demo);
    app.component('Message', Message);
  },
});

const Bootstrap = new Vue({
  render: (h) => h(ThemeProvider, [h(Layout)]),
  router,
  store, // 全局store
});
Bootstrap.$mount("#app");
