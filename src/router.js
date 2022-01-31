import Vue from "vue";
import Router from "vue-router";

import LoginPage from './components/login/LoginPage.vue';
import BookListPage from './components/book/BookListPage.vue';

//gerenciador de rotas do vue
Vue.use(Router);

//rotas
const routes = [{
        path: '/',
        name: 'login',
        component: LoginPage
    },
    {
        path: '/book',
        name: 'bookList',
        component: BookListPage
    }
];

export default new Router({
    routes,
});