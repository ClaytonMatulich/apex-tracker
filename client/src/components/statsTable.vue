<template>
  <v-simple-table class="mx-2">
    <thead>
      <tr>
        <th class="text-left">Stat</th>
        <th class="text-left">Value</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="text-left subtitle-2">Selected Legend</td>
        <td class="text-left">{{ profileData.metadata.activeLegendName }}</td>
      </tr>
      <tr v-if="profileData.segments[0].stats.level">
        <td class="text-left subtitle-2">Level</td>
        <td class="text-left">{{ profileData.segments[0].stats.level.displayValue }}</td>
      </tr>
      <tr v-if="profileData.segments[0].stats.kills">
        <td class="text-left subtitle-2">Lifetime Kills</td>
        <td class="text-left">{{ profileData.segments[0].stats.kills.displayValue }}</td>
      </tr>
      <tr v-if="profileData.segments[0].stats.kills">
        <td class="text-left subtitle-2">Kills Percentile</td>
        <td class="text-left">{{ profileData.segments[0].stats.kills.percentile }}%</td>
      </tr>
      <tr v-if="profileData.segments[0].stats.damage">
        <td class="text-left subtitle-2">Damage Done</td>
        <td class="text-left">{{ profileData.segments[0].stats.damage.displayValue }}</td>
      </tr>
      <tr v-if="profileData.segments[0].stats.damage">
        <td class="text-left subtitle-2">Damage Percentile</td>
        <td class="text-left">{{ profileData.segments[0].stats.damage.percentile }}%</td>
      </tr>
    </tbody>
  </v-simple-table>
</template>

<script>
  import statsTable from "../components/StatsTable.vue";

  export default {
    props: ["profileData"]
  };
</script>

<style>
</style>