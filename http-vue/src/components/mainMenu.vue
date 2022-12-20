<template>
    <nav class="menu">
    <router-link class="link" to="/">Usuários</router-link>
    <router-link class="link" to="/produto">Produtos</router-link>
    </nav>
</template>

<script>

</script>

<style>
  .menu{
    background-color: antiquewhite;
    height: 70px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 15px;
  } 
  
  .link{
    background-color: #CCC;
    padding: 5px;
    text-decoration: none;
    color: #333;
    font-weight: 900;
  }
</style>