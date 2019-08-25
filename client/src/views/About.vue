<template>
  <v-layout wrap class="text-center" align-center justify-space-between>
    <v-flex xs12>
      <v-img contain max-height="250" src="../assets/apex-icon.png"></v-img>
      <h1 class="font-weight-light white--text mb-5">About</h1>
      <div class="white--text mx-5">{{aboutText}}</div>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data() {
      return {
        aboutText:
          "Apex Tracker is a simple web app that lets users who play Apex Legends check a few of their profile statistics from the Xbox Live, Playstation Network, or Origin Platforms. The front end was built with Vue JS and Vuetify. The backend was created with Node/express to serve the API that reached out to a 3rd party API called 'tracker.gg'. Inspiration for this website came from Traversy Media."
      };
    }
  };
</script>

<style>
</style>