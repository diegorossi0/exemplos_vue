//router.js
import Vue from 'vue'
import Router from 'vue-router'
import listaUsuario from './components/listaUsuario'
import listaProduto from './components/listaProduto'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        component: listaUsuario
    },{
        path: '/produto',
        component: listaProduto
    }]
})