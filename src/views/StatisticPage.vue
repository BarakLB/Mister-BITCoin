<template>
  <section class="charts-wrapper section__margin">

    
    <div class="charts-heading">
      <h1>{{marketPriceList.name}}</h1>
      <p>{{marketPriceList.description}}</p>
      <p>Period: {{marketPriceList.period}}</p>
      <p>Unit: {{marketPriceList.unit}}</p>
    </div>
    <Chart :chartdata="marketPriceList" v-if="marketPriceList"/>
  </section>
</template>

<script>
import Chart from "../components/Chart.vue";
import bitcoinService from "../services/bitcoin.service";
export default {
  data() {
    return {
      marketPriceList: null,
    };
  },
  async created() {
    this.marketPriceList = await bitcoinService.getMarketPrice();
  },
  components: { Chart },
};
</script>

<style>
</style>