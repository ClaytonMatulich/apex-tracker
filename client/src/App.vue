<template>
  <v-app>
    <v-app-bar flat app>
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
  </v-app>
</template>

<script>
  export default {
    name: "App",

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
