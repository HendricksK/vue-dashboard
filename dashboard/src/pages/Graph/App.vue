<template>
  <BarGraph msg="Welcome to Your Vue.js App"/>
  <LineGraph msg="Welcome to Your Vue.js App"/>

  <a href="https://ghibliapi.herokuapp.com/#section/Getting-Started">https://ghibliapi.herokuapp.com/#section/Getting-Started</a>
  <div v-for="film in films" :key="film.id">
    <div class="film-container">
      <h2>{{ film.title }}</h2>
      <span>{{ film.original_title }}</span><br>
      <span>{{ film.release_date }}</span><br>
      <span><img width="500" v-bind:src="film.movie_banner"></span>
    </div>
  </div>
</template>

<script>
import BarGraph from '../../components/graphs/test/Bar.vue'
import LineGraph from '../../components/graphs/test/Line.vue'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    BarGraph,
    LineGraph,
  },
  data() {
    return {
      films: []
    }
  },
  mounted() {
    // https://www.koderhq.com/tutorial/vue/http-axios/
    axios.get('https://ghibliapi.herokuapp.com/films')
    .then((response) => {
      console.log(response)
      this.films = response.data
    })
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