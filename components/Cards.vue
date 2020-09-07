<template>
  <section class="cards">
    <Card :title="'Название 1'" />
    <Card :title="'Название 2'" />
    <Card :title="'Название 3'" />
    <Card :title="'Название 4'" />
    <Card :title="'Название 5'" />
    <Card :title="'Название 6'" />
  </section>
</template>

<script>
import Container from '@/components/Container';
import Card from '@/components/Card';

export default {
  components: {
    Container,
    Card,
  },
};
</script>

<style scoped>
.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 18px 9px;
}

@media screen and (max-width: 1024px) {
  .cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 640px) {
  .cards {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
