<template>
<div>
  <h2>关注页面</h2>
  <div class="content">
    <div class="left-slider">
      <img v-show="!list.length" width="150" src="@/assets/loading.gif" alt="">
      <ul class="watch-list" v-show="list.length">
         <!-- <li class="active" 
          v-for="item in list" 
          :key="item.id"
        >
          <img :src="item.imgUrl"/>
          <span>{{item.title}}</span>
        </li> -->
        <!-- :to="{name:'Look',params: {id: item.id}}" -->
        <router-link 
          v-for="item in list" 
          :key="item.id"
          :to="{path:`/look/${item.id}`,}"
          tag="li"
          exact-active-class="look-jingque-jihuo"
          active-class="look-jihuo"
        >
          <img :src="item.imgUrl"/>
          <span>{{item.title}}</span>
        </router-link>
      </ul>
    </div>
    <div class="right-slider">
      <h3>展示页</h3>

      <div>
        <p>姓名：{{info.name}}</p>
        <p>年龄：{{info.age}}</p>
      </div>

    </div>
  </div>
</div>
</template>
<script>
import axios from 'axios'
let url=`https://www.easy-mock.com/mock/5b4026faf38b6529a0d572a3/jianshu/look`
export default {
    data(){
        return {
            list:[],
            info:{
                name:'XXXX',
                age:'XXXX'
            }
        }
    },
    async beforeRouteEnter(to,from,next){
      //this=>不指向组件的实例，因为执行这个钩子的时候组件还没有被创建
      console.log('look---beforeRouteEnter',this)
      let {data}=await axios.get(url);
      next((vm)=>{
        //vm就是当前组件的实例
        console.log(vm)
        vm.list=data.data.list;
        let id=vm.$route.params.id;
        if(id){
          vm.info=vm.list.find(item=>item.id==id).info
        }
      })
    },
    //路由的钩子在生命周期钩子函数之前
    beforeCreate(){
      console.log('beforeCreate')
    },
    beforeRouteLeave(to,from,next){
      console.log('离开了')
      next();
    },
    beforeRouteUpdate(to,from,next){
      console.log('更新了')
      console.log(to,from)
      console.log('this.$route',this.$route)
      let id =to.params.id;
      if(id){
        this.info=this.list.find(item=>item.id==id).info
      }
      next()
    },
    watch:{
        // $route(){
        //     let id =this.$route.params.id;
        //     if(id){
        //         this.info=this.list.find(item=>item.id==id).info;
        //     }
        // }
    },
    async mounted(){
        // let {data} = await axios.get(url);
        // this.list= data.data.list;
        // let id = this.$route.params.id;
        // if(id){
        //     this.info= this.list.find(item=>item.id==id).info;
        // }
    },
    methods:{
        getoLook(item){
            this.$router.push({
                name:'Look',
                params:{id:item.id}
            })
        }
    }
}
</script>
<style>
.watch-list .look-jingque-jihuo  {
  background: green;
}
</style>

