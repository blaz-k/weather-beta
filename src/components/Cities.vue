<template>
  <div>
    <h2>Cities</h2>
    <div :key="mesto" v-for="mesto in cities">
      <CityCard :city="mesto" />
    </div>
  </div>
</template>

<script>
import CityCard from "./CityCard";

export default {
  name: "Cities",
  components: {
    CityCard,
  },
  data() {
    return {
      cities: [
        "Dublin, IE",
        "Budapest, HU",
        "Bern, CH",
        "Berlin, DE",
        "Athens, GR",
        "Vienna, AT",
        "Madrid, ES",
        "Ljubljana, SI",
        "Paris, FR",
      ],
    };
  },
};
</script>

<style>
</style>