<template>
  <section class="header-wrapper gradient-bg">
    <header class="flex align-center justify-between">
      <h2>Mister-<span>BIT</span>Coin</h2>
      <nav>
        | <RouterLink class="clean-link" to="/"><font-awesome-icon icon="home"/></RouterLink> |
        <RouterLink class="clean-link" to="/contacts"> <font-awesome-icon icon="user" /></RouterLink> |
        <RouterLink class="clean-link" to="/signup"> <font-awesome-icon icon="right-to-bracket" /></RouterLink> |
        <RouterLink class="clean-link" to="/statistics"> <font-awesome-icon icon="chart-bar" /></RouterLink>
        |
      </nav>
    </header>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
span {
  color:gold;
}
</style>