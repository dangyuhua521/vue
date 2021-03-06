// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import api from './server'
Vue.use(api)

import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.config.productionTip = false

//Vue插件编写 插件就是给库或者框架扩展功能
//扩展到原型上 Vue.prototype上
//写插件的格式
Vue.use({
  install(Vue){
    //在这里写插件
    Vue.prototype.miao=10;
  }
})

import './server'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router
})
