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
      <v-col cols="12" v-if="!showProfile">
        <v-row align="center" justify="center" class="text-center">
          <v-card outlined elevation="10" width="500" min-width="300" min-height="325" class="mx-4">
            <v-form class="ma-10" ref="form" v-model="valid" v-on:submit.prevent="onSubmit">
              <v-text-field v-model="gamertag" label="Name" required color="#953036"></v-text-field>

              <v-select
                :items="platforms"
                v-model="platform"
                :rules="[v => !!v || 'Item is required']"
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

      <v-col cols="12" v-if="showProfile">
        <v-row align="center" justify="center" class="text-center">
          <v-card outlined elevation="10" width="900" min-width="300" min-height="325">
            <v-row align="center" justify="center">
              <v-col class="text-center" xs="12" sm="12" md="6" lg="6" xl="6">
                <v-row align="center" justify="center">
                  <v-img
                    class="text-center ma-5"
                    max-width="400"
                    :src="profileData.segments[1].metadata.imageUrl"
                  ></v-img>
                </v-row>
              </v-col>
              <v-col xs="12" sm="12" md="6" lg="6" xl="6">
                <div class="text-center ma-5">
                  <v-avatar size="100">
                    <img :src="profileData.platformInfo.avatarUrl" alt="avatar" />
                  </v-avatar>
                  <div class="headline">{{gamertag}}</div>
                  <app-stats-table :profileData="profileData"></app-stats-table>
                  <v-btn color="#953036" @click="reset" class="ma-5 white--text">Return</v-btn>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-row>
      </v-col>
    </v-row>
    <v-snackbar v-model="snackbar">{{snackMessage}}</v-snackbar>
  </v-container>
</template>

<script>
  import axios from "axios";
  import statsTable from "../components/statsTable.vue";

  export default {
    components: {
      "app-stats-table": statsTable
    },
    data() {
      return {
        snackbar: false,
        snackMessage:
          "Could not find player. Make sure capitalization is correct",
        gamertag: "",
        platform: "",
        platforms: ["xbl", "psn", "origin"],
        valid: true,
        profileData: null,
        showProfile: false,
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
          this.showProfile = true;
        }
      },
      reset() {
        this.gamertag = "";
        this.platform = "";
        this.profileData = null;
        this.showProfile = false;
        this.loading = false;
      }
    },
    mounted() {
      this.reset();
    }
  };
</script>
