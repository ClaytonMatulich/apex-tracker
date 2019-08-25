<template>
  <v-app>
    <v-app-bar flat app color="white">
      <v-toolbar-title class="headline text-uppercase apex-text">
        <span>Apex</span>
        <span class="font-weight-light">Tracker</span>
      </v-toolbar-title>
    </v-app-bar>

    <v-content class="apex">
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-content>

    <app-footer></app-footer>
  </v-app>
</template>

<script>
  import Footer from "./components/Footer.vue";

  export default {
    name: "App",
    components: {
      "app-footer": Footer
    },

    data: () => ({
      //
    })
  };
</script>

<style>
  .apex {
    background-color: #953036;
  }

  .apex-text {
    color: #953036;
  }
</style>
