<template>
  <main class="main">
    <Container class="main__container">
      <Profile class="main__profile" />
      <Cards class="main__cards" />
    </Container>
  </main>
</template>

<script>
import Container from '@/components/Container';
import Profile from '@/components/Profile';
import Cards from '@/components/Cards';

export default {
  components: {
    Container,
    Profile,
    Cards,
  },
};
</script>

<style></style>
