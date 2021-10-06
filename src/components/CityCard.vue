<template>
  <div v-if="mesto">
    <div
      class="card mb-4 col-sm-6"
      style="max-width: 340px"
      @click="cityDetail"
    >
      <div class="row g-0">
        <div class="col-md-4" v-if="mesto.weather[0].main === 'Clouds'">
          <img
            src="../assets/Clouds.png"
            class="img-fluid rounded-start"
            alt=""
          />
        </div>

        <div class="col-md-4" v-else-if="mesto.weather[0].main === 'Clear'">
          <img
            src="../assets/Clear.png "
            class="img-fluid rounded-start"
            alt=""
          />
        </div>
        <div class="col-md-4" v-else-if="mesto.weather[0].main === 'Fog'">
          <img src="../assets/Fog.png" class="img-fluid rounded-start" alt="" />
        </div>

        <div class="col-md-4" v-else>
          <img
            src="../assets/Rain.png"
            class="img-fluid rounded-start"
            alt=""
          />
        </div>
        <div class="card-body col-md-8 btn">
          <h5 class="card-title">{{ mesto.name }}, {{ mesto.sys.country }}</h5>
          <p class="card-text">{{ Math.round(mesto.main.temp) }} °C</p>
          <p class="card-text">
            <small class="text-muted">{{ noviDatum }}</small>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import axios from "axios";

export default {
  name: "CityCard",
  props: ["city"],
  computed: {
    noviDatum() {
      let date = new Date(this.mesto.dt * 1000);
      return moment(date).format("DD/MMMM/YYYY");
    },
    getLongitude() {
      if (this.mesto) {
        return this.mesto.coord.lon;
      }

      return null;
    },
    getLatitude() {
      if (this.mesto) {
        return this.mesto.coord.lat;
      }

      return null;
    },
  },

  data() {
    return {
      apiKey: "61c7d12c7c82021c85f17dc82f594edb",
      url: "https://api.openweathermap.org/data/2.5/",
      unit: "metric",
      mesto: null,
      details: null,
    };
  },
  methods: {
    async getData() {
      let response = await axios.get(
        `${this.url}weather?q=${this.city}&units=${this.unit}&appid=${this.apiKey}`
      );
      this.mesto = response.data;
    },
    async cityDetail() {
      let res = await axios.get(
        `${this.url}onecall?lat=${this.getLatitude}&lon=${this.getLongitude}&exclude=daily&appid=${this.apiKey}`
      );
      this.details = res.data;
      console.log(res.data);
    },
  },
  created() {
    this.getData();
  },
};
</script>

<style>
.card {
  display: inline-block;
}
</style>