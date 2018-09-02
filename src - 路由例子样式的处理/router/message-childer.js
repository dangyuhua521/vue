//配置二级，给路由使用和导航使用
import Pinglun from '@/components/message-Child/pinglun'
import Jianxin from '@/components/message-Child/jianxin'
import Guanzhu from '../components/message-Child/guanzhu'

let messageChildren=[
    {
      path:'',
      title:'评论',
      name:'Pinglun',
      component:Pinglun  
    },
    {
        path:'jianxin',
        title:'简信',
        name:'Jianxin',
        component:Jianxin
    },
    {
        path:'guanzhu',
        title:'关注',
        name:'Guanzhu',
        component:Guanzhu
    }
]
export default messageChildren;