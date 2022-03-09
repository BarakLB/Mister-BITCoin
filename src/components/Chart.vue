<template>
  <div class="chart ">
    <LineChart :chart-data="chartData" :options="options" />
  </div>
</template>

<script>
import {LineChart } from "vue-chart-3";

import {
  Chart,
  LineController,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";
import { utils } from "../services/utils.service.js";
Chart.register(
  LineController,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
);
export default {
  components: {
    LineChart,
  },
  props: {
    chartdata: Array,
  },
  data() {
    return {
      labels: this.chartdata.values.map((value) =>
        new Date(value.x * 1000).toLocaleDateString("en-GB")
      ),
      datasets: [
        {
          label: "Bitcoin",
          //   data: utils.getAvgValues(this.chartdata),
          data: this.chartdata.values.map((val) => val.y),
          backgroundColor: "#fff",
          fill: "#C70039",
          strokeFill: "#C70039",
          
          borderColor: "#C70039",
        //   color:#000,
          tension: 0.1,
        },
      ],
      options: {
          responsive: true,
        // back
        //   borderColor: "#fff",
        title: {
          text: "Bitcoin",
        },
      },
    };
  },
  computed: {
    chartData() {
      return {
        labels: this.labels,
        datasets: this.datasets,
      };
    },
  },
};
</script>



