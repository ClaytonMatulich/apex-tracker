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
        <td class="text-left">Selected Legend</td>
        <td class="text-left">{{ profileData.metadata.activeLegendName }}</td>
      </tr>
      <tr v-if="profileData.segments[0].stats.level">
        <td class="text-left">Level</td>
        <td class="text-left">{{ profileData.segments[0].stats.level.displayValue }}</td>
      </tr>
      <tr v-if="profileData.segments[0].stats.kills">
        <td class="text-left">Lifetime Kills</td>
        <td class="text-left">{{ profileData.segments[0].stats.kills.displayValue }}</td>
      </tr>
      <tr>
        <td class="text-left">Damage Done</td>
        <td class="text-left">{{ profileData.segments[0].stats.damage.displayValue }}</td>
      </tr>
    </tbody>
  </v-simple-table>
</template>

<script>
  export default {
    props: ["profileData"]
  };
</script>

<style>
</style>