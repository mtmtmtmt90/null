import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/Main.vue'
import Information from '../components/Information.vue'
import VueRouter from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/information',
      name: 'Information',
      component: Information
    }
  ]
})
