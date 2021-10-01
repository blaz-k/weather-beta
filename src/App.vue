<template>
  <div id="app">
    <main>
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1">WeatherBeta</span>
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
