<template>
  <section class="edit-wrapper section__margin">
    <div class="edit-heading flex align-center direction-col">
      <font-awesome-icon icon="user-plus" />
      <h1>{{ pageTitle }}</h1>
    </div>
    <div v-if="contactToEdit" class="edit-form flex direction-col align-center justify-center">
      <label
        >Name:
        <input type="text" v-model="contactToEdit.name" />
      </label>
      <label
        >Email:
        <input type="email" v-model="contactToEdit.email" />
      </label>
      <label
        >Phone:
        <input type="text" v-model="contactToEdit.phone" />
      </label>
      <button @click="save">Save</button>
    </div>
  </section>
</template>

<script>
import contactService from "../services/contact.service";
export default {
  data() {
    return {
      contactToEdit: null,
    };
  },
  async created() {
    const { id } = this.$route.params;
    if (id) this.contactToEdit = await contactService.get(id);
    else this.contactToEdit = contactService.getEmptyContact();
  },
  methods: {
    async save() {
      // await contactService.save(this.contactToEdit);
      await this.$store.dispatch({
        type: "saveContact",
        contact: this.contactToEdit,
      });
    },
  },
  computed: {
    pageTitle() {
      const { id } = this.$route.params;
      return id ? "Edit contact" : "Add contact";
    },
  },
};
</script>

<style>
</style>