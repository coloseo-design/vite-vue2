<template>
  <div class="startup">
        <div class="startup_head">
          <div class="startup_head_title">快速使用</div>
          <div class="startup_head_desc">vue pro 是对@uni/vue组件库 header, menu 或者 @uni-vue/header, @uni-vue/menu 展示以及如何使用</div>
        </div>
        <div class="startup_body">
          <div class="section">
            <div class="section-title">设置代理</div>
            <div class="section-body">
              <div class="section-body-title">在项目里的.npmrc中设置</div>
              <div class="section-body-desc">适合于使用npm来进行包管理的项目</div>
              <pre>
                <code>registry=http://ccp.tianti.tg.unicom.local/artifactory/api/npm/sjxt-npm-virtual/</code>
              </pre>
            </div>
            <div class="section-body">
              <div class="section-body-title">在项目里的.yarnrc中设置</div>
              <div class="section-body-desc">适合于使用yarn来进行包管理的项目</div>
              <pre><code>registry "http://ccp.tianti.tg.unicom.local/artifactory/api/npm/sjxt-npm-virtual/"</code></pre>
            </div>
          </div>
          <div class="section">
            <div class="section-title">安装</div>
            <div class="section-body">
              <div class="section-body-desc">使用npm安装</div>
              <pre>
                <code>npm install @uni/vue</code>
              </pre>
              <div class="section-body-desc">使用yarn安装</div>
              <pre>
                <code>yarn add @uni/vue</code>
              </pre>
            </div>
            <div class="section-body">
              <div class="section-body-title">浏览器支持</div>
              <pre class="section-body-image">
                <div class="section-body-image-inner">
                  <img src="./images/browser.cap.png" />
                </div>
              </pre>
            </div>
          </div>
        </div>
      </div>
</template>

<style>
/* startup page */
.startup_head {
  border-bottom: 1px solid #e5e5e5;
  margin-bottom: 40px;
}
.startup_head_title {
  color: #282828;
  font-size: 36px;
  line-height: 45px;
  font-weight: 500;
  position: relative;
  display: initial;
}

.startup_head_title::after{
  position: absolute;
  height: 4px;
  background-color: #c20000;
  content: "";
  top: 57px;
  left: 0;
  width: 48px;
}
.startup_head_desc {
  margin-top: 36px;
  font-size: 14px;
  line-height: 22px;
  font-weight: 400;
  color: #595959;
  margin: 36px 0 16px 0;
}

.startup_hr {
  height: 0;
  width: 100%;
  border: none;
  border-top: 1px solid #e5e5e5;
  margin: 40px 0;
}

.section + .section {
  margin-top: 40px;
}

.section-title {
  font-size: 24px;
  line-height: 28px;
  font-weight: 500;
  color: #282828;
}
.section-body {
  margin-top: 28px;
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

.section-body-desc a {
  color: #326EFF;
}

.section-body-desc a:hover {
  text-decoration: underline;
}


.section-body-extra {
  font-size: 14px;
  line-height: 22px;
  font-weight: 400;
  color: #595959;
  margin: 16px 0px;
}

.section-body pre {
  background-color: #f2f3f7;
  padding: 20px;
  border-radius: 4px;
  border: 1px solid #e5e5e5;
  margin: 0;
  line-height: 0;
}

.section-body pre code {
  background-color: #fff;
  padding: 16px 24px !important;
  width: 100%;
  display: block;
  color: #50a14f;
}

.section-body .section-body-image {
  margin-top: 16px;
}
.section-body-image-inner {
  background-color: #fff;
  padding: 16px 24px;
  width: 100%;
  display: block;
}
.section-body-image-inner img {
  display: block;
  width: 100%;
}
</style>
