import Vue from "vue";
import Vuex from "vuex";

//VUEX - é um gerenciador de estado de aplicação para VUE
//sistemas muito grandes ficam complicados gerenciar variaveis globais do app
//para isso o VUEX centraliza essas variaveis em uma STORE
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        authToken: undefined,
        userId: '',
        logged: false,
        message: {
            text: '',
            type: '',
        },
        chaveToken: undefined,
        perfil: undefined
    },
    mutations: {

        setLogged(state, payload) {
            state.logged = payload;
        },
        setUserId(state, payload) {
            state.userId = payload;
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
        },
        setAuthToken(state, payload) {
            state.authToken = payload;
        },
        setChaveToken(state, payload) {
            state.chaveToken = payload;
        },
        setPerfil(state, payload) {
            state.perfil = payload;
        }
    },
    getters: {
        perfil: state => state.perfil,

    }
});