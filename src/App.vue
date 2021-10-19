<template>
  <div id="app">
    <sph></sph>
  </div>
</template>

<script>
import sph from './components/header.vue'
export default {
  name: 'App',
  components:{
    sph
  }
}
</script>

<style>
*{
  margin:0;
  padding:0;
  user-select: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  
}
</style>
