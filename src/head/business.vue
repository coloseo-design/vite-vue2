<template>
  <div class="business">
    <div class="title2">业务类</div>
    <div class="title3">1.业务类-基础头部（配合侧部导航使用）</div>
    <Demo :code="code">
      <Header
        bordered
        placeholder="输入内容查询"
        title="中国联通设计系统"
        href="http://www.baidu.com"
        :right-nav-items="menus"
        @rightNavItemClick="onRightNavItemClick"
      >
        <template #renderMenu="menu">
          <Dropdown v-if="menu.key !== '自定义'" :trigger="['click']" @visibleChange="handleChange">
            <div class="right-menu">
              <div class="icon">
                <img :src="menu.img" :width="menu.key === '岗位名称' ? '15' : '24'" />
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
              <img :src="menu.img" width="15" />
            </div>
            <div class="title">{{ menu.title }}</div>
          </div>
        </template>
      </Header>
    </Demo>
    <div class="title3">2.业务类-带搜索框头部（配合侧部导航使用）</div>
    <Demo :code="code2">
      <Header
        bordered
        placeholder="输入内容查询"
        title="中国联通设计系统"
        search-type="default"
        href="http://www.baidu.com"
        :right-nav-items="menus"
        @rightNavItemClick="onRightNavItemClick"
      >
        <template #renderMenu="menu">
          <Dropdown v-if="menu.key !== '自定义'" :trigger="['click']" @visibleChange="handleChange">
            <div class="right-menu">
              <div class="icon">
                <img :src="menu.img" :width="menu.key === '岗位名称' ? '15' : '24'" />
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
              <img :src="menu.img" width="15" />
            </div>
            <div class="title">{{ menu.title }}</div>
          </div>
        </template>
      </Header>
    </Demo>
    <div class="title3">3.业务类-基础头部-新消息（配合侧部导航使用）</div>
    <Demo :code="code3">
      <Header
        bordered
        placeholder="输入内容查询"
        title="中国联通设计系统"
        href="http://www.baidu.com"
        :right-nav-items="menus"
        @rightNavItemClick="onRightNavItemClick"
      >
        <template #renderMenu="menu">
          <Dropdown v-if="menu.key !== '自定义'" :trigger="['click']" @visibleChange="handleChange">
            <div class="right-menu">
              <div class="icon">
                <img :src="menu.img" :width="menu.key === '岗位名称' ? '15' : '24'" />
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
            <Badge dot>
              <div class="icon">
                <img :src="menu.img" width="15" />
              </div>
            </Badge>
            <div class="title">{{ menu.title }}</div>
          </div>
        </template>
      </Header>
    </Demo>
    <div class="title3">4.业务类-高级搜索框头部（配合侧部导航使用）</div>
    <Demo :code="code4">
      <Header
        bordered
        placeholder="输入内容查询"
        title="中国联通设计系统"
        search-type="default"
        :search-select-options="search_select_options"
        href="http://www.baidu.com"
        :right-nav-items="menus"
        @rightNavItemClick="onRightNavItemClick"
      >
        <template #renderMenu="menu">
          <Dropdown v-if="menu.key !== '自定义'" :trigger="['click']" @visibleChange="handleChange">
            <div class="right-menu">
              <div class="icon">
                <img :src="menu.img" :width="menu.key === '岗位名称' ? '15' : '24'" />
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
              <img :src="menu.img" width="15" />
            </div>
            <div class="title">{{ menu.title }}</div>
          </div>
        </template>
      </Header>
    </Demo>
    <div class="title3">5.业务类-基础头部（配合顶部导航使用）</div>
    <Demo :code="code5">
      <Header
        placeholder="输入内容查询"
        title="中国联通设计系统"
        href="http://www.baidu.com"
        :right-nav-items="menus"
        @rightNavItemClick="onRightNavItemClick"
      >
        <template #renderMenu="menu">
          <Dropdown v-if="menu.key !== '自定义'" :trigger="['click']" @visibleChange="handleChange">
            <div class="right-menu">
              <div class="icon">
                <img :src="menu.img" :width="menu.key === '岗位名称' ? '15' : '24'" />
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
              <img :src="menu.img" width="15" />
            </div>
            <div class="title">{{ menu.title }}</div>
          </div>
        </template>
      </Header>
      <Menu :items="items" mode="horizontal" topNav />
    </Demo>
    <div class="title3">6.业务类-带搜索框头部（配合顶部导航使用）</div>
    <Demo :code="code6">
      <Header
        placeholder="输入内容查询"
        title="中国联通设计系统"
        search-type="default"
        href="http://www.baidu.com"
        :right-nav-items="menus"
        @rightNavItemClick="onRightNavItemClick"
      >
        <template #renderMenu="menu">
          <Dropdown v-if="menu.key !== '自定义'" :trigger="['click']" @visibleChange="handleChange">
            <div class="right-menu">
              <div class="icon">
                <img :src="menu.img" :width="menu.key === '岗位名称' ? '15' : '24'" />
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
              <img :src="menu.img" width="15" />
            </div>
            <div class="title">{{ menu.title }}</div>
          </div>
        </template>
      </Header>
      <Menu :items="items" mode="horizontal" topNav />
    </Demo>
    <div class="title3">7.业务类-基础头部-新消息（配合顶部导航使用）</div>
    <Demo :code="code7">
      <Header
        placeholder="输入内容查询"
        title="中国联通设计系统"
        href="http://www.baidu.com"
        :right-nav-items="menus"
        @rightNavItemClick="onRightNavItemClick"
      >
        <template #renderMenu="menu">
          <Dropdown v-if="menu.key !== '自定义'" :trigger="['click']" @visibleChange="handleChange">
            <div class="right-menu">
              <div class="icon">
                <img :src="menu.img" :width="menu.key === '岗位名称' ? '15' : '24'" />
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
            <Badge dot>
              <div class="icon">
                <img :src="menu.img" width="15" />
              </div>
            </Badge>
            <div class="title">{{ menu.title }}</div>
          </div>
        </template>
      </Header>
      <Menu :items="items" mode="horizontal" topNav />
    </Demo>
    <div class="title3">8.业务类-高级搜索框头部（配合侧部导航使用）</div>
    <Demo :code="code8">
      <Header
        placeholder="输入内容查询"
        title="中国联通设计系统"
        search-type="default"
        :search-select-options="search_select_options"
        href="http://www.baidu.com"
        :right-nav-items="menus"
        @rightNavItemClick="onRightNavItemClick"
      >
        <template #renderMenu="menu">
          <Dropdown v-if="menu.key !== '自定义'" :trigger="['click']" @visibleChange="handleChange">
            <div class="right-menu">
              <div class="icon">
                <img :src="menu.img" :width="menu.key === '岗位名称' ? '15' : '24'" />
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
              <img :src="menu.img" width="15" />
            </div>
            <div class="title">{{ menu.title }}</div>
          </div>
        </template>
      </Header>
      <Menu :items="items" mode="horizontal" topNav />
    </Demo>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import img1 from './../assets/answer.png';
