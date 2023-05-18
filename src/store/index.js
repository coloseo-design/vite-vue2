import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const store = new Vuex.Store({
  state() {
    return {
      collapsed: false,
    }
  },
  mutations: {
    updateCollapsed: (state, collapsed) => {
      state.collapsed = collapsed;
    }
  },
  actions: {},
  getters: {},
  modules: {}
});

export default store;
