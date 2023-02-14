import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)


import Index from './pages/index.vue';
import Login from "./pages/login.vue";
import Register from "./pages/register.vue";

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

router.beforeEach((to,from,next)=>{
    let middleware=to.matched[0].components.default.middleware;
    if(middleware=="guest"){
        if(window.loggedIn){
            next("/");

        }
        }
        if(middleware=="auth"){
            if(!window.loggedIn){
                next("/login");

            }
        }
         next();
})
  export default router;
