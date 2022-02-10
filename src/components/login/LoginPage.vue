<template>
    <v-container fluid>
        <v-row justify="center">
            <v-col col="12" md="4" lg="3" class="text-center">
                <h6 class="display-1 text-uppercase">Login</h6>

                <v-text-field label="Token" v-model="token"></v-text-field>

                <v-btn depressed dark block color="primary" class="mb-2" @click="login">Login</v-btn>

                <v-btn text color="secundary" @click="loginAsGuest">
                    Entrar como visitante
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: 'LoginPage',
        data(){
            return{
                token: 'AIzaSyCirdQCiLhrvDhnf9WMbaMHFInaBJ7M73o',
            };
        },
        methods:{

            login(){
                //colocando no storage do navegador o token
                window.localStorage.authToken = this.token;
                if(this.token){

                    this.$store.commit('setAuthToken', this.token);
                    this.$router.push('/book');
                }else{
                    console.log("token nao existe");
                    this.$store.commit('showErrorMessage', 'Você deve informar um token');
                }
            },
            loginAsGuest(){
                this.$store.commit('setLogged', true);
                this.$router.push('/book');
            },
        },
    };
</script>

<style scoped>

</style>