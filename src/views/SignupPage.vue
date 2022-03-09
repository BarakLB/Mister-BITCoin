<template>
<section class="signup-wrapper " >
<img class="top-img" src="https://lukka.tech/wp-content/uploads/2021/08/for-retail-1024x876.png" />
  <section class="signup-page section__margin">
    <div class="signup-heading flex justify-center align-center direction-col">
      <img src="https://tareqapp.com/uploads/aboutStructure/source/68611.png" />
      <h1>Signup to Mister-BITCoin</h1>
    </div>

    <div  class="sign-form flex direction-col justify-center align-center">
        <label class="flex direction-col"
          >Name:
          <input type="text" v-model="user.name" />
        </label>
        <label class="flex direction-col"
          >E-mail:
          <input type="email" v-model="user.mail" />
        </label>
      <button @click="save">Signup</button>
    </div>
  </section>
<img class="bottom-img" src="https://www.systematics.co.il/wp-content/uploads/product-gateway-fg-interim.png"/>
  </section>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "",
        mail: "",
      },
    };
  },
  methods: {
    async save() {
      console.log(this.user);
      await this.$store.dispatch({ type: "signup", user: this.user });
    },
  },
};
</script>

<style>
</style>