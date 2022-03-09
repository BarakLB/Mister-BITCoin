<template>
  <section class="transfer-fund-container flex direction-col align-center justify-center">
    <h5>Transfer coins to {{ this.contact.name }}</h5>
    <input type="number" v-model="amount" />
    <button @click="transfer()">Transfer</button>
  </section>
</template>

<script>
export default {
  props: {
    contact: Object,
  },
  data() {
    return {
      amount: 0,
    };
  },
  methods: {
    async transfer() {
      console.log(this.amount);
      //   userService.addMove(this.contact, this.amount);
      //   this.$store.dispatch()}
      const move = {
        contact: { ...this.contact },
        amount: this.amount,
      };
      console.log(move);
      await this.$store.dispatch({ type: "addMove", move });
    },
  },
};
</script>

<style scoped>

</style>