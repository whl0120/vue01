import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Preprocessing from '@/views/Preprocessing'
import mainPage from "../views/mainPage";
import charReg from "../views/charReg";
import Home from "../views/Home"
import Show from "../views/Show"

Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/',
      name: 'mainPage',
      component: mainPage
    }

  ]
})
