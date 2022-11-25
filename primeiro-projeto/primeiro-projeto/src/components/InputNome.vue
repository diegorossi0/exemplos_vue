<template>
    <div id="input">
        <input type="text" placeholder="Digite o seu nome"
            @keyup.enter="addNome">
    </div>
</template>

<script>
export default{
    name: 'InputNome',
    methods:{
        addNome($event){
            let nome = $event.target.value;
            console.log(nome);
            this.$emit('editNome', nome);
        }
    }
}
</script>

<style>

</style>