<template>
  <BarGraphTest msg="Welcome to Your Vue.js App"/>
  <LineGraphTest msg="Welcome to Your Vue.js App"/>
  <Bar
    :chart-options="chartOptions"
    :chart-data="chartData"
    :chart-id="chartId"
    :dataset-id-key="datasetIdKey"
    :plugins="plugins"
    :css-classes="cssClasses"
    :styles="styles"
    :width="width"
    :height="height"
  />

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
import BarGraphTest from '../../components/graphs/test/Bar.vue'
import LineGraphTest from '../../components/graphs/test/Line.vue'
import axios from 'axios'

import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'App',
  components: {
    BarGraphTest,
    LineGraphTest,
    Bar
  },
  props: {
    chartId: {
      type: String,
      default: 'bar-chart'
    },
    datasetIdKey: {
      type: String,
      default: 'label'
    },
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 400
    },
    cssClasses: {
      default: '',
      type: String
    },
    styles: {
      type: Object,
      default: () => {}
    },
    plugins: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      films: [],
      chartData: {
        labels: [],
        datasets: [],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        // https://stackoverflow.com/questions/70509197/bar-chart-js-legend-showing-undefined
      }
    }
  },
  mounted() {
    // let datasets = []
    // https://www.koderhq.com/tutorial/vue/http-axios/
    axios.get('https://ghibliapi.herokuapp.com/films')
    .then((response) => {
      this.films = response.data
    })

    let endpoints = [
      'https://openlibrary.org/subjects/horror.json?published_in=1800-2000',
      'https://openlibrary.org/subjects/comedy.json?published_in=1800-2000',
      'https://openlibrary.org/subjects/travel.json?published_in=1800-2000'
    ];

    axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then(
      (data) => {
        let datasets = []
        for (let x = 0; x < data.length; x++) {
          this.chartData.labels.push(data[x].data.name)
          datasets.push(data[x].data.work_count)
        }
        this.chartData.datasets.push({label: 'No of books published between 1800 - 2000', data: datasets})
      },
    );


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