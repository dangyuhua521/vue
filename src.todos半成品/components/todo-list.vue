<template>
   <section class="main">
        <input class="toggle-all" type="checkbox" v-model="isCheckedAll" />
        <ul class="todo-list">
            <todo-item
                :key="item.id"
                v-for="item in list"
                :option="item"
                @remove-item="removeList"
                @editItem='editList'
            ></todo-item>
        </ul>
    </section>
</template>
<script>
import todoItem from './todo-item'
export default {
     props:{
          list:{
              type: Array,
              default(){
                  return []
              }
          }
     },
    components:{todoItem},
    computed:{
        isCheckedAll:{
            get(){
                return this.list.every(item=>item.checked)
            },
            set(newValue){
                this.$emit('change-all-checked',newValue)
            }
        }
    },
    methods:{
        removeList(id){
           this.$emit('removeApp',id)
        },
        editList(item){
            this.$emit('editApp',item)
        }
    }
}
</script>
