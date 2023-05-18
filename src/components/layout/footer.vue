<template>
  <footer :style="{ 'margin-left': $store.state.collapsed ? '0' : '16px' }">
    <div class="contact">
      <img src="../../assets/footer-email.png" width="16" />联系我们：hqs-UniDesign@chinaunicom.cn
    </div>
    <div class="copyright">- Made with ❤️ 中国联合网络通信集团有限公司 -</div>
  </footer>
</template>
<style lang="less">
footer {
  text-align: center;
  font-size: 16px;
  padding: 38px 0 32px;
  height: 132px;
  img {
    margin-right: 5px;
    vertical-align: baseline;
  }
  .contact {
    color: #2f2f2f;
  }
  .copyright {
    color: #999;
    margin-top: 18px;
  }
}
</style>
