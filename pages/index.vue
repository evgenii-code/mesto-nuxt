<template>
  <main class="main">
    <Profile class="main__profile" />
    <Container class="main__container">
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
