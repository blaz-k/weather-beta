<template>
  <div>City: {{ cityname }}</div>
</template>

<script>
export default {
  name: "CityDetails",
  components: {},
  props: ["cityname"],
  created() {
    console.log(this.cityname);
  },
};
</script>

<style>
</style>