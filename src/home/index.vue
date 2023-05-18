<template>
  <div class="home">
    <div class="startup_body">
      <div class="section">
        <div class="section-title">色彩</div>
        <div class="section-body">
          <div class="section-body-title">色阶</div>
          <div class="section-body-container">
            <div class="color-level">
              <div class="theme-1">#FFF3F3</div>
              <div class="theme-2">#FCB0B0</div>
              <div class="theme-3">#F57676</div>
              <div class="theme-4">#E94444</div>
              <div class="theme-5">#D81C1C</div>
              <div class="theme-6">#C20000</div>
              <div class="theme-7">#A90000</div>
              <div class="theme-8">#8D0000</div>
              <div class="theme-9">#710202</div>
              <div class="theme-10">#590404</div>
            </div>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="section-body">
          <div class="section-body-title">主题色</div>
          <div class="section-body-container">
            <div class="color-item-container">
              <div class="color-item" v-for="item in theme" :key="item.color">
                <div class="color-item-content" :style="{ background: item.color }"></div>
                <div class="color-item-footer">
                  <div>{{ item.desc }}</div>
                  <div>{{ item.color }}</div>
                  <div>{{ item.title }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section" style="margin-top: 11px;">
        <div class="section-body">
          <div class="section-body-title">文字色</div>
          <div class="section-body-container">
            <div class="color-item-container">
              <div class="color-item" v-for="item in fonts" :key="item.color">
                <div class="color-item-content" :style="{ background: item.color }"></div>
                <div class="color-item-footer">
                  <div>{{ item.desc }}</div>
                  <div>{{ item.color }}</div>
                  <div>{{ item.title }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section" style="margin-top: 11px;">
        <div class="section-body">
          <div class="section-body-title">图标色</div>
          <div class="section-body-container">
            <div class="color-item-container">
              <div class="color-item" v-for="item in icons" :key="item.color">
                <div class="color-item-content" :style="{ background: item.color }"></div>
                <div class="color-item-footer">
                  <div>{{ item.desc }}</div>
                  <div>{{ item.color }}</div>
                  <div>{{ item.title }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section" style="margin-top: 11px;">
        <div class="section-body">
          <div class="section-body-title">填充色</div>
          <div class="section-body-container">
            <div class="color-item-container">
              <div class="color-item" v-for="item in fill" :key="item.color">
                <div class="color-item-content" :style="{ background: item.color }"></div>
                <div class="color-item-footer">
                  <div>{{ item.desc }}</div>
                  <div>{{ item.color }}</div>
                  <div>{{ item.title }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section" style="margin-top: 11px;">
        <div class="section-body">
          <div class="section-body-title">线条色</div>
          <div class="section-body-container">
            <div class="color-item-container">
              <div class="color-item" v-for="item in line" :key="item.color">
                <div class="color-item-content" :style="{ background: item.color }"></div>
                <div class="color-item-footer">
                  <div>{{ item.desc }}</div>
                  <div>{{ item.color }}</div>
                  <div>{{ item.title }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section" style="margin-top: 11px;">
        <div class="section-body">
          <div class="section-body-title">语义色</div>
          <div class="section-body-container">
            <div class="color-item-container" v-for="(colors, index) in semantics" :key="index">
              <div class="color-item" v-for="item in colors" :key="item.color">
                <div class="color-item-content" :style="{ background: item.color }"></div>
                <div class="color-item-footer">
                  <div>{{ item.desc }}</div>
                  <div>{{ item.color }}</div>
                  <div>{{ item.title }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section" style="margin-top: 11px;">
        <div class="section-body">
          <div class="section-body-title">其他色</div>
          <div class="section-body-container">
            <div class="color-item-container">
              <div class="color-item" v-for="item in others" :key="item.color">
                <div class="color-item-content" :style="{ background: item.color }"></div>
                <div class="color-item-footer">
                  <div>{{ item.desc }}</div>
                  <div>{{ item.color }}</div>
                  <div>{{ item.title }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      theme: [
        {
          desc: 'MainColor 6',
          color: '#C20000',
          title: '常规',
        },
        {
          desc: 'MainColor 5',
          color: '#D81C1C',
          title: '悬停',
        },
        {
          desc: 'MainColor 1',
          color: '#FFF3F3',
          title: '白底选中',
        },
        {
          desc: 'MainColor 7',
          color: '#A90000',
          title: '点击',
        },
        {
          desc: 'MainColor 3',
          color: '#F57676',
          title: '一般禁用',
        },
        {
          desc: 'MainColor 2',
          color: '#FCB0B0',
          title: '文字禁用',
        },
        {
          desc: 'MainColor 4',
          color: '#E94444',
          title: '特殊场景',
        },
      ],
      fonts: [
        {
          desc: 'text 1',
          color: '#282828',
          title: '一级文字',
        },
        {
          desc: 'text 1',
          color: '#595959',
          title: '二级文字',
        },
        {
          desc: 'text 1',
          color: '#969696',
          title: '三级文字',
        },
      ],
      icons: [
        {
          desc: 'icon 1',
          color: '#595959',
          title: '一级图标',
        },
        {
          desc: 'icon 1',
          color: '#969696',
          title: '二级图标',
        },
      ],
      fill: [
        {
          desc: 'hover fill',
          color: '#F4F4F4',
          title: '悬停灰',
        },
        {
          desc: 'click fill',
          color: '#EAEAEA',
          title: '点击灰',
        },
        {
          desc: 'disable fill',
          color: '#F7F7F7',
          title: '不可用灰',
        },
        {
          desc: 'background',
          color: '#F3F3F3',
          title: '背景灰',
        },
        {
          desc: 'background',
          color: '#F9F9F9',
          title: '表头灰',
        },
      ],
      line: [
        {
          desc: 'line 1',
          color: '#CECECE',
          title: '描边',
        },
        {
          desc: 'line 2',
          color: '#E5E5E5',
          title: '分割线',
        },
      ],
      semantics: [
        [
          {
            desc: 'help 1',
            color: '#0060FF',
            title: '帮助 1',
          },
          {
            desc: 'help 2',
            color: '#7BADFF',
            title: '帮助 2',
          },
          {
            desc: 'help 3',
            color: '#EBF2FF',
            title: '帮助 3',
          }
        ],
        [
          {
            desc: 'success 1',
            color: '#00B42A',
            title: '成功 1',
          },
          {
            desc: 'success 2',
            color: '#3BDE61',
            title: '成功 2',
          },
          {
            desc: 'success 3',
            color: '#EAFEEE',
            title: '成功 3',
          },
        ],
        [
          {
            desc: 'warning 1',
            color: '#FF7D00',
            title: '警告 1',
          },
          {
            desc: 'warning 2',
            color: '#FFB56E',
            title: '警告 2',
          },
          {
            desc: 'warning 3',
            color: '#FFF3E7',
            title: '警告 3',
          },
        ],
        [
          {
            desc: 'error 6',
            color: '#F53F3F',
            title: '错误 6｜危险常规',
          },
          {
            desc: 'error 4',
            color: '#FF5656',
            title: '错误4｜危险悬停',
          },
          {
            desc: 'error 1',
            color: '#FFECEC',
            title: '错误 1',
          },
          {
            desc: 'error 7',
            color: '#CF2525',
            title: '错误7｜危险点击',
          },
          {
            desc: 'error 3',
            color: '#FF9595',
            title: '错误3｜一般禁用',
          },
          {
            desc: 'error 2',
            color: '#FFBFBF',
            title: '错误2｜文字禁用',
          },
        ]
      ],
      others: [
        {
          desc: 'Other color 1',
          color: '#326EFF',
          title: '操作｜超链接',
        },
        {
          desc: 'Other color 2',
          color: '#F6BD16',
          title: '黄色｜评分',
        },
      ]
    };
  }
}
</script>
<style lang="less" scoped>
.home {
  .section+.section {
    margin-top: 28px;
  }

  .section-title {
    font-weight: 500;
    line-height: 36px;
    color: #282828;
    margin-bottom: 28px;
    font-size: 28px;
  }

  .section-body {
    margin-top: 0px;
  }

  .section-body-title {
    font-size: 20px;
    line-height: 28px;
    font-weight: 500;
    color: #282828;
  }

  .section-body-desc {
    font-size: 14px;
    line-height: 22px;
    font-weight: 400;
    color: #595959;
    margin: 16px 0;
  }
}

.color-level {
  margin-top: 16px;
  display: flex;
  align-items: center;
}

.color-level div {
  width: 110px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}

@theme-color: #FFF3F3, #FCB0B0, #F57676, #E94444, #D81C1C, #C20000, #A90000, #8D0000, #710202, #590404;

each(@theme-color, {
  .color-level .theme-@{index} {
    background-color: @value;
    color: if((@index > 5), white, black);
  }
});

// 颜色
.color-item-container {
  margin-top: 16px;
  display: flex;
  align-items: center;
}

.color-item-container + .color-item-container {
  margin-top: 40px;
}

.color-item {
  &+& {
    margin-left: 50px;
  }

  &-content {
    width: 110px;
    height: 110px;
  }

  &-footer {
    padding-top: 14px;
    &-title {
      color: black;
    }
  }
}
</style>
