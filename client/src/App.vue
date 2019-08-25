<template>
  <v-app>
    <app-navbar></app-navbar>

    <v-content class="apex">
      <v-container fill-height>
        <router-view></router-view>
      </v-container>
    </v-content>

    <app-footer class></app-footer>
  </v-app>
</template>

<script>
  import Footer from "./components/Footer.vue";
  import Navbar from "./components/Navbar.vue";

  export default {
    name: "App",
    components: {
      "app-footer": Footer,
      "app-navbar": Navbar
    },

    data: () => ({
      showProfile: false
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

  a {
    text-decoration: none;
  }
</style>
