<template>
    <div id="primeiro">
        <p>Seja bem-vindo</p>
        <p>{{ nome }}</p>
    </div>
</template>

<script>
    export default{
        name: 'PrimeiroComponente',
        props: {
            nome:String
        }
    }
</script>

<style>
    #primeiro{
        background-color: #CCC;
        padding: 10px;
    }
</style>