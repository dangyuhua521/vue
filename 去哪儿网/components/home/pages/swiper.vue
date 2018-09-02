<template>
   <div class="mt-swipe">
        <mt-swipe :auto="3000" v-if="showSwiper" >
        <mt-swipe-item 
            v-for="item of list"
            :key="item.id"
         >
            <img :src="item.imgUrl" width="375" alt="">
        </mt-swipe-item>
        <div class="swiper-pagetion"></div>
        </mt-swipe>       
    </div>  
</template>
<script>
export default {
    name:'HomeSwiper',
    props:{
        list:Array
    },
    computed:{
        showSwiper(){
            return this.list.length
        }
    }
}
</script>
<style  scoped>
.mt-swipe{
    overflow: hidden;
    height:31.25vw;
    background: #eee;
}
.mt-swipe img{
    height: 100%;
}
</style>
