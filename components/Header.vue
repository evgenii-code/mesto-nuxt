<template>
  <header class="header">
    <Container class="header__container">
      <Logo class="header__logo" />
      <Menu class="header__menu" />
      <LineVertical class="header__line" />
    </Container>
  </header>
</template>

<script>
import Container from '@/components/Container';
import Logo from '@/components/Logo';
import Menu from '@/components/Menu';
import LineVertical from '@/components/LineVertical';

export default {
  components: {
    Container,
    Logo,
    Menu,
    LineVertical,
  },
};
</script>

<style lang="css" scoped>
.header {
}

.header__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 150px;
  position: relative;
}

.header__logo {
  /* margin: 50px 0; */
}

.header__line {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
