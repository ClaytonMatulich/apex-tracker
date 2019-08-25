<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-row justify="center">
          <v-img
            class="mx-4"
            src="../assets/apex-logo.png"
            contain
            max-width="500"
            max-height="300"
          ></v-img>
        </v-row>
      </v-col>

      <!-- submission card -->
      <v-col cols="12" v-if="!showProfile">
        <v-row align="center" justify="center" class="text-center">
          <v-card outlined elevation="10" width="500" min-width="300" min-height="325" class="mx-4">
            <v-form class="mx-10 mt-10" ref="form" v-model="valid" v-on:submit.prevent="onSubmit">
              <v-text-field
                :rules="[v => !!v || 'Name/id/gamertag is required']"
                required
                v-model="gamertag"
                label="Name/Gamertag/Handle"
                color="#953036"
              ></v-text-field>

              <v-select
                :items="platforms"
                v-model="platform"
                :rules="[v => !!v || 'Platform is required']"
                label="Platform"
                required
                color="#953036"
              ></v-select>
              <v-btn
                :disabled="!valid"
                type="submit"
                color="#953036"
                class="mr-4 mt-10 white--text"
                :loading="loading"
              >submit</v-btn>
            </v-form>
          </v-card>
        </v-row>
      </v-col>
      <!-- end submission car -->

      <!-- profile card -->
      <app-profile-card
        @reset="reset()"
        :profileData="profileData"
        :platformIcon="platformIcon"
        v-if="showProfile"
      ></app-profile-card>
      <!-- end profile card -->
    </v-row>
    <v-snackbar v-model="snackbar">{{snackMessage}}</v-snackbar>
  </v-container>
</template>

<script>
  import axios from "axios";
  import statsTable from "../components/StatsTable.vue";
  import profileCard from "../components/ProfileCard.vue";
  import { eventBus } from "../main";

  export default {
    components: {
      "app-stats-table": statsTable,
      "app-profile-card": profileCard
    },
    data() {
      return {
        snackbar: false,
        snackMessage:
          "Could not find player. Make sure spelling and platform are correct",
        gamertag: "",
        platform: "",
        platforms: ["xbl", "psn", "origin"],
        valid: true,
        profileData: null,
        loading: false
      };
    },
    methods: {
      onSubmit() {
        this.getProfile();
      },
      async getProfile() {
        this.loading = true;
        try {
          const res = await axios.get(
            `/api/v1/profile/${this.platform}/${this.gamertag}`
          );
          this.profileData = res.data.data;

          console.log(this.profileData);
        } catch (err) {
          console.log(err);
          this.snackbar = true;
          this.reset();
        }
        this.loading = false;
        if (this.profileData) {
          eventBus.showProfile = true;
        }
      },
      reset() {
        console.log("reset");
        this.gamertag = "";
        this.platform = "";
        this.profileData = null;
        eventBus.showProfile = false;
        this.loading = false;
      }
    },
    computed: {
      showProfile() {
        return eventBus.showProfile;
      },
      platformIcon() {
        if (this.platform === "xbl") {
          return "mdi-xbox";
        } else if (this.platform === "psn") {
          return "mdi-playstation";
        } else if (this.platform === "origin") {
          return "mdi-origin";
        }
        return "";
      }
    },
    mounted() {
      this.reset();
    }
  };
</script>
