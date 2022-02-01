<template>
  <v-app>
    <app-header />

    <v-content>
      <router-view />
    </v-content>

    <Feedback />
  </v-app>
</template>

<script>

import AppHeader from './components/header/AppHeader.vue';
import Feedback from './components/feedback/Feedback.vue';

//AIzaSyC7Yhf2ECP70oE5wX0eZWee-5fNTay_oUg
export default {
  name: 'App',
  components: { Feedback, AppHeader }
};
</script>
