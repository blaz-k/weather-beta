<template>
  <div>{{ this.$route.params.cityname }}</div>
</template>

<script>
export default {
  name: "CityDetails",
  components: {},
  created() {
    console.log(this.$route.params.cityname);
  },
};
</script>

<style>
</style>