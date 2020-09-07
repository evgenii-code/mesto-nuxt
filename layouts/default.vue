<template>
  <div class="default">
    <Header />
    <Nuxt />
  </div>
</template>

<script>
import Header from '@/components/Header';

export default {
  components: {
    Header,
  },
};
</script>

<style>
html {
  font-family: 'Inter', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.default {
  background-color: #000000;
  position: relative;
  min-height: 100vh;
}
</style>