import img2 from './../assets/person.png';
import img3 from './../assets/avatar.png';


export default defineComponent({
  data() {
    const menus = [{
      title: '自定义',
      key: '自定义',
      img: img1,
    }, {
      title: '岗位名称',
      key: '岗位名称',
      img: img2,
    }, {
      title: '你好, 林清',
      key: '你好, 林清',
      img: img3,
    }];
    const search_select_options = [{
      key: '商品',
      value: '商品',
      label: '商品'
    }, {
      key: '品牌',
      value: '品牌',
      label: '品牌'
    }, {
      key: '供应商',
      value: '供应商',
      label: '供应商'
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
      search_select_options,
      items,
      code: `
<template>
  <div>
    <Header
      bordered
      placeholder="输入内容查询"
      title="中国联通设计系统"
      href="http://www.baidu.com"
      :right-nav-items="menus"
      @rightNavItemClick="onRightNavItemClick"
    >
      <template #renderMenu="menu">
        <Dropdown v-if="menu.key !== '自定义'" :trigger="['click']" @visibleChange="handleChange">
          <div class="right-menu">
            <div class="icon">
              <img :src="menu.img" :width="menu.key === '岗位名称' ? '15' : '24'" />
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
            <img :src="menu.img" width="15" />
          </div>
          <div class="title">{{ menu.title }}</div>
        </div>
      </template>
    </Header>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import img1 from './../assets/answer.png';
import img2 from './../assets/person.png';
import img3 from './../assets/avatar.png';

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
    font-size: 14px;
    display: flex;
    align-items: center;
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
  .uni-header-nav-item {
    &:first-child {
      .icon {
        padding: 4px;
        border-radius: 50%;
        background-color: #f2ebff;
      }
    }
    &:nth-child(2) {
      .icon {
        padding: 4px;
        border-radius: 50%;
        background-color: #ffeeeb;
      }
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
      bordered
      placeholder="输入内容查询"
      title="中国联通设计系统"
      search-type="default"
      href="http://www.baidu.com"
      :right-nav-items="menus"
      @rightNavItemClick="onRightNavItemClick"
    >
      <template #renderMenu="menu">
        <Dropdown v-if="menu.key !== '自定义'" :trigger="['click']" @visibleChange="handleChange">
          <div class="right-menu">
            <div class="icon">
              <img :src="menu.img" :width="menu.key === '岗位名称' ? '15' : '24'" />
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
            <img :src="menu.img" width="15" />
          </div>
          <div class="title">{{ menu.title }}</div>
        </div>
      </template>
    </Header>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import img1 from './../assets/answer.png';
import img2 from './../assets/person.png';
import img3 from './../assets/avatar.png';

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
    font-size: 14px;
    display: flex;
    align-items: center;
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
  .uni-header-nav-item {
    &:first-child {
      .icon {
        padding: 4px;
        border-radius: 50%;
        background-color: #f2ebff;
      }
    }
    &:nth-child(2) {
      .icon {
        padding: 4px;
        border-radius: 50%;
        background-color: #ffeeeb;
      }
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
      code3: `
<template>
  <div>
    <Header
      bordered
      placeholder="输入内容查询"
      title="中国联通设计系统"
      href="http://www.baidu.com"
      :right-nav-items="menus"
      @rightNavItemClick="onRightNavItemClick"
    >
      <template #renderMenu="menu">
        <Dropdown v-if="menu.key !== '自定义'" :trigger="['click']" @visibleChange="handleChange">
          <div class="right-menu">
            <div class="icon">
              <img :src="menu.img" :width="menu.key === '岗位名称' ? '15' : '24'" />
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
          <Badge dot>
            <div class="icon">
              <img :src="menu.img" width="15" />
            </div>
          </Badge>
          <div class="title">{{ menu.title }}</div>
        </div>
      </template>
    </Header>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import img1 from './../assets/answer.png';
import img2 from './../assets/person.png';
import img3 from './../assets/avatar.png';

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
    font-size: 14px;
    display: flex;
    align-items: center;
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
  .uni-header-nav-item {
    &:first-child {
      .icon {
        padding: 4px;
        border-radius: 50%;
        background-color: #f2ebff;
      }
    }
    &:nth-child(2) {
      .icon {
        padding: 4px;
        border-radius: 50%;
        background-color: #ffeeeb;
      }
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
      code4: `
<template>
  <div>
    <Header
      bordered
      placeholder="输入内容查询"
      title="中国联通设计系统"
      search-type="default"
      :search-select-options="search_select_options"
      href="http://www.baidu.com"
      :right-nav-items="menus"
      @rightNavItemClick="onRightNavItemClick"
    >
      <template #renderMenu="menu">
        <Dropdown v-if="menu.key !== '自定义'" :trigger="['click']" @visibleChange="handleChange">
          <div class="right-menu">
            <div class="icon">
              <img :src="menu.img" :width="menu.key === '岗位名称' ? '15' : '24'" />
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
            <img :src="menu.img" width="15" />
          </div>
          <div class="title">{{ menu.title }}</div>
        </div>
      </template>
    </Header>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import img1 from './../assets/answer.png';
import img2 from './../assets/person.png';
import img3 from './../assets/avatar.png';

export default defineComponent({
  data() {
    return {
      menus: ${JSON.stringify(menus, null, 4)},
      search_select_options: ${JSON.stringify(search_select_options, null, 4)},
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
    font-size: 14px;
    display: flex;
    align-items: center;
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
  .uni-header-nav-item {
    &:first-child {
      .icon {
        padding: 4px;
        border-radius: 50%;
        background-color: #f2ebff;
      }
    }
    &:nth-child(2) {
      .icon {
        padding: 4px;
        border-radius: 50%;
        background-color: #ffeeeb;
      }
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
      code5: `
<template>
  <div>
    <Header
      placeholder="输入内容查询"
      title="中国联通设计系统"
      href="http://www.baidu.com"
      :right-nav-items="menus"
      @rightNavItemClick="onRightNavItemClick"
    >
      <template #renderMenu="menu">
        <Dropdown v-if="menu.key !== '自定义'" :trigger="['click']" @visibleChange="handleChange">
          <div class="right-menu">
            <div class="icon">
              <img :src="menu.img" :width="menu.key === '岗位名称' ? '15' : '24'" />
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
            <img :src="menu.img" width="15" />
          </div>
          <div class="title">{{ menu.title }}</div>
        </div>
      </template>
    </Header>
    <Menu :items="items" mode="horizontal" topNav />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import img1 from './../assets/answer.png';
import img2 from './../assets/person.png';
import img3 from './../assets/avatar.png';

export default defineComponent({
  data() {
    return {
      menus: ${JSON.stringify(menus, null, 4)},
      dropdownKey: '',
      visible: false,
      items: ${JSON.stringify(items, null, 4)},
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
    font-size: 14px;
    display: flex;
    align-items: center;
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
  .uni-header-nav-item {
    &:first-child {
      .icon {
        padding: 4px;
        border-radius: 50%;
        background-color: #f2ebff;
      }
    }
    &:nth-child(2) {
      .icon {
        padding: 4px;
        border-radius: 50%;
        background-color: #ffeeeb;
      }
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
      code6: `
<template>
  <div>
    <Header
      placeholder="输入内容查询"
      title="中国联通设计系统"
      search-type="default"
      href="http://www.baidu.com"
      :right-nav-items="menus"
      @rightNavItemClick="onRightNavItemClick"
    >
      <template #renderMenu="menu">
        <Dropdown v-if="menu.key !== '自定义'" :trigger="['click']" @visibleChange="handleChange">
          <div class="right-menu">
            <div class="icon">
              <img :src="menu.img" :width="menu.key === '岗位名称' ? '15' : '24'" />
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
            <img :src="menu.img" width="15" />
          </div>
          <div class="title">{{ menu.title }}</div>
        </div>
      </template>
    </Header>
    <Menu :items="items" mode="horizontal" topNav />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import img1 from './../assets/answer.png';
import img2 from './../assets/person.png';
import img3 from './../assets/avatar.png';

export default defineComponent({
  data() {
    return {
      menus: ${JSON.stringify(menus, null, 4)},
      dropdownKey: '',
      visible: false,
      items: ${JSON.stringify(items, null, 4)},
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
    font-size: 14px;
    display: flex;
    align-items: center;
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
  .uni-header-nav-item {
    &:first-child {
      .icon {
        padding: 4px;
        border-radius: 50%;
        background-color: #f2ebff;
      }
    }
    &:nth-child(2) {
      .icon {
        padding: 4px;
        border-radius: 50%;
        background-color: #ffeeeb;
      }
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
      code7: `
<template>
  <div>
    <Header
      placeholder="输入内容查询"
      title="中国联通设计系统"
      href="http://www.baidu.com"
      :right-nav-items="menus"
      @rightNavItemClick="onRightNavItemClick"
    >
      <template #renderMenu="menu">
        <Dropdown v-if="menu.key !== '自定义'" :trigger="['click']" @visibleChange="handleChange">
          <div class="right-menu">
            <div class="icon">
              <img :src="menu.img" :width="menu.key === '岗位名称' ? '15' : '24'" />
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
          <Badge dot>
            <div class="icon">
              <img :src="menu.img" width="15" />
            </div>
          </Badge>
          <div class="title">{{ menu.title }}</div>
        </div>
      </template>
    </Header>
    <Menu :items="items" mode="horizontal" topNav />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import img1 from './../assets/answer.png';
import img2 from './../assets/person.png';
import img3 from './../assets/avatar.png';

export default defineComponent({
  data() {
    return {
      menus: ${JSON.stringify(menus, null, 4)},
      dropdownKey: '',
      visible: false,
      items: ${JSON.stringify(items, null, 4)},
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
    font-size: 14px;
    display: flex;
    align-items: center;
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
  .uni-header-nav-item {
    &:first-child {
      .icon {
        padding: 4px;
        border-radius: 50%;
        background-color: #f2ebff;
      }
    }
    &:nth-child(2) {
      .icon {
        padding: 4px;
        border-radius: 50%;
        background-color: #ffeeeb;
      }
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
      code8: `
<template>
  <div>
    <Header
      placeholder="输入内容查询"
      title="中国联通设计系统"
      search-type="default"
      :search-select-options="search_select_options"
      href="http://www.baidu.com"
      :right-nav-items="menus"
      @rightNavItemClick="onRightNavItemClick"
    >
      <template #renderMenu="menu">
        <Dropdown v-if="menu.key !== '自定义'" :trigger="['click']" @visibleChange="handleChange">
          <div class="right-menu">
            <div class="icon">
              <img :src="menu.img" :width="menu.key === '岗位名称' ? '15' : '24'" />
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
            <img :src="menu.img" width="15" />
          </div>
          <div class="title">{{ menu.title }}</div>
        </div>
      </template>
    </Header>
    <Menu :items="items" mode="horizontal" topNav />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import img1 from './../assets/answer.png';
import img2 from './../assets/person.png';
import img3 from './../assets/avatar.png';

export default defineComponent({
  data() {
    return {
      menus: ${JSON.stringify(menus, null, 4)},
      search_select_options: ${JSON.stringify(search_select_options, null, 4)},
      dropdownKey: '',
      visible: false,
      items: ${JSON.stringify(items, null, 4)},
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
    font-size: 14px;
    display: flex;
    align-items: center;
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
  .uni-header-nav-item {
    &:first-child {
      .icon {
        padding: 4px;
        border-radius: 50%;
        background-color: #f2ebff;
      }
    }
    &:nth-child(2) {
      .icon {
        padding: 4px;
        border-radius: 50%;
        background-color: #ffeeeb;
      }
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
  .business {
    .uni-header-warp {
      background-color: #fff;
    }
    .right-menu {
      font-size: 14px;
      display: flex;
      align-items: center;
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
    .uni-header-nav-item {
      &:first-child {
        .icon {
          padding: 4px;
          border-radius: 50%;
          background-color: #f2ebff;
        }
      }
      &:nth-child(2) {
        .icon {
          padding: 4px;
          border-radius: 50%;
          background-color: #ffeeeb;
        }
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