<template>
 <section class="todoapp">
  <p>$store.state.a:---{{$store.state.a}}</p>
  <p>data---{{num}}</p>
  <p>computed---{{mm}}</p>
 </section>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      num:this.$store.state.a
    }
  },
  computed: {
    mm(){
      return this.$store.state.a
    }
  }
}
</script>



