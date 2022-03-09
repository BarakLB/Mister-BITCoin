<template>
  <section class="hero-wrapper flex section__padding gradient-bg">
    <div class="hero-txt flex direction-col align-center justify-center">
      <h1 class="gradient-color">Hello {{user.name}} Welcome to Mister-BITCoin</h1>
      <p>
        Yet bed any for travelling assistance indulgence unpleasing. Not
        thoughts all exercise blessing. Indulgence way everything joy alteration
        boisterous the attachment. Party we years to order allow asked of.
      </p>
       <RouterLink to="/contacts" class="hero-btn flex clean-link">
        <button>Get Started <font-awesome-icon icon="arrow-right" /></button>
       </RouterLink>
    </div>

    <div class="hero-img flex align-center">
      <img src="../assets/imgs/crypto-header.png" />
    </div>
  </section>
</template>

<script>
export default {
     props: ["user"],
};
</script>

<style>
</style>