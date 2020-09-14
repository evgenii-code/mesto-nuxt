<template>
  <h2 class="title">{{ title }}</h2>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Заголовок',
      required: true,
    },
  },
};
</script>

<style scoped>
.title {
  font-weight: 900;
  font-size: 24px;
  line-height: 29px;
}
</style>
