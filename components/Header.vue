<template>
  <header class="header">
    <Container class="header__container">
      <Logo class="header__logo" />
      <LineVertical class="header__line" />
    </Container>
  </header>
</template>

<script>
import Container from '@/components/Container';
import Logo from '@/components/Logo';
import LineVertical from '@/components/LineVertical';

export default {
  components: {
    Container,
    Logo,
    LineVertical,
  },
};
</script>

<style lang="css" scoped>
.header {
}

.header__logo {
  margin: 50px 0;
}
</style>
