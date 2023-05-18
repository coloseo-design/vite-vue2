<template>
  <div class="publicity">
    <div class="title2">宣传类</div>
    <div class="title3">1.宣传类-纯色背景头部（结合侧部导航使用）</div>
    <Demo :code="code">
      <Header
        bordered
        placeholder="请输入内容查询"
        title="中国联通设计系统"
        search-type="primary"
        size="lg"
        href="http://www.baidu.com"
        :right-nav-items="menus"
        @rightNavItemClick="onRightNavItemClick"
      >
        <template #renderMenu="menu">
          <Dropdown v-if="menu.key !== '自定义'" :trigger="['click']" @visibleChange="handleChange">
            <div class="right-menu">
              <div class="icon">
                <img :src="menu.img" width="24" v-if="menu.img" />
                <Icon :name="menu.icon" v-else />
              </div>
              <div class="title">{{ menu.title }}</div>
              <div class="dropdown-icon"><Icon :name="dropdownKey === menu.key && visible ? 'up2-line' : 'down2-line'" /></div>
            </div>
            <template #overlay>
              <div class="dropdownPop" v-show="menu.key === '你好, 林清'">
                <p><a href="#"><Icon name="user-line" />个人信息</a></p>
                <p><a href="#"><Icon name="setting-line" />个人设置</a></p>
                <p><a href="#"><Icon name="logout-line" />退出登陆</a></p>
                <p><a href="#"><Icon name="news-line" />我的消息</a></p>
              </div>
            </template>
          </Dropdown>
          <div v-else class="right-menu">
            <div class="icon">
              <Icon :name="menu.icon" />
            </div>
            <div class="title">{{ menu.title }}</div>
          </div>
        </template>
      </Header>
    </Demo>
    <div class="title3">2.宣传类-纯色背景头部（结合顶部导航使用）</div>
    <Demo :code="code2">
      <Header
        placeholder="请输入内容查询"
        title="中国联通设计系统"
        search-type="primary"
        size="lg"
        href="http://www.baidu.com"
        :right-nav-items="menus"
        @rightNavItemClick="onRightNavItemClick"
      >
        <template #renderMenu="menu">
          <Dropdown v-if="menu.key !== '自定义'" :trigger="['click']" @visibleChange="handleChange">
            <div class="right-menu">
              <div class="icon">
                <img :src="menu.img" width="24" v-if="menu.img" />
                <Icon :name="menu.icon" v-else />
              </div>
              <div class="title">{{ menu.title }}</div>
              <div class="dropdown-icon"><Icon :name="dropdownKey === menu.key && visible ? 'up2-line' : 'down2-line'" /></div>
            </div>
            <template #overlay>
              <div class="dropdownPop" v-show="menu.key === '你好, 林清'">
                <p><a href="#"><Icon name="user-line" />个人信息</a></p>
                <p><a href="#"><Icon name="setting-line" />个人设置</a></p>
                <p><a href="#"><Icon name="logout-line" />退出登陆</a></p>
                <p><a href="#"><Icon name="news-line" />我的消息</a></p>
              </div>
            </template>
          </Dropdown>
          <div v-else class="right-menu">
            <div class="icon">
              <Icon :name="menu.icon" />
            </div>
            <div class="title">{{ menu.title }}</div>
          </div>
        </template>
      </Header>
      <Menu :items="items" mode="horizontal" type="publicity" topNav />
    </Demo>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import img from './../assets/avatar-line.png';

