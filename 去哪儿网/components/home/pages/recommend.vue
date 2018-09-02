<template>
    <div>
        <div class="title">热销推荐</div>
        <ul>
            <li 
            class="item border-bottom" 
            v-for="item of list"
            :key="item.id"
            >
                    <img :src="item.imgUrl"
                     class="item-img">
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-botton">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'HomeRecommend',
    props:{
        list:Array
    }   
}
</script>
<style scoped>
.title{
    margin-top: .2rem;
    line-height: .6rem;
    background: #eee;
    text-indent: .2rem;
}
.item{
    display: flex;
    height:1.9rem;
    overflow: hidden;
    margin-top: .1rem;
}
.item-img{
    width: 1.7rem;
    height: 1.7rem;
    padding: .1rem;
}
.item-info{
    flex: 1;
    padding: .1rem;
    min-width: 0;
}
.item-title{
    line-height: .54rem;
    font-size: .32rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.item-desc{
    line-height: .4rem;
    color: #ccc;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.item-botton{
    background: #ff9300;
    padding: 0 .16rem;
    border-radius: .06rem;
    margin-top: .16rem;
    color: #fff;
    line-height: .44rem;
}
</style>
