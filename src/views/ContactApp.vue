<template>
  <section class="contact-app  section__margin">
    <UserBalance v-if="user" :user="user" />
    <div class="flex justify-between">
      <MoveList
        v-if="user"
        :title="`${user.name} last moves:`"
        :moves="user.moves"
      />
      <div class="filter-list-wrapper ">
        <ContactFilter @set-filter="setFilter" />
        <ContactList :contacts="contactsToShow" @remove="removeContact" />
      </div>
    </div>

    <div class="add-contact-btn flex justify-center ">
      <RouterLink class="clean-link" to="/contacts/edit">
        <p class="">
          Add new contact <font-awesome-icon icon="plus" />
        </p>
      </RouterLink>
    </div>
  </section>
</template>

<script>
// import contactService from "@/services/contact.service";
import ContactList from "../components/ContactList.vue";
import ContactFilter from "../components/ContactFilter.vue";
import UserBalance from "../components/UserBalance.vue";
import MoveList from "../components/MoveList.vue";

export default {
  data() {
    return {
      filterBy: null,
      // bitcoinRate: 0,
      // usdRate: 0,
      user: null,
    };
  },
  async created() {
    this.user = await this.$store.getters.loggedInUser;
    // this.bitcoinRate = await bitcoinService.query();
    // this.usdRate = await bitcoinService.getBtcToUsdRate();
    // console.log(this.usdRate)
  },
  methods: {
    setFilter(filterBy) {
      this.filterBy = filterBy;
    },
    async removeContact(id) {
      try {
        await this.$store.dispatch({ type: "removeContact", id });
      } catch (err) {
        console.log(err);
      }
    },
  },
  computed: {
    contacts() {
      return this.$store.getters.contacts;
    },
    contactsToShow() {
      if (!this.filterBy) return this.contacts;
      const regex = new RegExp(this.filterBy.name, "i");
      return this.contacts.filter((contact) =>
        regex.test(contact.name || contact.phone)
      );
    },
  },
  components: {
    ContactList,
    ContactFilter,
    UserBalance,
    MoveList,
  },
};
</script>

<style lang="scss" scoped>
</style>