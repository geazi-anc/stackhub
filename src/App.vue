<template>
    <div id="app">

        <h1>Stackhub</h1>
        <nav-bar />

    </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
    import { store } from './store/index.js'

export default {
        name: 'App',
    store,
  components: {
    NavBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
