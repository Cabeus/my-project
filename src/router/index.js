import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import abcd from '@/components/abcd'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/abcd',
      name: 'abcd',
      component: abcd
    }
  ]
})
