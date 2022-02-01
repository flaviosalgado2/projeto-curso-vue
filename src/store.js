import Vue from "vue";
import Vuex from "vuex";

//VUEX - é um gerenciador de estado de aplicação para VUE
//sistemas muito grandes ficam complicados gerenciar variaveis globais do app
//para isso o VUEX centraliza essas variaveis em uma STORE
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        authToken: '',
        logged: false,
        message: {
            text: '',
            type: '',
        }
    },
    mutations: {

        setAuthToken(state, payload) {
            state.authToken = payload;
        },
        setLogged(state, payload) {
            state.logged = payload;
        },
        showErrorMessage(state, payload) {
            state.message = {
                text: payload,
                type: 'ERROR',
            };

        },
        showSuccessMessage(state, payload) {
            state.message = {
                text: payload,
                type: 'SUCCESS',
            };
        }

    },
});