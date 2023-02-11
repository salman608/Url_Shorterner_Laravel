import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)


import Index from './pages/index';
import Login from "./pages/login";
import Register from "./pages/register";

const routes = [
    { path: '/', component: Index },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
];

const router = new VueRouter({
    routes,
    hashbang: false,
    mode: "history"
  })


  export default router;
