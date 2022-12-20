<template>
  <div id="app">
    <mainMenu></mainMenu>
    <router-view></router-view>
  </div>
</template>

<script>
import mainMenu from './components/mainMenu.vue'

export default {
  name: 'App',
  components: {
    mainMenu
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
