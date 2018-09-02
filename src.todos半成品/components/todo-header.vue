<template>
    <header class="header" >
        <h1>todos</h1>
        <input 
        class="new-todo" 
        placeholder="请输入内容"
        v-model="value"
        @keydown.13="addTodo"
         />
    </header>
</template>
<script>
export default {
    data(){
        return {
            value:''
        }
    },
    methods:{
        addTodo(){
            this.$emit('add-todo',this.value)
            this.value='';
        }
    }

}
</script>




