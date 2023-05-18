import Vue from 'vue';
import "./style.css";
import VueRouter from "vue-router";
import Icon from '@uni-vue/icon';
import ThemeProvider from '@uni-vue/ThemeProvider';
import Header from '@uni-vue/header';
import Dropdown from '@uni-vue/dropdown';
import Menu from '@uni-vue/menu';

import Layout from './components/layout/index.vue';
import Editor from './pages/home/index.vue';

import '@uni-vue/header/lib/styles/index.css';
import '@uni-vue/dropdown/lib/styles/index.css';
import '@uni-vue/menu/lib/styles/index.css';

import store from './store/index.js';

const router = new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: Editor,
      name: '富文本编辑'
    }
  ],
});

Vue.use(VueRouter);

Vue.use({
  install(app) {
    app.component(Icon.name, Icon);
    app.component(Header.name, Header);
    app.component(Dropdown.name, Dropdown);
    app.component(Menu.name, Menu);
  },
});

const Bootstrap = new Vue({
  render: (h) => h(ThemeProvider, [h(Layout)]),
  router,
  store, // 全局store
});
Bootstrap.$mount("#app");
