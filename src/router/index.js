import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import MSite from '../pages/MSite/MSite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from "../pages/Profile/Profile.vue";
import Login from "../pages/Login/Login.vue";

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
    {
      path: "/",
      redirect: "/msite"
    },
    {
      path: "/msite",
      component: MSite,
      meta: {
        showFooter: true
      }
    },
    {
      path: "/search",
      component: Search,
      meta: {
        showFooter: true
      }
    },
    {
      path: "/order",
      component: Order,
      meta: {
        showFooter: true
      }
    },
    {
      path: "/profile",
      component: Profile,
      meta: {
        showFooter: true
      }
    },
    {
      path: "/login",
      component: Login
    }
  ]
});
