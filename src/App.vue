<template>
  <div id="app">
    <main>
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1">WeatherBeta</span>
          <router-link to="/">Home</router-link>
          <router-link to="/cities">Cities</router-link>
          <router-link to="/city-details">City Details</router-link>
        </div>
        <router-view />
      </nav>
    </main>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
</style>
