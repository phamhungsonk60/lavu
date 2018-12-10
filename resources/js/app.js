

require('./bootstrap');

window.Vue = require('vue');

window.VueRouter = require('vue-router').default;

window.VueAxios = require('vue-axios').default;

window.Axios = require('axios').default;




let AppLayout = require('./components/App.vue');


const Listposts = Vue.component('Listposts', require('./components/Listposts.vue'));

const Viewpost = Vue.component('Viewpost', require('./components/Viewpost.vue'));

const Editpost = Vue.component('Editpost', require('./components/Editpost.vue'));

const Deletepost = Vue.component('Deletepost', require('./components/Deletepost.vue'));

const Addpost = Vue.component('Addpost', require('./components/Addpost.vue'));

//register modules

//import VueResource from 'vue-resource';



Vue.use(VueRouter, VueAxios, axios);


const routes = [
    {
        name: 'Listposts',
        path: '/',
        component: Listposts
    },
    {
        name: 'Addpost',
        path: '/add-post',
        component: Addpost
    },
    {
        name: 'Viewpost',
        path: '/view/:id',
        component: Viewpost
    },
    {
        name: 'Editpost',
        path: '/edit/:id',
        component: Editpost
    },
    {
        name: 'Deletepost',
        path: '/post-delete',
        component: Deletepost
    },

];

const router = new VueRouter({
    mode: 'history',
    //base: __dirname,
    routes: routes
});

new Vue(
    Vue.util.extend(
        { router },
        AppLayout
    )
).$mount('#app');
