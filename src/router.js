import Vue from "vue";
import Router from "vue-router";

import LoginPage from './components/login/LoginPage.vue';
import BookListPage from './components/book/BookListPage.vue';
import BookEntryPage from './components/book/BookEntryPage.vue';
import LibraryListPage from './components/library/LibraryListPage.vue';
import LibraryEntryPage from './components/library/LibraryEntryPage.vue';

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
    },
    {
        path: '/book/:id',
        name: 'bookEntry',
        component: BookEntryPage
    },
    {
        path: '/library',
        name: 'libraryList',
        component: LibraryListPage
    },
    {
        path: '/library/:id',
        name: 'LibraryEntryPage',
        component: LibraryEntryPage
    },
];

export default new Router({
    routes,
});