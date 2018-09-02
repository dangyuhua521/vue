<template>
     <li :class="{completed: option.checked}">
        <div class="view">
            <input
            v-model="option.checked" 
            class="toggle"
            type="checkbox" />
            <label @dblclick="editTodo">{{option.title}}</label>
            <button class="destroy" @click="remove"></button>
        </div>
        <input class="edit"  ref="editInput" />
    </li>
</template>

<script>

export default {
    data(){
        return {
            beforeTitel:''
        }
    },
     props:{
         option:{
             type:Object,
             default:()=>({})
         }
     },
     methods:{
         remove(){
            this.$emit('remove-item',this.option.id)
         },
         editTodo(){
            this.$emit('editItem',this.option.id)  
            // this.beforeTitel=todo.title;
            // this.$nextTick(()=>{
            //     this.$refs.editInput.focus()
            // })
            // console.log(this.$refs.editInput);
         }
     }
}
</script>
