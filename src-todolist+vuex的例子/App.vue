<template>
  <section class="todoapp">
    <todo-header></todo-header>
    <todo-list></todo-list>
    <todo-footer></todo-footer>
  </section>
</template>

<script>
import todoHeader from './components/todo-header'
import todoList from './components/todo-list'
import todoFooter from './components/todo-footer'

export default {
  name: 'App',
  components: {todoHeader,todoList,todoFooter}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
