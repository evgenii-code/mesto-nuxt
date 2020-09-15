<template>
  <div class="default">
    <Header class="default__header" />
    <Nuxt class="default__main" />
    <Overlay v-if="popupState" class="default__overlay" />
    <Popup v-if="popupState" class="default__popup" />
    <Footer class="default__footer" />
  </div>
</template>

<script>
import Vue from 'vue';
import global from '@/mixins/global';
import Overlay from '@/components/ui/Overlay';
import Popup from '@/components/Popup';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

Vue.mixin(global);

export default {
  components: {
    Overlay,
    Popup,
    Header,
    Footer,
  },

  computed: {
    popupState() {
      return this.$store.getters['popup/getPopupState'];
    },
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
  min-width: 320px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.default__main {
  margin-bottom: auto;
}

.default__footer {
  margin-top: 50px;
  justify-self: flex-end;
}
</style>
