(function(){"use strict";var t={5751:function(t,a,r){var e=r(9242),n=r(3396);function o(t,a,r,e,o,i){const u=(0,n.up)("formLista"),f=(0,n.up)("exibeLista");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(u,{onAtualizaVetor:i.novoVetor},null,8,["onAtualizaVetor"]),(0,n.Wm)(f,{tarefas:o.tarefas,onRemover:i.apagaTarefa},null,8,["tarefas","onRemover"])],64)}const i=(0,n._)("h1",null,"Lista",-1),u=(0,n._)("label",null,"Tarefa:",-1);function f(t,a,r,o,f,s){return(0,n.wg)(),(0,n.iD)(n.HY,null,[i,u,(0,n.wy)((0,n._)("input",{type:"text","onUpdate:modelValue":a[0]||(a[0]=t=>f.tarefa=t),placeholder:"Digite a sua tarefa"},null,512),[[e.nr,f.tarefa]]),(0,n._)("button",{onClick:a[1]||(a[1]=t=>s.salvaTarefa())},"Salvar")],64)}r(7658);var s={name:"formLista",data(){return{tarefa:"",tarefas:[]}},methods:{salvaTarefa(){""!=this.tarefa?(this.tarefas.push(this.tarefa),console.log(this.tarefas),this.tarefa="",this.$emit("atualizaVetor",this.tarefas)):alert("Favor preencher o campo tarefa")}}},l=r(89);const c=(0,l.Z)(s,[["render",f]]);var p=c,v=r(7139);const h=(0,n._)("tr",null,[(0,n._)("td",null,"Tarefa"),(0,n._)("td")],-1),d=["onClick"];function m(t,a,r,e,o,i){return(0,n.wg)(),(0,n.iD)("table",null,[h,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(r.tarefas,((t,a)=>((0,n.wg)(),(0,n.iD)("tr",{key:a},[(0,n._)("td",null,(0,v.zw)(t),1),(0,n._)("td",null,[(0,n._)("button",{onClick:t=>i.apagaItem(a)},"Apagar",8,d)])])))),128))])}var b={name:"exibeLista",data(){return{}},props:["tarefas"],methods:{apagaItem(t){this.$emit("remover",t)}}};const g=(0,l.Z)(b,[["render",m]]);var w=g,_={name:"App",components:{formLista:p,exibeLista:w},data(){return{tarefas:[]}},methods:{novoVetor(t){this.tarefas=t},apagaTarefa(t){this.tarefas.shift(t)}}};const y=(0,l.Z)(_,[["render",o]]);var O=y;(0,e.ri)(O).mount("#app")}},a={};function r(e){var n=a[e];if(void 0!==n)return n.exports;var o=a[e]={exports:{}};return t[e].call(o.exports,o,o.exports,r),o.exports}r.m=t,function(){var t=[];r.O=function(a,e,n,o){if(!e){var i=1/0;for(l=0;l<t.length;l++){e=t[l][0],n=t[l][1],o=t[l][2];for(var u=!0,f=0;f<e.length;f++)(!1&o||i>=o)&&Object.keys(r.O).every((function(t){return r.O[t](e[f])}))?e.splice(f--,1):(u=!1,o<i&&(i=o));if(u){t.splice(l--,1);var s=n();void 0!==s&&(a=s)}}return a}o=o||0;for(var l=t.length;l>0&&t[l-1][2]>o;l--)t[l]=t[l-1];t[l]=[e,n,o]}}(),function(){r.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(a,{a:a}),a}}(),function(){r.d=function(t,a){for(var e in a)r.o(a,e)&&!r.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:a[e]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)}}(),function(){var t={143:0};r.O.j=function(a){return 0===t[a]};var a=function(a,e){var n,o,i=e[0],u=e[1],f=e[2],s=0;if(i.some((function(a){return 0!==t[a]}))){for(n in u)r.o(u,n)&&(r.m[n]=u[n]);if(f)var l=f(r)}for(a&&a(e);s<i.length;s++)o=i[s],r.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return r.O(l)},e=self["webpackChunklistatarefas"]=self["webpackChunklistatarefas"]||[];e.forEach(a.bind(null,0)),e.push=a.bind(null,e.push.bind(e))}();var e=r.O(void 0,[998],(function(){return r(5751)}));e=r.O(e)})();
//# sourceMappingURL=app.9808f64e.js.map