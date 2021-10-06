<template>
  <div id="app">
    <main>
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1">WeatherBeta</span>

          <router-link to="/city-details"
            ><a class="nav-link">Details</a></router-link
          >

          <router-link to="/">Home</router-link>
          <router-view></router-view>
        </div>
      </nav>

      <Cities />
    </main>
  </div>
</template>

<script>
import Cities from "./pages/Cities";

export default {
  name: "app",
  components: {
    Cities,
  },
};
</script>

<style>
</style>
