<template>
    <v-app-bar app dark color="secondary">
        <v-toolbar-title>Projeto - Curso Vue</v-toolbar-title>

        <v-spacer />

        <v-toolbar-itens v-if="$store.state.logged">
            <v-btn text @click="goToBookList">Livros</v-btn>
            <v-btn text @click="goToBookColletion">Minha Coleção</v-btn>
            <v-btn text @click="logout">Sair</v-btn>
        </v-toolbar-itens>
    </v-app-bar>
</template>


<script>
export default {
    name: 'AppHeader',
    methods:{
        goToBookList(){
            this.$router.push('/book');
        },
        goToBookColletion(){
            this.$router.push('/colletion');
        },
        logout(){
            this.$store.commit('setAuthToken', '');
            this.$store.commit('setLogged', false);
            this.$router.push('/');
        }
    }
}
</script>

<style scoped>
    
</style>