ListaTarefas.vue
<template>
    <div id="listagem">
        <div v-if="listaItem.length == 0">
            <p>Não existe tarefa</p>
        </div>
        <ul v-else class="lista">
            <li v-for="item in listaItem" :key="item.id">
                {{ item.descricao }}
            </li>
        </ul>
    </div>
</template>

<script>
export default{
    name: 'ListaTarefas',
    props: ['listaItem']
}
</script>

<style>
    .lista{
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column-reverse;
        list-style: none;
    }

    .lista li{
        background-color: #AAA;
        margin: 2px;
    }
</style>