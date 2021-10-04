<template>
  <div
    id="carouselExampleSlidesOnly"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="" class="d-block w-100" alt="" />
        {{ mesto.name }}, {{ mesto.sys.country }}
      </div>
    </div>
  </div>
  <div class="card" style="width: 18rem">
    <img src="" class="card-img-top" alt="" />
    <div class="card-body"></div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Wind speed</li>
      <li class="list-group-item">Humidity:</li>
      <li class="list-group-item">Pressure</li>
      <li class="list-group-item">Temp Max:</li>
      <li class="list-group-item">Temp Min:</li>
    </ul>
  </div>
</template>

<script>
import CityCard from "../components/CityCard";

export default {
  name: "CityDetails",
};
</script>

<style>
</style>