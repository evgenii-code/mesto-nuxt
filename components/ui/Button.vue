<template>
  <button class="button" @click.prevent="$emit('btn-click')">
    <slot></slot>
  </button>
</template>

<script>
export default {};
</script>

<style scoped>
.button {
  position: relative;
  background-color: unset;
  border: 2px solid #ffffff;
  box-sizing: border-box;
  border-radius: 2px;
  cursor: pointer;
}
</style>
