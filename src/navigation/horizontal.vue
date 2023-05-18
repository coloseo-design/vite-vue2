<template>
  <div class="horizontal">
    <div class="title2">顶部导航</div>
    <div class="title3">1.业务类</div>
    <Demo :code="code">
      <Menu :items="items" mode="horizontal" />
    </Demo>
    <div class="title3">2.综合类｜宣传类</div>
    <Demo :code="code2">
      <Menu :items="items" mode="horizontal" type="publicity" />
    </Demo>
    <div class="title3">3.顶部导航样式1</div>
    <Demo :code="code3">
      <Menu :items="items2" mode="horizontal" topNav />
    </Demo>
    <div class="title3">4.顶部导航样式2</div>
    <Demo :code="code4">
      <Menu :items="items2" mode="horizontal" topNav>
        <template #topNavLeft>
          <div style="width: 416px; height: 252px;">
            <img src="./../assets/bg.png" width="100%" />
          </div>
        </template>
      </Menu>
    </Demo>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    const items = [{
      title: '二字',
      value: '二字',
    }, {
      title: '三个字',
      value: '三个字',
      children: [{
        title: '二级下拉八个字符',
        value: '3-1'
      }, {
        title: '二级下拉选择项',
        value: '3-2'
      }, {
        title: '二级下拉选择项',
        value: '3-3'
      }, {
        title: '二级下拉选择项',
        value: '3-4'
      }]
    }, {
      title: '四个字符',
      value: '四个字符',
    }, {
      title: '六个字符六个',
      value: '六个字符六个',
      children: [{
        title: '二级下拉八个字符',
        value: '6-1'
      }, {
        title: '二级下拉选择项',
        value: '6-2'
      }, {
        title: '二级下拉选择项',
        value: '6-3'
      }, {
        title: '二级下拉选择项',
        value: '6-4'
      }]
    }, {
      title: '七个字符七个字',
      value: '七个字符七个字',
    }, {
      title: '八个字符八个字符',
      value: '8-1',
    }, {
      title: '八个字符八个字符',
      value: '8-2',
    }, {
      title: '八个字符八个字符',
      value: '8-3',
    }];
    const items2 = [{
      title: '二字',
      value: '二字',
    }, {
      title: '三个字',
      value: '三个字',
      children: [{
        title: '二级导航栏',
        value: 'a',
        children: [{
          title: '三级导航',
          value: 'a-3-1',
          children: [{
            title: '四级导航四级导航四级导航',
            value: 'a-4-1',
          }]
        }, {
          title: '三级导航',
          value: 'a-3-2',
        }]
      }, {
        title: '二级导航栏',
        value: 'b',
        children: [{
          title: '三级导航',
          value: 'b-3-1',
          children: [{
            title: '四级导航四级导航四级导航',
            value: 'b-4-1',
          }]
        }, {
          title: '三级导航',
          value: 'b-3-2',
        }]
      }, {
        title: '二级导航栏',
        value: 'c',
        children: [{
          title: '三级导航',
          value: 'c-3-1',
          children: [{
            title: '四级导航四级导航四级导航',
            value: 'c-4-1',
          }]
        }, {
          title: '三级导航',
          value: 'c-3-2',
        }]
      }, {
        title: '二级导航栏',
        value: 'd',
        children: [{
          title: '三级导航',
          value: 'd-3-1',
          children: [{
            title: '四级导航四级导航四级导航',
            value: 'd-4-1',
          }]
        }, {
          title: '三级导航',
          value: 'd-3-2',
        }]
      }, {
        title: '二级导航栏',
        value: 'e',
        children: [{
          title: '三级导航',
          value: 'e-3-1',
          children: [{
            title: '四级导航四级导航四级导航',
            value: 'e-4-1',
          }, {
            title: '四级导航四级导航四级导航',
            value: 'e-4-2',
          }, {
            title: '四级导航四级导航四级导航',
            value: 'e-4-3',
          }]
        }]
      }, {
        title: '二级导航栏',
        value: 'f',
        children: [{
          title: '三级导航',
          value: 'f-3-1',
          children: [{
            title: '四级导航四级导航四级导航',
            value: 'f-4-1',
          }]
        }, {
          title: '三级导航',
          value: 'f-3-2',
        }]
      }, {
        title: '二级导航栏',
        value: 'g',
        children: [{
          title: '三级导航',
          value: 'g-3-1',
          children: [{
            title: '四级导航四级导航四级导航',
            value: 'g-4-1',
          }]
        }, {
          title: '三级导航',
          value: 'g-3-2',
        }]
      }, {
        title: '二级导航栏',
        value: 'h',
        children: [{
          title: '三级导航',
          value: 'h-3-1',
          children: [{
            title: '四级导航四级导航四级导航',
            value: 'h-4-1',
          }]
        }, {
          title: '三级导航',
          value: 'h-3-2',
        }]
      }, {
        title: '二级导航栏',
        value: 'i',
        children: [{
          title: '三级导航',
          value: 'i-3-1',
          children: [{
            title: '四级导航四级导航四级导航',
            value: 'i-4-1',
          }, {
            title: '四级导航四级导航四级导航',
            value: 'i-4-2',
          }]
        }, {
          title: '三级导航',
          value: 'i-3-2',
        }]
      }, {
        title: '二级导航栏',
        value: 'j',
        children: [{
          title: '三级导航',
          value: 'j-3-1',
          children: [{
            title: '四级导航四级导航四级导航',
            value: 'j-4-1',
          }, {
            title: '四级导航四级导航四级导航',
            value: 'j-4-2',
          }, {
            title: '四级导航四级导航四级导航',
            value: 'j-4-3',
          }]
        }]
      }, {
        title: '二级导航栏二级导航栏',
        value: 'k',
      }]
    }, {
      title: '四个字符',
      value: '四个字符',
    }, {
      title: '六个字符六个',
      value: '六个字符六个',
    }, {
      title: '七个字符七个字',
      value: '七个字符七个字',
    }];
    return {
      items,
      items2,
      code: `
<template>
  <div>
    <Menu :items="items" mode="horizontal" />
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    const items = [{
      title: '二字',
      value: '二字',
    }, {
      title: '三个字',
      value: '三个字',
      children: [{
        title: '二级下拉八个字符',
        value: '3-1'
      }, {
        title: '二级下拉选择项',
        value: '3-2'
      }, {
        title: '二级下拉选择项',
        value: '3-3'
      }, {
        title: '二级下拉选择项',
        value: '3-4'
      }]
    }, {
      title: '四个字符',
      value: '四个字符',
    }, {
      title: '六个字符六个',
      value: '六个字符六个',
      children: [{
        title: '二级下拉八个字符',
        value: '6-1'
      }, {
        title: '二级下拉选择项',
        value: '6-2'
      }, {
        title: '二级下拉选择项',
        value: '6-3'
      }, {
        title: '二级下拉选择项',
        value: '6-4'
      }]
    }, {
      title: '七个字符七个字',
      value: '七个字符七个字',
    }, {
      title: '八个字符八个字符',
      value: '8-1',
    }, {
      title: '八个字符八个字符',
      value: '8-2',
    }, {
      title: '八个字符八个字符',
      value: '8-3',
    }];
    return {
      items,
    }
  }
})
<\/script>
      `,
      code2: `
<template>
  <div>
    <Menu :items="items" mode="horizontal" type="publicity" />
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    const items = [{
      title: '二字',
      value: '二字',
    }, {
      title: '三个字',
      value: '三个字',
      children: [{
        title: '二级下拉八个字符',
        value: '3-1'
      }, {
        title: '二级下拉选择项',
        value: '3-2'
      }, {
        title: '二级下拉选择项',
        value: '3-3'
      }, {
        title: '二级下拉选择项',
        value: '3-4'
      }]
    }, {
      title: '四个字符',
      value: '四个字符',
    }, {
      title: '六个字符六个',
      value: '六个字符六个',
      children: [{
        title: '二级下拉八个字符',
        value: '6-1'
      }, {
        title: '二级下拉选择项',
        value: '6-2'
      }, {
        title: '二级下拉选择项',
        value: '6-3'
      }, {
        title: '二级下拉选择项',
        value: '6-4'
      }]
    }, {
      title: '七个字符七个字',
      value: '七个字符七个字',
    }, {
      title: '八个字符八个字符',
      value: '8-1',
    }, {
      title: '八个字符八个字符',
      value: '8-2',
    }, {
      title: '八个字符八个字符',
      value: '8-3',
    }];
    return {
      items,
    }
  }
})
<\/script>
      `,
      code3: `
<template>
  <div>
    <Menu :items="items" mode="horizontal" topNav />
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    const items = [{
      title: '二字',
      value: '二字',
    }, {
      title: '三个字',
      value: '三个字',
      children: [{
        title: '二级导航栏',
        value: 'a',
        children: [{
          title: '三级导航',
          value: 'a-3-1',
          children: [{
            title: '四级导航四级导航四级导航',
            value: 'a-4-1',
          }]
        }, {
          title: '三级导航',
          value: 'a-3-2',
        }]
      }, {
        title: '二级导航栏',
        value: 'b',
        children: [{
          title: '三级导航',
          value: 'b-3-1',
          children: [{
            title: '四级导航四级导航四级导航',
            value: 'b-4-1',
          }]
        }, {
          title: '三级导航',
          value: 'b-3-2',
        }]
      }, {
        title: '二级导航栏',
        value: 'c',
        children: [{
          title: '三级导航',
          value: 'c-3-1',
          children: [{
            title: '四级导航四级导航四级导航',
            value: 'c-4-1',
          }]
        }, {
          title: '三级导航',
          value: 'c-3-2',
        }]
      }, {
        title: '二级导航栏',
        value: 'd',
        children: [{
          title: '三级导航',
          value: 'd-3-1',
          children: [{
            title: '四级导航四级导航四级导航',
            value: 'd-4-1',
          }]
        }, {
          title: '三级导航',
          value: 'd-3-2',
        }]
      }, {
        title: '二级导航栏',
        value: 'e',
        children: [{
          title: '三级导航',
          value: 'e-3-1',
          children: [{
            title: '四级导航四级导航四级导航',
            value: 'e-4-1',
          }, {
            title: '四级导航四级导航四级导航',
            value: 'e-4-2',
          }, {
            title: '四级导航四级导航四级导航',
            value: 'e-4-3',
          }]
        }]
      }, {
        title: '二级导航栏',
        value: 'f',
        children: [{
          title: '三级导航',
          value: 'f-3-1',
          children: [{
            title: '四级导航四级导航四级导航',
            value: 'f-4-1',
          }]
        }, {
          title: '三级导航',
          value: 'f-3-2',
        }]
      }, {
        title: '二级导航栏',
        value: 'g',
        children: [{
          title: '三级导航',
          value: 'g-3-1',
          children: [{
            title: '四级导航四级导航四级导航',
            value: 'g-4-1',
          }]
        }, {
          title: '三级导航',
          value: 'g-3-2',
        }]
      }, {
        title: '二级导航栏',
        value: 'h',
        children: [{
          title: '三级导航',
          value: 'h-3-1',
          children: [{
            title: '四级导航四级导航四级导航',
            value: 'h-4-1',
          }]
        }, {
          title: '三级导航',
          value: 'h-3-2',
        }]
      }, {
        title: '二级导航栏',
        value: 'i',
        children: [{
          title: '三级导航',
          value: 'i-3-1',
          children: [{
            title: '四级导航四级导航四级导航',
            value: 'i-4-1',
          }, {
            title: '四级导航四级导航四级导航',
            value: 'i-4-2',
          }]
        }, {
          title: '三级导航',
          value: 'i-3-2',
        }]
      }, {
        title: '二级导航栏',
        value: 'j',
        children: [{
          title: '三级导航',
          value: 'j-3-1',
          children: [{
            title: '四级导航四级导航四级导航',
            value: 'j-4-1',
          }, {
            title: '四级导航四级导航四级导航',
            value: 'j-4-2',
          }, {
            title: '四级导航四级导航四级导航',
            value: 'j-4-3',
          }]
        }]
      }, {
        title: '二级导航栏二级导航栏',
        value: 'k',
      }]
    }, {
      title: '四个字符',
      value: '四个字符',
    }, {
      title: '六个字符六个',
      value: '六个字符六个',
    }, {
      title: '七个字符七个字',
      value: '七个字符七个字',
    }];
    return {
      items,
    }
  }
})
<\/script>
      `,
      code4: `
<template>
  <div>
    <Menu :items="items2" mode="horizontal" topNav>
      <template #topNavLeft>
        <div style="width: 416px; height: 252px;">
          <img src="./../assets/bg.png" width="100%" />
        </div>
      </template>
    </Menu>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    const items = [{
      title: '二字',
      value: '二字',
    }, {
      title: '三个字',
      value: '三个字',
      children: [{
        title: '二级导航栏',
        value: 'a',
        children: [{
          title: '三级导航',
          value: 'a-3-1',
          children: [{
            title: '四级导航四级导航四级导航',
            value: 'a-4-1',
          }]
        }, {
          title: '三级导航',
          value: 'a-3-2',
        }]
      }, {
        title: '二级导航栏',
        value: 'b',
        children: [{
          title: '三级导航',
          value: 'b-3-1',
          children: [{
            title: '四级导航四级导航四级导航',
            value: 'b-4-1',
          }]
        }, {
          title: '三级导航',
          value: 'b-3-2',
        }]
      }, {
        title: '二级导航栏',
        value: 'c',
        children: [{
          title: '三级导航',
          value: 'c-3-1',
          children: [{
            title: '四级导航四级导航四级导航',
            value: 'c-4-1',
          }]
        }, {
          title: '三级导航',
          value: 'c-3-2',
        }]
      }, {
        title: '二级导航栏',
        value: 'd',
        children: [{
          title: '三级导航',
          value: 'd-3-1',
          children: [{
            title: '四级导航四级导航四级导航',
            value: 'd-4-1',
          }]
        }, {
          title: '三级导航',
          value: 'd-3-2',
        }]
      }, {
        title: '二级导航栏',
        value: 'e',
        children: [{
          title: '三级导航',
          value: 'e-3-1',
          children: [{
            title: '四级导航四级导航四级导航',
            value: 'e-4-1',
          }, {
            title: '四级导航四级导航四级导航',
            value: 'e-4-2',
          }, {
            title: '四级导航四级导航四级导航',
            value: 'e-4-3',
          }]
        }]
      }, {
        title: '二级导航栏',
        value: 'f',
        children: [{
          title: '三级导航',
          value: 'f-3-1',
          children: [{
            title: '四级导航四级导航四级导航',
            value: 'f-4-1',
          }]
        }, {
          title: '三级导航',
          value: 'f-3-2',
        }]
      }, {
        title: '二级导航栏',
        value: 'g',
        children: [{
          title: '三级导航',
          value: 'g-3-1',
          children: [{
            title: '四级导航四级导航四级导航',
            value: 'g-4-1',
          }]
        }, {
          title: '三级导航',
          value: 'g-3-2',
        }]
      }, {
        title: '二级导航栏',
        value: 'h',
        children: [{
          title: '三级导航',
          value: 'h-3-1',
          children: [{
            title: '四级导航四级导航四级导航',
            value: 'h-4-1',
          }]
        }, {
          title: '三级导航',
          value: 'h-3-2',
        }]
      }, {
        title: '二级导航栏',
        value: 'i',
        children: [{
          title: '三级导航',
          value: 'i-3-1',
          children: [{
            title: '四级导航四级导航四级导航',
            value: 'i-4-1',
          }, {
            title: '四级导航四级导航四级导航',
            value: 'i-4-2',
          }]
        }, {
          title: '三级导航',
          value: 'i-3-2',
        }]
      }, {
        title: '二级导航栏',
        value: 'j',
        children: [{
          title: '三级导航',
          value: 'j-3-1',
          children: [{
            title: '四级导航四级导航四级导航',
            value: 'j-4-1',
          }, {
            title: '四级导航四级导航四级导航',
            value: 'j-4-2',
          }, {
            title: '四级导航四级导航四级导航',
            value: 'j-4-3',
          }]
        }]
      }, {
        title: '二级导航栏二级导航栏',
        value: 'k',
      }]
    }, {
      title: '四个字符',
      value: '四个字符',
    }, {
      title: '六个字符六个',
      value: '六个字符六个',
    }, {
      title: '七个字符七个字',
      value: '七个字符七个字',
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
