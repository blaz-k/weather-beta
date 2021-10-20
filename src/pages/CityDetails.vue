<template>
  <div v-if="details">
    <div class="upper m-4">
      <div class="card text-center w-100">
        <div class="card-header">
          <strong>
            <h1>{{ details.timezone }}</h1></strong
          >
        </div>
        <div
          class="card-body"
          v-if="details.current.weather[0].main === 'Clouds'"
        >
          <h5 class="card-title">Today's weather:</h5>
          <img
            src="../assets/Clouds.png"
            class="img-fluid rounded-start"
            alt=""
          />
        </div>
        <div
          class="card-body"
          v-else-if="details.current.weather[0].main === 'Clear'"
        >
          <h5 class="card-title">Today's weather:</h5>
          <img
            src="../assets/Clear.png"
            class="img-fluid rounded-start"
            alt=""
          />
        </div>
        <div
          class="card-body"
          v-else-if="details.current.weather[0].main === 'Fog'"
        >
          <h5 class="card-title">Today's weather:</h5>
          <img src="../assets/Fog.png" class="img-fluid rounded-start" alt="" />
        </div>
        <div class="card-body" v-else>
          <h5 class="card-title">Today's weather:</h5>
          <img
            src="../assets/Rain.png"
            class="img-fluid rounded-start"
            alt=""
          />
        </div>
        <div class="card-footer">{{ Math.round(details.current.temp) }} °C</div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-6">
        <div class="downleft">
          <div class="card w-75 m-4">
            <div class="card-header">Informations</div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <em>Wind speed: </em>
                <strong>{{ details.current.wind_speed }} m/s</strong>
              </li>
              <li class="list-group-item">
                <em>Humidity: </em>
                <strong>{{ details.current.humidity }} %</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="downright">
          <div class="card w-75 m-4">
            <div class="card-header">7-day forecast</div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <em>Day 1: </em>
                <strong
                  >{{ Math.round(details.daily[1].temp.day) }} °C ,
                  {{ details.daily[1].weather[0].main }}</strong
                >
              </li>
              <li class="list-group-item">
                <em>Day 2: </em>
                <strong
                  >{{ Math.round(details.daily[2].temp.day) }} °C ,
                  {{ details.daily[2].weather[0].main }}</strong
                >
              </li>
              <li class="list-group-item">
                <em>Day 3: </em>
                <strong
                  >{{ Math.round(details.daily[3].temp.day) }} °C ,
                  {{ details.daily[3].weather[0].main }}</strong
                >
              </li>
              <li class="list-group-item">
                <em>Day 4: </em>
                <strong
                  >{{ Math.round(details.daily[4].temp.day) }} °C ,
                  {{ details.daily[4].weather[0].main }}</strong
                >
              </li>
              <li class="list-group-item">
                <em>Day 5: </em>
                <strong
                  >{{ Math.round(details.daily[5].temp.day) }} °C ,
                  {{ details.daily[5].weather[0].main }}</strong
                >
              </li>
              <li class="list-group-item">
                <em>Day 6: </em>
                <strong
                  >{{ Math.round(details.daily[6].temp.day) }} °C ,
                  {{ details.daily[6].weather[0].main }}</strong
                >
              </li>
              <li class="list-group-item">
                <em>Day 7: </em>
                <strong
                  >{{ Math.round(details.daily[7].temp.day) }} °C ,
                  {{ details.daily[7].weather[0].main }}</strong
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
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
        `${this.url}onecall?lat=${this.latitude}&lon=${this.longitude}&exclude=minutely&units=${this.unit}&appid=${this.apiKey}`
      );
      this.details = res.data;
      console.log(res.data);
    },
  },
};
</script>

<style>
</style>