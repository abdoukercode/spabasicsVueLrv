import vueRouter from "vue-router";
import Vue from 'vue';
import example from './components/Example.vue';
import about from './components/About.vue';
import vision from './components/Vision.vue';
import form from './components/Form.vue';
import login from './components/Login.vue';
import register from './components/Register.vue';

Vue.use(vueRouter);


const routes = [
    { path: '/', component: example, name:'Home' },
    { path: '/about', component: about, name:'about' },
    { path: '/vision', component: vision, name:'vision' },
    { path: '/create', component: form, name:'form' },
    { path: '/login', component: login, name:'login' },
    { path: '/register', component: register, name:'register' },

  ];

  export default new vueRouter({
    routes
  });
