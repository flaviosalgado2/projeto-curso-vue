<template>
    <v-container fluid>
        <v-row justify="center">
            <v-col col="12" md="4" lg="3" class="text-center">
                <h6 class="display-1 text-uppercase">Login</h6>

                <v-text-field label="Token" v-model="token"></v-text-field>

                <v-btn depressed dark block color="green" class="mb-2" @click="login">Login</v-btn>

                <v-btn text @click="loginAsGuest">
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
                token: '',
            };
        },
        methods:{
            login(){
                if(this.token){
                    this.$store.commit('setAuthToken', this.token);
                    this.$router.push('/book');
                }else{
                    
                    this.$store.commit('showErrorMessage', 'Você deve informar um token');
                }
            },
            loginAsGuest(){
                this.$router.push('/book');
            },
        },
    };
</script>

<style scoped>

</style>