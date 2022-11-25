InputTarefas.vue
<template>
    <div id="input">
        <input type="text" placeholder="Digite a tarefa"
            @keyup.enter="addTarefa">
    </div>
</template>

<script>
    import { Tarefa } from '../models/tarefa'
    let id=1;
    export default{
        name: 'InputTarefas',
        methods: {
            addTarefa($event){
                let value = $event.target.value;
                console.log(value);
                let tarefa = new Tarefa();
                tarefa.descricao = value;
                tarefa.concluido = false;
                tarefa.id=id;
                id++;
                this.$emit('novaTarefa', tarefa);
            }
        }
    }
</script>
    
<style>
    #input{
        padding: 15px;
        background-color: #AAA;
    }
</style>