<template>
 <section class="todoapp">
  <todo-header @add-todo="addTodo"></todo-header>
  <todo-list 
    v-show="list.length" 
    :list="filterList"
    @change-all-checked="changeAllChecked"
    @removeApp="removeTodo"
    @editApp="editEdis"
    ></todo-list>
  <todo-footer :hash="hash" v-show="list.length"></todo-footer>
 </section>
</template>

<script>
import './assets/css/base.css'
import './assets/css/index.css'
import todoHeader from './components/todo-header'
import todoList from './components/todo-list'
import todoFooter from './components/todo-footer'
let list=[
  {
    id:123,
    title:'leo1',
    checked:true
  },
  {
    id:645,
    title:'leo2',
    checked:true
  }
]
export default {
  name: 'App',
  data(){
    return {
     list,
     hash:'all'

    }
  },
  watch:{
    list:{
      hashler(){
        localStorage.setItem()
      },
      deep:true
    }
  },
    components:{
      todoHeader,
      todoList,
      todoFooter
    },
    computed:{
      filterList(){
        if(this.hash==='all'){
          return this.list;
        }else if(this.hash==='active'){
          return this.list.filter(item=>!item.checked)
        }else if(this.hash==='completed'){
          return this.list.filter(item=>item.checked)
        }
      }
    },
    methods:{
      //全选单选
      changeAllChecked(bl){
        this.list.forEach(item=>item.checked=bl)
      },
      //添加
      addTodo(title){
        this.list.push({
          id:Date.now(),
          checked:false,
          title
        })
      },
      //删除
      removeTodo(todo){
        let index =this.list.findIndex(item=>item.id===todo)
        if(index!==-1){
          this.list.splice(index,1)
        }
      },
      //编辑
      editEdis(todo){
        this.list.id=todo;
        
        
      },
      getHash(){
        let hash=window.location.hash;
        let hashValue='all';
        if(hash){
          hashValue=hash.slice(2)
        }
        this.hash=hashValue;
      }
    },
    mounted(){
      this.getHash();
      window.addEventListener('hashchange',this.getHash)
    }
  }

</script>


