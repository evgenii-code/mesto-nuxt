<template>
  <a class="link" rel="noopener noreferrer" target="_blank" :href="href">
    {{ text }}
  </a>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.link {
}
</style>
