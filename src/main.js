import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import vuetify from './plugins/vuetify';
import HelloWorld from './components/HelloWorld';
import Contato from './components/Contato';
import Sobre from './components/Sobre';
import Produtos from './components/Produtos';

Vue.use(VueRouter);
Vue.config.productionTip = false

const router = new VueRouter ({
  routes: [
    {
      path: '/',
      component: HelloWorld
    },
    {
      path: '/produtos',
      component: Produtos
    },
    {
      path: '/sobre',
      component: Sobre
    },
    {
      path: '/contato',
      component: Contato
    }
  ]
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
