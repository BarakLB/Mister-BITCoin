<template>
  <main v-if="user">
    <Hero :user="user" />
    <Benefits />
    
  

    <!-- <RouterLink class="clean-link" to="/contacts"
      >Go to contacts
    </RouterLink> -->
  </main>
</template>

<script >
import bitcoinService from "@/services/bitcoin.service";
import Hero from "../components/Hero.vue";
import Benefits from "../components/Benefits.vue";


export default {
  data() {
    return {
      bitcoinRate: 0,
      usdRate: 0,
      user: null,
    };
  },
  async created() {
    this.user = await this.$store.getters.loggedInUser;
    this.bitcoinRate = await bitcoinService.query();
    this.usdRate = await bitcoinService.getBtcToUsdRate();
    // console.log(this.usdRate)
  },
  components: { Hero, Benefits },
};
</script>

<style lang="scss" scoped>
</style>