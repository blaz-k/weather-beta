<template>
  <div id="app">
    <main>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <router-link to="/" class="navbar-brand">WeatherBeta</router-link>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link to="/" class="nav-link active" aria-current="page"
                  >Home</router-link
                >
              </li>
              <li class="nav-item">
                <router-link to="/cities" class="nav-link">Cities</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <router-view />
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
