<template>
  <section class="contact-list ">
    <ul class="clean-list">
      <li v-for="contact in contacts" :key="contact._id" class="flex justify-between">
        <ContactPreview :contact="contact" />
        <button @click="remove(contact._id)"> <font-awesome-icon icon="trash" /></button>
      </li>
    </ul>
  </section>
</template>

<script>
import ContactPreview from "./ContactPreview.vue";
export default {
  props: ["contacts"],
  components: { ContactPreview },
  methods: {
    remove(id) {
      this.$emit("remove", id);
    },
  },
};
</script>

<style lang="scss" scoped>

</style>