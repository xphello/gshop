<template>
    <ul class="footer_guide">
        <li :class="{active: '/msite' ===$route.path}" @click="goTo('/msite')">外卖</li>
        <li :class="{active: '/search' ===$route.path}" @click="goTo('/search')">搜索</li>
        <li :class="{active: '/order' ===$route.path}" @click="goTo('/order')">订单</li>
        <li :class="{active: '/profile' ===$route.path}" @click="goTo('/profile')">我的</li>
    </ul>
  </template>
  
  <script>
export default {
  data() {
    return {};
  },
  methods: {
    goTo(path) {
      this.$router.replace(path);
    }
  }
};
</script>
  
  <!-- <style lang="stylus" rel="stylesheet/stylus"> -->
  <style>
.footer_guide {
  height: 30px;
  line-height: 30px;
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  background: #eee;
}
.footer_guide li {
  flex: 1;
  text-align: center;
}
.active {
  color: #26a2ff;
  background: #ddd;
}
</style>
  