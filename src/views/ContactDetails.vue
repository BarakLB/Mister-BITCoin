<template>
  <section v-if="contact" class="contact-details-wrapper section__margin">
    <div class="contact-container flex align-center justify-center">
      <div class="flex direction-col align-center justify-center">
        <img
          :src="'https://robohash.org/' + this.contact._id + '.png'"
          alt="user-img"
        />
        <div class="contact-data flex direction-col align-center justify-center">
          <!-- <div class="mini-hr" /> -->
          <h1>{{ contact.name }}</h1>
          <p>{{ contact.email }}</p>
          <p>{{ contact.phone }}</p>
          <TransferFund :contact="contact" />
        </div>
      </div>
      <MoveList :title="'Your Moves:'" :moves="moves" />
    </div>

    <div class="links-container flex space-around">
      <RouterLink class="clean-link" to="/contacts">Back</RouterLink>
      <RouterLink class="clean-link" :to="`/contacts/edit/${contact._id}`"
        >Edit</RouterLink
      >
    </div>
  </section>
</template>

<script>
import contactService from "../services/contact.service";
import TransferFund from "../components/TransferFund.vue";
import MoveList from "../components/MoveList.vue";

export default {
  data() {
    return {
      contact: null,
      // user:null,
    };
  },
  async created() {
    const { id } = this.$route.params;
    this.contact = await contactService.get(id);
  },
  computed: {
    moves() {
      const currUser = this.$store.getters.loggedInUser;
      const movesOnContact = currUser.moves.filter(
        (move) => move.toId === this.contact._id
      );
      return movesOnContact.splice(0, 4);
    },
  },
  components: { TransferFund, MoveList },
};
</script>

<style>
</style>