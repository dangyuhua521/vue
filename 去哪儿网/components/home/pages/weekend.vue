<template>
    <div>
        <div class="title">周末去哪儿</div>
        <ul>
            <li 
            class="item border-bottom" 
            v-for="item of list"
            :key="item.id"
            >
                <div class="item-img-warp">
                    <img :src="item.imgUrl"
                     class="item-img">
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'HomeWeekend',
    props:{
        list:Array
    }
}
</script>
<style scoped>
.title{
    line-height: .6rem;
    background: #eee;
    text-indent: .2rem;
}
.item-img-warp{
    overflow: hidden;
    height: 0;
    padding-bottom: 37.09%;
}
.item-img{
   width: 100%;
}
.item-info{
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
</style>


