<template>
  <div class="vertical">
    <div class="title2">展开式导航</div>
    <Demo :code="code">
      <div style="background: #fff;">
        <Menu :items="items" mode="vertical" style="height: 400px;" />
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
        title: '二级导航栏',
        value: 'a',
        children: [{
          title: '三级导航',
          value: 'b',
          children: [{
            title: '四级导航四级导航四级导航',
            value: 'c',
          }, {
            title: '四级导航四级导航四级导航',
            value: 'd',
            children: [{
              title: '五级导航五级导航五级导航',
              value: 'f',
            }, {
              title: '五级导航五级导航五级导航五级导航',
              value: 'g',
            }]
          }]
        }, {
          title: '三级导航',
          value: 'h',
        }]
      }, {
        title: '二级导航栏',
        value: 'i',
        children: [{
          title: '三级导航',
          value: 'j',
          children: [{
            title: '四级导航四级导航四级导航',
            value: 'k',
          }, {
            title: '四级导航四级导航四级导航',
            value: 'l',
            children: [{
              title: '五级导航五级导航五级导航',
              value: 'm',
            }, {
              title: '五级导航五级导航五级导航五级导航',
              value: 'n',
            }]
          }]
        }]
      }, {
        title: '二级导航栏',
        value: 'o',
        children: [{
          title: '三级导航',
          value: 'p',
          children: [{
            title: '四级导航四级导航四级导航',
            value: 'q',
          }, {
            title: '四级导航四级导航四级导航',
            value: 'r',
          }]
        }, {
          title: '三级导航',
          value: 's',
          children: [{
            title: '四级导航四级导航四级导航',
            value: 't',
          }, {
            title: '四级导航四级导航四级导航',
            value: 'u',
            children: [{
              title: '五级导航五级导航五级导航',
              value: 'v',
            }, {
              title: '五级导航五级导航五级导航五级导航',
              value: 'w',
            }]
          }]
        }]
      }, {
        title: '二级导航栏',
        value: 'x',
        children: [{
          title: '三级导航',
          value: 'y',
          children: [{
            title: '四级导航四级导航四级导航',
            value: 'z',
          }, {
            title: '四级导航四级导航四级导航',
            value: '0',
            children: [{
              title: '五级导航五级导航五级导航',
              value: '1',
            }, {
              title: '五级导航五级导航五级导航五级导航',
              value: '2',
            }]
          }]
        }, {
          title: '三级导航',
          value: '3',
        }]
      }, {
        title: '二级导航栏',
        value: '4',
        children: [{
          title: '三级导航',
          value: '5',
          children: [{
            title: '四级导航四级导航四级导航',
            value: '6',
          }]
        }, {
          title: '三级导航',
          value: '7',
          children: [{
            title: '四级导航四级导航四级导航',
            value: '8',
          }]
        }]
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
    <Menu :items="items" mode="vertical" style="height: 400px;" />
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
        title: '二级导航栏',
        value: 'a',
        children: [{
          title: '三级导航',
          value: 'b',
          children: [{
            title: '四级导航四级导航四级导航',
            value: 'c',
          }, {
            title: '四级导航四级导航四级导航',
            value: 'd',
            children: [{
              title: '五级导航五级导航五级导航',
              value: 'f',
            }, {
              title: '五级导航五级导航五级导航五级导航',
              value: 'g',
            }]
          }]
        }, {
          title: '三级导航',
          value: 'h',
        }]
      }, {
        title: '二级导航栏',
        value: 'i',
        children: [{
          title: '三级导航',
          value: 'j',
          children: [{
            title: '四级导航四级导航四级导航',
            value: 'k',
          }, {
            title: '四级导航四级导航四级导航',
            value: 'l',
            children: [{
              title: '五级导航五级导航五级导航',
              value: 'm',
            }, {
              title: '五级导航五级导航五级导航五级导航',
              value: 'n',
            }]
          }]
        }]
      }, {
        title: '二级导航栏',
        value: 'o',
        children: [{
          title: '三级导航',
          value: 'p',
          children: [{
            title: '四级导航四级导航四级导航',
            value: 'q',
          }, {
            title: '四级导航四级导航四级导航',
            value: 'r',
          }]
        }, {
          title: '三级导航',
          value: 's',
          children: [{
            title: '四级导航四级导航四级导航',
            value: 't',
          }, {
            title: '四级导航四级导航四级导航',
            value: 'u',
            children: [{
              title: '五级导航五级导航五级导航',
              value: 'v',
            }, {
              title: '五级导航五级导航五级导航五级导航',
              value: 'w',
            }]
          }]
        }]
      }, {
        title: '二级导航栏',
        value: 'x',
        children: [{
          title: '三级导航',
          value: 'y',
          children: [{
            title: '四级导航四级导航四级导航',
            value: 'z',
          }, {
            title: '四级导航四级导航四级导航',
            value: '0',
            children: [{
              title: '五级导航五级导航五级导航',
              value: '1',
            }, {
              title: '五级导航五级导航五级导航五级导航',
              value: '2',
            }]
          }]
        }, {
          title: '三级导航',
          value: '3',
        }]
      }, {
        title: '二级导航栏',
        value: '4',
        children: [{
          title: '三级导航',
          value: '5',
          children: [{
            title: '四级导航四级导航四级导航',
            value: '6',
          }]
        }, {
          title: '三级导航',
          value: '7',
          children: [{
            title: '四级导航四级导航四级导航',
            value: '8',
          }]
        }]
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
