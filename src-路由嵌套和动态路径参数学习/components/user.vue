<template>
    <div>
       <h3>我是user页面</h3>

    </div>
</template>
<script>
    let userInfo =[
        {
            name:'leo',
            sex:'男',
            id:1
        },
        {
            name:'momo',
            sex:'女',
            id:2
        }
    ]
export default {
    data(){
        return {
            info:{
                name:'XXXX',
                sex:'XXXX'
            }
        }
    },
    watch:{
        $route:{
           handler(){
               console.log('路由信息变了',this.$route)
               let id =this.$route.params.abc;
               if(id){
                  let item = userInfo.find(item=>item.id==id)
                  console.log(item)
                  this.info=item;
               }
           },
           immediate:true
        }
    }
}
</script>
