<template>
  <div class="default">
    <Header />
    <Nuxt class="default__main default__main_scroll-disabled" />
    <Overlay v-if="popupState" />
    <Popup v-if="popupState" />
  </div>
</template>

<script>
import Vue from 'vue';
import global from '@/mixins/global';
import Overlay from '@/components/ui/Overlay';
import Popup from '@/components/Popup';
import Header from '@/components/Header';

Vue.mixin(global);

export default {
  components: {
    Overlay,
    Popup,
    Header,
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
}

.default__main {
}

.default__main_scroll-disabled {
  overflow: hidden;
}
</style>
