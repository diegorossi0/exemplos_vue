<template>
    <div>
        <input type="text" placeholder="Descrição" 
         v-model="produto.descricao">
        <input type="text" placeholder="Preço" 
         v-model="produto.preco">
        <select v-model="produto.usuario">
            <option v-for="(item, id) in usuarios" :key="id" 
             :value="id">{{ item.nome }}</option>
        </select>
        <button @click="salvar">Salvar</button>
        <button @click="carregar">
            Obter produtos
        </button>
        <hr>
        <div v-for="(item, id) in produtos" :key="id"
        class="itens">
            <p><b>Descrição: </b>{{ item.descricao }}</p>
            <p><b>Preço: </b>{{ item.preco }}</p>
            <button @click="preencher(id)">Alterar</button>
            <button @click="excluir(id)">Excluir</button>
        </div>
    </div>
</template>
    
<script>
    export default{
        data(){
            return{
                produtos:[],
                usuarios:[],
                produto:{
                    descricao:'',
                    preco:'',
                    usuario:''
                },
                id:0
            }
        },
        methods:{
            limpar(){
                this.id = 0;
                this.produto.descricao = '';
                this.produto.preco = '';
            },
            salvar(){
                if(this.id==0){
                    this.$http.post('produto.json', 
                        this.produto).then(()=>{
                            alert('Usuário cadastrado');
                            this.limpar();
                        }).catch(() =>{
                            alert('Erro ao cadastrar');
                        });
                }else{
                    this.$http.patch(`/produto/${this.id}.json`,
                    this.produto).then(()=>{
                        this.carregar();
                        alert('Produto alterado com sucesso');
                        this.limpar();
                    }).catch(()=>{
                        alert('Erro ao alterar o produto');
                    });
                }
            },
            carregar(){
                this.$http.get('produto.json').then(
                    res=>{
                        this.produtos = res.data;
                    }
                )
            },
            excluir(id){
                this.$http.delete(`/produto/${id}.json`).then(
                    ()=>{
                        alert('Produto removido com sucesso');
                        this.carregar();
                    }).catch(()=>{
                        alert('Erro ao remover o produto');
                    })
            },
            preencher(id){
                this.id = id;
                this.produto = {...this.produtos[id]};
            },
            carregaUsuarios(){
                this.$http.get('usuario.json').then(res=>{
                    this.usuarios = res.data;
                })
            }
        },
        created(){
            this.carregar();
            this.carregaUsuarios();
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