<template>
  <section class="moves-container">
    <div class="moves-heading">
      <div class="mini-hr"/>
      <h1>{{ this.title }}</h1>
    </div>
    <!-- <hr /> -->
    <div v-if="this.moves" class="flex moves-list">
    <div v-for="(move, idx) in this.moves" :key="idx" class="move-preview flex direction-col">
      <!-- <hr /> -->

      <p>To: {{ move.to }}</p>
      <p>Date: {{ timeToShow(move.at) }}</p>
      <p>Amount: {{ move.amount }}</p>
      <div class="mini-hr"/>
    </div>
    </div>
  </section>
</template>

<script>
import { utils } from "../services/utils.service";
export default {
  props: {
    title: String,
    moves: Array,
  },
  methods: {
    timeToShow(timestamp) {
      return utils.handleTimestamp(timestamp);
    },
  },
};
</script>

<style scoped>
</style>