<template>
  <div>City: {{ lonlat }}</div>
</template>

<script>
import axios from "axios";

export default {
  name: "CityDetails",
  components: {},
  data() {
    return {
      apiKey: "61c7d12c7c82021c85f17dc82f594edb",
      url: "https://api.openweathermap.org/data/2.5/",
      unit: "metric",
      mesto: null,
      details: null,
      longitude: null,
      latitude: null,
    };
  },
  props: ["lonlat"],
  created() {
    (this.longitude = this.lonlat.split(",")[0]),
      (this.latitude = this.lonlat.split(",")[1]),
      this.cityNameDetails();
    console.log(this.lonlat);
  },
  methods: {
    async cityNameDetails() {
      let res = await axios.get(
        `${this.url}onecall?lat=${this.latitude}&lon=${this.longitude}&exclude=daily&appid=${this.apiKey}`
      );
      this.details = res.data;
      console.log(res.data);
    },
  },
};
</script>

<style>
</style>