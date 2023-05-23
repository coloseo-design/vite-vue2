import Vue from 'vue';
import "./style.css";
import VueRouter from "vue-router";
import Icon from '@uni-vue/icon';
import * as UniDesignVue from '@uni/vue';
import ThemeProvider from '@uni-vue/ThemeProvider';
import Header from '@uni-vue/header';
import Dropdown from '@uni-vue/dropdown';
import Menu from '@uni-vue/menu';
// import Table from '@uni-vue/table';

import Layout from './components/layout/index.vue';
import Editor from './pages/home/index.vue';
import Table from './pages/table/index.vue';
import DatePickerDemo from './pages/datepicker/index.vue';
import NotFound from './pages/404/index.vue';

import '@uni-vue/header/lib/styles/index.css';
import '@uni-vue/dropdown/lib/styles/index.css';
import '@uni-vue/menu/lib/styles/index.css';

import '@uni/vue/lib/index.css';

import store from './store/index.js';

const router = new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: Editor,
      name: '富文本编辑'
    },
    {
      path: '/table',
      component: Table,
      name: '表格测试'
    },
    {
      path: '/datepicker',
      component: DatePickerDemo,
      name: '日期组件',
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound
    },
  ],
});

Vue.use(VueRouter);

Vue.use({
  install(app) {
    Object.values(UniDesignVue).forEach((e) => {
      e.install ? e.install(app) : app.component(e.name, e);
    });

    app.component('ProHeader', Header);
    app.component('ProMenu', Menu);
  },
});

const Bootstrap = new Vue({
  render: (h) => h(ThemeProvider, [h(Layout)]),
  router,
  store, // 全局store
});
Bootstrap.$mount("#app");
