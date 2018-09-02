<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont back-icon">&#xe624;</div>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe632;</span>
        景点详情
        </div>
         <div class="header-right">
            {{this.city}}
            <span class="iconfont arrow-icon" >&#xe6aa;</span>
         </div>
        
    </div>
    
</template>
<script>
export default {
    name:'HomeHeader',
    props:{
        city:String
    }
}
</script>
<style scoped>
.header{
    display: flex;
    height:.86rem;
    background: #00bcd4;
    color: #fff;
    line-height: .86rem;
} 
.header-left{
    width: .64rem;
    float: right;
}
.back-icon{
    text-align: center;
    font-size: .4rem;
}
.header-input{
    flex:1;
    height: .64rem;
    background: #fff;
    border-radius: .1rem;
    margin-top: .12rem;
    line-height: .64rem;
    margin-left: .2rem;
    color: #ccc;
    padding-left:.2rem; 

}
.header-right{
    width: 1.24rem;
    float: right;
    text-align: center;
}
.arrow-icon{
    font-size: .2rem;
    margin-left: -.04rem;
}
</style>
