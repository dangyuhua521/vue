<template>
  <div class="item">
    <h3 :title="tab" :class="{top: option.top}">
      <router-link :to="{name:'Detail',params:{id:option.id}}">
        {{option.title}}
      </router-link>
    </h3>
    <div class="content">
        <div class="avatar">
          <img :src="ico" alt="">
        </div>
      <div class="info">
        <p>
          <span class="name">{{name}}</span>
          <span class="status"><b>{{rel}}</b>/{{total}}</span>
        </p>
        <p class="time">
          <span>{{n}}</span>
          <span>
            <img class="user_small_avatar" src="https://avatars2.githubusercontent.com/u/13598515?v=4&amp;s=120">
            {{lasttime}}
          </span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import navConfig from '@/router/navConfig'
export default {
  props:{
      n:String,
      rel:Number,
      total:Number,
      last:String,
      ico:String,
      name:String,
    option:{
      type: Object,
      default(){return {}}
    }
  },
  computed:{
    tab(){
      if(this.option.top){
        return '置顶'
      }
      // 从配置中找title
      let item = navConfig.find(item => item.params.tab === this.option.tab)
      if(item) {
        return item.title;
      }
    },
    lasttime(){
        let o = new Date(this.last)
        let f = new Date()
        let t = Math.floor(f - o) / 1000;
        let id = Math.floor(t/86400);
        t%=86400;
        let iH = Math.floor(t/3600);
        t%=3600;
        let iM = Math.floor(t/60);
        t%=60;
        if(Number.parseInt(id/365)>0){
            return Number.parseInt(id/365)+"年前"
        }else if(Number.parseInt(id/30)>0){
            return Number.parseInt(id/30)+"月前"
        }else if(id>0){
            return id+"天前"
        }else if(iH>0){
            return iH+"小时前"
        }else if(iM>0){
            return iM+"分钟前"
        }else{
            return t+"秒前"
        }
    }
  },
  
  mounted () {
    
  }

}
</script>
<style>

.item {
  width: 100%;
  display: flex;
  flex-direction:column;
  box-sizing: border-box;
  border-bottom: 1px solid #d5dbdb;
  padding: 5px;
}
.item .avatar {
  width: 40px;
  display: flex;
  align-items: center;
  justify-content:center;
  padding-right: 5px;
}

.item .avatar img {
  width: 100%;
  border-radius: 50%;
  border: 1px solid #f3f3f3;
}

.item h3 {
  color: #2c3e50;
  font-size: 14px;
  line-height: 1.5;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.item h3.top:before {
    background: #e74c3c;
}
.item h3.ask:before {
    background: #3498db;
}
.item h3.share:before {
    background: #1abc9c;
}
.item h3.good:before {
    background: #e67e22;
}
.item h3:before {
    content: attr(title);
    margin-right: 10px;
    margin-top: -3px;
    color: #fff;
}
.item h3:before {
    padding: 2px 3px;
    font-size: 10px;
    font-weight: 400;
    border-radius: 4px;
    background-color: #e7e7e7;
    text-align: center;
    vertical-align: middle;
}

.content {
  display: flex;
  padding-top: 10px;
}
.content .info {
  width: 100%;
  flex: 1;
}

.content .info p {
  width: 100%;
  display: flex;
  color: #34495e;
  vertical-align: baseline;
  font-size: 12px;
}

.content .info p .name {
  width: 100%;
  flex:1;
  font-weight: bold;
}

.content .info p  .status b {
  color: #42b983;
}

.content .info p.time span:first-child {
  width: 100%;
  flex:1;
}

.content .info p.time .user_small_avatar {
  width: 18px;
  height: 18px;
  vertical-align: middle;
  margin-right: .5em;
  border-radius: 3px;
}
</style>