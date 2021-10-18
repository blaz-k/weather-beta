<template>
  <div v-if="details">
    <div class="upper">
      <div class="card text-center">
        <div class="card-header">{{ details.timezone }}</div>
        <div class="card-body">
          <h5 class="card-title">Tukaj bo slika vremena</h5>
          <p class="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
        </div>
        <div class="card-footer text-muted">{{ details.current.temp }} °C</div>
      </div>
    </div>
    <div class="downleft">
      <div class="card" style="width: 18rem">
        <div class="card-header">Informations</div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            Wind speed: {{ details.current.wind_speed }} m/s
          </li>
          <li class="list-group-item">
            Humidity: {{ details.current.humidity }}
          </li>
        </ul>
      </div>
    </div>
    <div class="downright">
      <div class="card" style="width: 18rem">
        <div class="card-header">7-day forecast</div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            Day 1: {{ details.daily[1].temp.day }}
          </li>
          <li class="list-group-item">
            Day 2: {{ details.daily[2].temp.day }}
          </li>
          <li class="list-group-item">
            Day 3: {{ details.daily[3].temp.day }}
          </li>
          <li class="list-group-item">
            Day 4: {{ details.daily[4].temp.day }}
          </li>
          <li class="list-group-item">
            Day 5: {{ details.daily[5].temp.day }}
          </li>
          <li class="list-group-item">
            Day 6: {{ details.daily[6].temp.day }}
          </li>
          <li class="list-group-item">
            Day 7: {{ details.daily[7].temp.day }}
          </li>
        </ul>
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