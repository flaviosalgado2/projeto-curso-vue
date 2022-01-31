<template>
  <v-app>
    <router-view />

    <Feedback />
  </v-app>
</template>

<script>

import Feedback from './components/feedback/Feedback.vue';

//AIzaSyC7Yhf2ECP70oE5wX0eZWee-5fNTay_oUg
export default {
  name: 'App',
  components: { Feedback }
};
</script>
