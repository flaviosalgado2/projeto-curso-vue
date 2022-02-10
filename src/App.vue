<template>
  <v-app>
    <app-header />

    <v-content>
      <router-view />
    </v-content>

    <feedback />
  </v-app>
</template>

<script>

import AppHeader from './components/header/AppHeader.vue';
import Feedback from './components/feedback/Feedback.vue';

//AIzaSyC7Yhf2ECP70oE5wX0eZWee-5fNTay_oUg
export default {
  name: 'App',
  components: { Feedback, AppHeader },
  created(){

    console.log("valor store");
    console.log(this.$store.getters.perfil);

    if(window.localStorage.authToken){
      this.$store.commit('setAuthToken', window.localStorage.authToken);
      this.$store.commit('setLogged', Boolean(window.localStorage.authToken));
    }
    
    console.log("sera verdadeiro: ");
    console.log(this.$store.getters.perfil === 'visitante');

    // else if(this.$store.getters.perfil == 'visitante'){
    //   this.$store.commit('setLogged', true);
    // }
    // else{
    //   //expulsa
    //   this.$router.push('/');
    // }
  },
};
</script>
