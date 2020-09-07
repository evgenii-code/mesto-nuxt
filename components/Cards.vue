<template>
  <section class="cards">
    <Card
      v-for="card in cards"
      :key="card.id"
      :title="card.name"
      :likes="card.likes.length"
      :url="card.link"
    />
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

  computed: {
    cards() {
      return this.$store.getters['cards/getCards'];
    },
  },

  async fetch() {
    await this.$store.dispatch('cards/fetchCards');
  },

  methods: {
    refreshCards() {
      this.$fetch();
    },
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
