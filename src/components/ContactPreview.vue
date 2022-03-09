<template>
<RouterLink class="clean-link" :to="`/contacts/${this.contact._id}`">
  <section class="contact-preview flex align-center">
      <div class="circle flex align-center justify-center" :style="{backgroundColor: contact.color}">
    <img :src="'https://robohash.org/' + this.contact._id + '.png'" alt="user-img"/>
    </div>
    <p>{{ this.contact.name }}</p>
  </section>
  </RouterLink>
</template>

<script>
export default {
  props: ["contact"],
  
};
</script>

<style lang="scss" scoped>

</style>