export default defineComponent({
  data() {
    const menus = [{
      title: '自定义',
      key: '自定义',
      icon: 'remind-line',
    }, {
      title: '岗位名称',
      key: '岗位名称',
      icon: 'me-line',
    }, {
      title: '你好, 林清',
      key: '你好, 林清',
      img,
    }];
    const items = [{
      title: '二字',
      value: '二字'
    }, {
      title: '三个字',
      value: '三个字'
    }, {
      title: '四个字符',
      value: '四个字符'
    }, {
      title: '六个字符六个',
      value: '六个字符六个'
    }, {
      title: '七个字符七个字',
      value: '七个字符七个字'
    }, {
      title: '八个字符八个字符',
      value: '八个字符八个字符'
    }, {
      title: '九个字符九个字符九个字符',
      value: '九个字符九个字符九个字符',
    }, {
      title: '五个字符五',
      value: '五个字符五'
    }, {
      title: '六个字符六个字符',
      value: '六个字符六个字符'
    }];
    return {
      menus,
      dropdownKey: '',
      visible: false,
      items,
      code: `
<template>
  <div>
    <Header
      bordered
      placeholder="请输入内容查询"
      title="中国联通设计系统"
      search-type="primary"
      size="lg"
      href="http://www.baidu.com"
      :right-nav-items="menus"
      @rightNavItemClick="onRightNavItemClick"
    >
      <template #renderMenu="menu">
        <Dropdown v-if="menu.key !== '自定义'" :trigger="['click']" @visibleChange="handleChange">
          <div class="right-menu">
            <div class="icon">
              <img :src="menu.img" width="24" v-if="menu.img" />
                <Icon :name="menu.icon" v-else />
            </div>
            <div class="title">{{ menu.title }}</div>
            <div class="dropdown-icon"><Icon :name="dropdownKey === menu.key && visible ? 'up2-line' : 'down2-line'" /></div>
          </div>
          <template #overlay>
            <div class="dropdownPop" v-show="menu.key === '你好, 林清'">
              <p><a href="#"><Icon name="user-line" />个人信息</a></p>
              <p><a href="#"><Icon name="setting-line" />个人设置</a></p>
              <p><a href="#"><Icon name="logout-line" />退出登陆</a></p>
              <p><a href="#"><Icon name="news-line" />我的消息</a></p>
            </div>
          </template>
        </Dropdown>
        <div v-else class="right-menu">
          <div class="icon">
            <Icon :name="menu.icon" />
          </div>
          <div class="title">{{ menu.title }}</div>
        </div>
      </template>
    </Header>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import img from './../assets/avatar-line.png';

export default defineComponent({
  data() {
    return {
      menus: ${JSON.stringify(menus, null, 4)},
      dropdownKey: '',
      visible: false,
    }
  },
  methods: {
    onRightNavItemClick(evt, nav) {
      this.dropdownKey = nav.key;
    },
    handleChange(visible) {
      this.visible = visible;
    },
  },
})
<\/script>

<style lang="less" scoped>
  .uni-header-warp {
    background-color: #fff;
  }
  .right-menu {
    font-size: 16px;
    display: flex;
    align-items: center;
    .icon {
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
</style>
      `,
      code2: `
<template>
<div>
  <Header
    placeholder="请输入内容查询"
    title="中国联通设计系统"
    search-type="primary"
    size="lg"
    href="http://www.baidu.com"
    :right-nav-items="menus"
    @rightNavItemClick="onRightNavItemClick"
  >
    <template #renderMenu="menu">
      <Dropdown v-if="menu.key !== '自定义'" :trigger="['click']" @visibleChange="handleChange">
        <div class="right-menu">
          <div class="icon">
            <img :src="menu.img" width="24" v-if="menu.img" />
                <Icon :name="menu.icon" v-else />
          </div>
          <div class="title">{{ menu.title }}</div>
          <div class="dropdown-icon"><Icon :name="dropdownKey === menu.key && visible ? 'up2-line' : 'down2-line'" /></div>
        </div>
        <template #overlay>
          <div class="dropdownPop" v-show="menu.key === '你好, 林清'">
            <p><a href="#"><Icon name="user-line" />个人信息</a></p>
            <p><a href="#"><Icon name="setting-line" />个人设置</a></p>
            <p><a href="#"><Icon name="logout-line" />退出登陆</a></p>
            <p><a href="#"><Icon name="news-line" />我的消息</a></p>
          </div>
        </template>
      </Dropdown>
      <div v-else class="right-menu">
        <div class="icon">
          <Icon :name="menu.icon" />
        </div>
        <div class="title">{{ menu.title }}</div>
      </div>
    </template>
  </Header>
  <Menu :items="items" mode="horizontal" type="publicity" topNav />
</div>
</template>

<script>
import { defineComponent } from 'vue';
import img from './../assets/avatar-line.png';

export default defineComponent({
  data() {
    return {
      menus: ${JSON.stringify(menus, null, 4)},
      items: ${JSON.stringify(items, null, 4)},
      dropdownKey: '',
      visible: false,
    }
  },
  methods: {
    onRightNavItemClick(evt, nav) {
      this.dropdownKey = nav.key;
    },
    handleChange(visible) {
      this.visible = visible;
    },
  },
})
<\/script>

<style lang="less" scoped>
  .uni-header-warp {
    background-color: #fff;
  }
  .right-menu {
    font-size: 16px;
    display: flex;
    align-items: center;
    .icon {
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
</style>
      `,
    }
  },
  methods: {
    onRightNavItemClick(evt, nav) {
      this.dropdownKey = nav.key;
    },
    handleChange(visible) {
      this.visible = visible;
    },
  },
})
</script>


<style lang="less" scoped>
  .publicity {
    .uni-header-warp {
      background-color: #fff;
    }
    .right-menu {
      font-size: 16px;
      display: flex;
      align-items: center;
      .icon {
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