import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Home from '@/components/Home'
import About from '@/components/About'
import NotFound from '@/components/404'
import Message from '@/components/message'
import Singer from '@/components/singer'
import SingerInfo from '@/components/singer-views/info'
import MessageChid from '@/components/message-views/messageChild'
import User from '@/components/user'

let router =new VueRouter({
  mode:'history',
  //写在这里的属于是一级路径，匹配到组件会替换app.vue中的router-view
  
  routes:[
    {
      path:'/',
      name:'Home',
      component:Home

    },
    {
      path:'/about',
      name:'About',
      component:About
    },
    {
      path:'/message1234',
      name:'Message',
      component:Message,
      children:[
        {
          path:'message-child',
          component:MessageChid
        }
      ]
    },
    {
      path:'/singer',
      name:'Singer',
      component:Singer,
      children:[
        {
          path:'info',//singer/info
          name:'SingerInfo',
          component:SingerInfo
        }
      ]
    },
    {
      path:'/users/:abc?',
      name:'Users',
      component:User
    },
    {
      path:'/message/abc/fff/jjj',
      component:Message
    },
    {
      path:'*',
      redirect(to){
        if(to.path==='/miaov'){
          return {name:'Message'}
        }else if(to.path==='/ketang'){
          return {name:'About'}
        }
        return {path:'/'}
      }
    }
  ]
})
export default router