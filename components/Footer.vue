<template>
  <footer class="footer">
    <Container class="footer__container">
      <LineVertical class="footer__line" />
      <Paragraph class="footer__paragraph" :text="'Author: evgenii-code'" />

      <MyLink
        class="footer__link"
        :href="'https://github.com/evgenii-code'"
        :text="'Github'"
      />
    </Container>
  </footer>
</template>

<script>
import Container from '@/components/Container';
import LineVertical from '@/components/LineVertical';
import MyLink from '@/components/ui/Link';
import Paragraph from '@/components/ui/Paragraph';

export default {
  components: {
    Container,
    LineVertical,
    MyLink,
    Paragraph,
  },
};
</script>

<style scoped>
.footer {
  min-height: 200px;
  display: flex;
}

.footer__container {
  position: relative;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
}

.footer__line {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}

.footer__paragraph {
  color: #fff;
}

.footer__link {
  color: #fff;
}
</style>
