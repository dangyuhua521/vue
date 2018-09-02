import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

let list = [
  {
    id: 123,
    title: 'leo123',
    checked: true
  },
  {
    id: 456,
    title: '444444',
    checked: true
  }
]

// 改变list的数据都要走vuex，提交mutation
/* 
  为什么要把数据放在vuex？
    多个组件共享这些数据

*/
let store = new Vuex.Store({
  state: {
    list: list
  },
  // 类似是组件中计算属性
  getters:{
    isCheckedAll(state){
      return state.list.every(item => item.checked)
    }
  },
  mutations:{
    // 更新一条
    updateOneChcked(state,plaload){  // {id,checked}
      console.log(plaload.checked === false)
      //if (plaload.checked === false) return;
      let item = state.list.find(item => item.id === plaload.id);
      if(item){
        item.checked = plaload.checked;
      }
    },
    // toggle全选
    updateAllChecked(state,plaload){ // {checked}
      state.list.forEach(item => item.checked = plaload.checked)
    },
    updatedTitleById(state, plaload){ // {id,title}
      let item = state.list.find(item => item.id === plaload.id);
      if (item) {
        item.title = plaload.title;
      }
    }
  }
})

export default store;
