<template>
    <div>
        <input type="text" placeholder="Nome" 
         v-model="usuario.nome">
        <input type="email" placeholder="Email" 
         v-model="usuario.email">
        <button @click="salvar">Salvar</button>
        <button @click="carregar">
            Obter usuários
        </button>
        <hr>
        <div v-for="(item, id) in usuarios" :key="id"
        class="itens">
            <p><b>Nome: </b>{{ item.nome }}</p>
            <p><b>Email: </b>{{ item.email }}</p>
            <button @click="preencher(id)">Alterar</button>
            <button @click="excluir(id)">Excluir</button>
        </div>
    </div>
</template>
    
<script>
    export default{
        data(){
            return{
                usuarios:[],
                usuario:{
                    nome:'',
                    email:''
                },
                id:0
            }
        },
        methods:{
            limpar(){
                this.id = 0;
                this.usuario.nome = '';
                this.usuario.email = '';
            },
            salvar(){
                if(this.id==0){
                    this.$http.post('usuario.json', 
                        this.usuario).then(()=>{
                            alert('Usuário cadastrado');
                            this.limpar();
                        }).catch(() =>{
                            alert('Erro ao cadastrar');
                        });
                }else{
                    this.$http.patch(`/usuario/${this.id}.json`,
                    this.usuario).then(()=>{
                        this.carregar();
                        alert('Usuário alterado com sucesso');
                        this.limpar();
                    }).catch(()=>{
                        alert('Erro ao alterar o usuário');
                    });
                }
            },
            carregar(){
                this.$http.get('usuario.json').then(
                    res=>{
                        this.usuarios = res.data;
                    }
                )
            },
            excluir(id){
                this.$http.delete(`/usuario/${id}.json`).then(
                    ()=>{
                        alert('Usuário removido com sucesso');
                        this.carregar();
                    }).catch(()=>{
                        alert('Erro ao remover o usuario');
                    })
            },
            preencher(id){
                this.id = id;
                this.usuario = {...this.usuarios[id]};
            }
        },
        created(){
            this.carregar();
        }    
    }
</script>

<style>
    .itens{
        background-color: antiquewhite;
        margin: 10px;
        padding: 10px;
    }
</style>