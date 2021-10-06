<template>
  <div>
    <div :key="city" v-for="city in cities">
      <CityCard :city="city" />
    </div>
  </div>
</template>

<script>
import CityCard from "../components/CityCard";

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
        "Calvi, FR",
        "London, GB",
        "Oslo, NO",
      ],
    };
  },
};
</script>

<style>
</style>