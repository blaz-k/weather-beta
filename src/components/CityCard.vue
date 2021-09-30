<template>
  <div>
    <div class="card" style="width: 18rem">
      <img src="" class="card-img-top" alt="" />
      <div class="card-body">
        <h5 class="card-title">city: {{ mesto }}</h5>
        <p class="card-text">Temp in {{}} is:</p>
        <a href="" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CityCard",
  props: ["city"],

  data() {
    return {
      apiKey: "61c7d12c7c82021c85f17dc82f594edb",
      url: "https://api.openweathermap.org/data/2.5/",
      unit: "metric",
      mesto: [],
    };
  },
  methods: {
    async getData() {
      console.log("data for city: " + this.city);
      console.log("data for mesto: " + this.mesto);
      let response = await axios.get(
        `${this.url}weather?q=${this.city}&units=${this.unit}&appid=${this.apiKey}`,
        console.log(
          "consola: " +
            `${this.url}weather?q=${this.city}&units=${this.unit}&appid=${this.apiKey}`
        ),
        console.log("data for mesto2: " + this.mesto)
      );
      console.log("repsonse data");
      console.log(response.data);
      this.mesto = response.data;
      console.log("data for mesto3: " + this.mesto.main.temp);

      /*
      console.log("this mesto lon: " + this.mesto.coord.lon);
      console.log("this mesto lat: " + this.mesto.coord.lat);
      console.log("this mesto temp: " + this.mesto.main.temp);
      console.log("this ime: " + this.mesto.name);
      console.log("this ime city: " + this.city);*/
    },
  },
  created() {
    this.getData();
  },
};
</script>

<style>
</style>

<!--
      apiKey: "61c7d12c7c82021c85f17dc82f594edb",
      url: "https://api.openweathermap.org/data/2.5/",


    async getCities() {
      let response = await axios.get(
        `${this.url}weather?q=${this.cities}&units=${this.unit}&appid=${this.apiKey}`
      );
      console.log(response.data);
      this.cities = response.data;
      unit: "metric",
Temp in {{ Math.round(city.weather[0].main) }}

    },
      -->