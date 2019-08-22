<template>
  <v-col cols="12">
    <v-row align="center" justify="center" class="text-center">
      <v-card outlined elevation="10" width="900" min-width="300" min-height="325">
        <v-row align="center" justify="center">
          <v-col class="text-center" xs="12" sm="12" md="6" lg="6" xl="6">
            <v-row align="center" justify="center">
              <v-img
                class="text-center ma-5"
                max-width="500"
                :src="profileData.segments[1].metadata.imageUrl"
              ></v-img>
            </v-row>
          </v-col>
          <v-col xs="12" sm="12" md="6" lg="6" xl="6">
            <div class="text-center ma-5">
              <v-avatar size="100" v-if="profileData.platformInfo.avatarUrl">
                <img :src="profileData.platformInfo.avatarUrl" alt="avatar" />
              </v-avatar>

              <div
                class="headline my-2"
              >{{profileData.platformInfo.platformUserHandle.toUpperCase()}}</div>
              <v-chip :style="getChipColor()">
                <v-icon class="white--text">{{platformIcon}}</v-icon>
              </v-chip>
              <app-stats-table :profileData="profileData"></app-stats-table>
              <v-btn color="#953036" @click="$emit('reset')" class="ma-5 white--text">Return</v-btn>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </v-row>
  </v-col>
</template>

<script>
  import statsTable from "../components/StatsTable.vue";
  export default {
    props: ["profileData", "platformIcon"],
    components: { "app-stats-table": statsTable },
    methods: {
      getChipColor() {
        if (this.profileData.platformInfo.platformSlug === "xbl") {
          return {
            backgroundColor: "#0e7a0d"
          };
        } else if (this.profileData.platformInfo.platformSlug === "psn") {
          return {
            backgroundColor: "#003791"
          };
        } else if (this.profileData.platformInfo.platformSlug === "origin") {
          return {
            backgroundColor: "#f05523"
          };
        }
      }
    }
  };
</script>

<style>
</style>