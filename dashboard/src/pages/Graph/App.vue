<template>
  <a href="https://ghibliapi.herokuapp.com/#section/Getting-Started">https://ghibliapi.herokuapp.com/#section/Getting-Started</a>
  <BarGraph msg="Welcome to Your Vue.js App"/>
  <LineGraph msg="Welcome to Your Vue.js App"/>
</template>

<script>
import BarGraph from '../../components/graphs/test/Bar.vue'
import LineGraph from '../../components/graphs/test/Line.vue'

export default {
  name: 'App',
  components: {
    BarGraph,
    LineGraph,
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