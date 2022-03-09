<template>
  <!-- <section class=""> -->
    <form class="contact-filter flex">
      <!-- <label> -->
      <input type="text" placeholder="Search contact..." v-model="filterBy.name" @input="setFilter"/>
      <!-- </label> -->
      <button type="submit"><font-awesome-icon icon="magnifying-glass" /></button>
    </form>
  <!-- </section> -->
</template>

<script>
export default {
      data() {
    return {
      filterBy: {
        name: '',
      },
    };
  },
      methods:{
          setFilter() {
          this.$emit('set-filter', this.filterBy);
        },
      }
};
</script>

<style scoped>
.contact-filter{
  margin-top:25px;
}
</style>