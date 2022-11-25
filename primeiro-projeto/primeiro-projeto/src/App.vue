<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Bem-vindo!"/>
    <hr>
    <PrimeiroComponente v-bind:nome="nome"></PrimeiroComponente>
    <InputNome @editNome="addNome"></InputNome>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import PrimeiroComponente from './components/PrimeiroComponente.vue'
import InputNome from './components/InputNome.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    PrimeiroComponente,
    InputNome
  },
  data(){
    return {
      nome:''
    }
  },
  methods:{
    addNome(nome){
      this.nome=nome;
    }
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
