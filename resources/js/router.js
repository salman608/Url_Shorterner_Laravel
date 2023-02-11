import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

import Index from './pages/index';

const routes = [
    { path: '/', component: Index },
    { path: '/bar', component: Bar },
    { path: '/foo', component: Foo }
  ]

const router = new VueRouter({
    routes // short for `routes: routes`
  })


  export default router;
