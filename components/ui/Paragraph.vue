<template>
  <p class="paragraph">{{ text }}</p>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'Текст',
      required: true,
    },
  },
};
</script>

<style scoped>
.text {
  padding: 0;
  margin: 0;
}
</style>
