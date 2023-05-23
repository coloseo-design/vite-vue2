<template>
  <ProHeader bordered placeholder="输入内容查询" title="中国联通电子会议系统管理平台" href="#" :right-nav-items="menus"
    @rightNavItemClick="onRightNavItemClick">
    <template #renderMenu="menu">
      <Dropdown v-if="menu.key !== '自定义'" :trigger="['click']" @visibleChange="handleChange">
        <div class="right-menu">
          <div class="icon">
            <img :src="menu.img" :width="menu.key === '岗位名称' ? '15' : '24'" />
          </div>
          <div class="title">{{ menu.title }}</div>
          <div class="dropdown-icon">
            <Icon :name="dropdownKey === menu.key && visible ? 'up2-line' : 'down2-line'" />
          </div>
        </div>
        <template #overlay>
          <div class="dropdown_popup" v-show="menu.key === '你好, 林清'">
            <p>
              <a href="#">
                <Icon name="user-line" />个人信息
              </a>
            </p>
            <p>
              <a href="#">
                <Icon name="setting-line" />个人设置
              </a>
            </p>
            <p>
              <a href="#">
                <Icon name="logout-line" />退出登陆
              </a>
            </p>
            <p>
              <a href="#">
                <Icon name="news-line" />我的消息
              </a>
            </p>
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
  </ProHeader>
</template>
<script>
import { defineComponent } from 'vue';
import Icon from '@uni-vue/icon';

import img1 from '../../assets/answer.png';
import img2 from '../../assets/person.png';
import img3 from '../../assets/avatar.png';

export default defineComponent({
  data() {
    return {
      menus: [
        {
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
        }
      ],
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
}

.dropdown_popup {
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
