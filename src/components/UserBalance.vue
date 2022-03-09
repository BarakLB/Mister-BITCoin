<template>
  <section class="balance-wrapper">
    <div class="balance-heading flex align-center justify-center">
      <div
        class="circle flex justify-center align-center"
        :style="{ backgroundColor: user.color }">
        <img
          :src="'https://robohash.org/' + user._id + '.png'"
          alt="user-img"
        />
      </div>
      <h1 >Hello {{ user.name }}!</h1>
    </div>
    <div class="gradient-hr"/>
    <div class="balance-container flex justify-between ">
      <div>
        <h1>CURRENT BALANCE</h1>
        <p>BIT: <font-awesome-icon icon="bitcoin-sign" /> {{ user.coins }}</p>
        <p>USD: $ {{ (user.coins * usdRate).toFixed(2) }}</p>
      </div>

      <div>
        <h1>CURRENT BTC USD <span>LIVE</span></h1>
        <p>$ {{ usdRate }}</p>
      </div>
    </div>
    
  </section>
</template>

<script>
import bitcoinService from "@/services/bitcoin.service";

export default {

  props: ["user"],
  components: {  },
   data() {
    return {
      filterBy: null,
      bitcoinRate: 0,
      usdRate: 0,
    };
  },
  async created() {
    // this.user = await this.$store.getters.loggedInUser;
    this.bitcoinRate = await bitcoinService.query();
    this.usdRate = await bitcoinService.getBtcToUsdRate();
    // console.log(this.usdRate)
  },
};
</script>

<style>
</style>