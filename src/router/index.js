import Vue from 'vue'
import Router from 'vue-router'
import Board from '@/components/Board'
import NewTask from '@/components/NewTask'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Default'
    },
    {
      path: '/board',
      name: 'Board',
      component: Board
    },
    {
      path: '/new',
      component: NewTask
    }
  ]
})
