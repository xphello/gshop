<template>
    <section class="msite">
      <!-- 首页头部 -->
      <!-- <span class="header_search" slot="left">
        <i class="iconfont icon-sousuo"></i>
      </span>
      <HeaderTop title="昌平区北七家宏福科技园(337省道北)"></HeaderTop>
      <span class="header_login" slot="right">
        <span class="header_login_text">登录|注册</span>
      </span> -->
      <mt-header fixed  title="昌平区北七家宏福科技园(337省道北)">
        <router-link to="/" slot="left">
          <mt-button icon="search"></mt-button>
        </router-link>
        <span slot="right">登录|注册</span>
      </mt-header>
      <!-- 首页导航 -->
      <nav class="msite_nav">
        <mt-swipe>
          <mt-swipe-item>
            <img width="100%" height="100%" src="http://p0.meituan.net/deal/f7429f85edf239134b3e31b2143ccc0340052.jpg" alt="">
          </mt-swipe-item>
          <mt-swipe-item>
            <img width="100%" height="100%" src="http://p0.meituan.net/deal/d78de9f0808aca3d4e2c7bd9f91392ec278510.jpg" alt="">
          </mt-swipe-item>
        </mt-swipe>
      </nav>

      <!-- 首页附近商家 -->
      <div class="msite_shop_list">
        <div class="shop_header">
          <div>
            <span class="i-con"></span>
						<span class="i-con"></span>
						<span class="i-con"></span>
          </div>
          <span>附近商家</span>
        </div>
        <ShopList></ShopList>
      </div>
    </section>
  </template>
  
  <script>
import HeaderTop from "../../components/HeaderTop/HeaderTop.vue";
import ShopList from "../../components/ShopList/ShopList.vue";
export default {
  components: {
    HeaderTop,
    ShopList
  },
  data() {
    return {
      title: ""
    };
  }
};
</script>
  
  <!-- <style lang="stylus" rel="stylesheet/stylus">
    @import "../../assets/stylus/mixins.styl" -->
<style>
.msite_nav {
  height: 180px;
  background: #ccc;
  margin-top: 40px;
}
.shop_header{
  color: #999;
  margin-top: 10px;
  display: flex;
  padding-bottom: 2px;
  border-bottom: 1px solid #ddd;
}
.i-con {
    display: block;
    width: 20px;
    height: 2px;
    background: #999;
    margin: 3px;
}
</style>
  