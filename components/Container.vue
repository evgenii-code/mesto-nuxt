<template>
  <div class="container">
    <slot />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  width: calc(100% - 400px);
  margin: 0 auto;
}

@media screen and (max-width: 980px) {
  .container {
    width: 90%;
  }
}
</style>
