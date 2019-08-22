<template>
  <v-simple-table>
    <thead>
      <tr>
        <th class="text-left">Stat</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="stat in stats" :key="stat.name">
        <td>{{ stat.name }}</td>
        <td>{{ stat.value }}</td>
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