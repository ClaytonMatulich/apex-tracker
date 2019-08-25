<template>
  <v-app-bar flat app color="white">
    <v-toolbar-title class="headline text-uppercase apex-text">
      <router-link @click="reset" to="/">
        <span @click="reset" class="apex-text">Apex</span>
        <span @click="reset" class="font-weight-light apex-text">Tracker</span>
      </router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>

    <router-link to="/">
      <v-btn text color="#953036" @click="reset">
        <span class="subheading apex-text">Search</span>
      </v-btn>
    </router-link>

    <router-link to="/about">
      <v-btn text color="#953036">
        <span class="subheading apex-text">About</span>
      </v-btn>
    </router-link>
  </v-app-bar>
</template>

<script>
  import { eventBus } from "../main";
  export default {
    methods: {
      reset() {
        eventBus.showProfile = false;
      }
    }
  };
</script>

<style>
</style>