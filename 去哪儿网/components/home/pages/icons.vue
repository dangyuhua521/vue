<template>
    <div class="icons" id="a">
         <mt-swipe :auto="0" :show-indicators="false">
            <mt-swipe-item 
            v-for="(page,index) of pages"
            :key="index"
            >
        <div 
         class="icon"
         v-for="item of page"
         :key="item.id"
         >
            <div class="icon-img">
            <img class="icon-imgcontent" :src="item.imgUrl" alt="">
            </div>
            <p class="icon-desc">{{item.desc}}</p>
        </div>
        </mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<script>
export default {
   name:'HomeIcons',
   props:{
       list:Array
   },
   computed:{
       pages () {
          const pages =[] 
         this.list.forEach((item,index)=>{
             const page =Math.floor(index/8)
             if(!pages[page]){
                 pages[page]=[]
             }
             pages[page].push(item)
         })
         return pages

       }
   }
}
</script>
<style>
.icons{
    height: 3.8rem; 
}

.icon{
    position: relative;
    float: left;
    width: 25%;
    padding-bottom: 25%;
    height: 0;
}
.icon-img{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: .5rem;
    box-sizing: border-box;
    padding: .1rem;
    vertical-align: top;
    
}
.icon-imgcontent{
    height: 1rem;
    width: 1rem;
    display: block;
    margin: 0 auto;

}
.icon-desc{
    position: absolute;
    left: 0;
    right: 0;
    bottom: .3rem;
    height: .44rem;
    line-height: .44rem;
    color: #333;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
#a .mint-swipe{
  overflow: scroll;
}
#a .mint-swipe-items-wrap{
  overflow: scroll;
}

#a .mint-swipe-item{
    width:7.6rem;
}
</style>

