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

    if(window.localStorage.authToken){
      this.$store.commit('setAuthtoken', window.localStorage.authToken);
    }else{
      this.$router.push('/');
    }
  },
};
</script>
