<template>
    <section class="search">
      <!-- <HeaderTop title="我的"></HeaderTop> -->
      <mt-header fixed  title="我的"></mt-header>
      <div class="profile_login">
        <router-link to="/login">
          <img class="profile_img" src="../../assets/profile.jpg" alt="">
          <span>登录/注册</span>
          <span style="float: right; padding-right: 10px;">&gt;</span>
        </router-link>
      </div>
      <div class="profile_info">
        <div class="profile_item">
          <span><span class="num">0.00</span>元</span>
          <span>我的余额</span>
        </div>
        <div class="profile_item">
          <span><span class="num">0</span>个</span>
          <span>我的优惠</span>
        </div>
        <div class="profile_item">
          <span><span class="num">0</span>分</span>
          <span>我的积分</span>
        </div>
      </div>
      <ul>
        <li class="profile_list">
          <span class="left">我的订单</span>
          <span class="right">&gt;</span>
        </li>
        <li class="profile_list">
          <span class="left">积分商城</span>
          <span class="right">&gt;</span>
        </li>
        <li class="profile_list">
          <span class="left">我的会员卡</span>
          <span class="right">&gt;</span>
        </li>
        <li class="profile_list">
          <span class="left">服务中心</span>
          <span class="right">&gt;</span>
        </li>
      </ul>
    </section>
  </template>
  
  <script>
  import HeaderTop from "../../components/HeaderTop/HeaderTop.vue";
  export default {
    components: {
      HeaderTop
    },
    data () {
      return {
       
      }
    }
  }
  </script>
  
  <style>
  .profile_login{
    margin-top: 40px;
    height: 60px;
    line-height: 60px;
    background: #26a2ff;
    border-top: 1px solid #fff;
    padding: 5px;
  }
  .profile_login a{
    display: inline-block;
    width: 100%;
    text-decoration: none;
  }
  .profile_login span{
    color: #fff;
    font-size: 16px;
    margin-left: 20px;
  }
  .profile_img{
    width: 60px;
    height: 60px;
    border-radius:50%;
    float: left;
  }
  .profile_info{
    display: flex;
    border-bottom: 1px solid #eee;
  }
  .profile_item{
    flex: 1;
    text-align: center;
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-right: 1px solid #eee;
  }
  .profile_item:last-child{
    border-right: none;
  }
  .num{
    font-size: 20px;
    color: orange;
  }
  .profile_list{
    padding: 10px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
  }
  .profile_list .right{
    color: #999;
    font-size: 14px;
  }
  </style>
  