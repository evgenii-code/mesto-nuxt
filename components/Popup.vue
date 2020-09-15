<template>
  <div class="popup">
    <div class="popup__container">
      <button class="popup__close-button" @click.prevent="togglePopup"></button>

      <img
        class="popup__image"
        v-if="getCurrentContent.src"
        :src="getCurrentContent.src"
        :alt="getCurrentContent.title"
      />

      <Info
        class="popup__content"
        v-else-if="getCurrentContent.message"
        :currentContent="getCurrentContent"
      />

      <Form class="popup__content" v-else :currentContent="getCurrentContent" />
    </div>
  </div>
</template>

<script>
import Form from '@/components/Form';
import Info from '@/components/Info';

export default {
  components: {
    Form,
    Info,
  },

  computed: {
    getCurrentContent() {
      return this.$store.getters['popup/getCurrentPopupContent'];
    },
  },
};
</script>

<style scoped>
.popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.popup__container {
  position: relative;
}

.popup__content {
  width: 430px;
  /* min-height: 330px; */
  background-color: #ffffff;
  border-radius: 10px;
  padding: 36px;
  display: flex;
  justify-content: flex-start;
}

.popup__image {
  max-width: 90vw;
  max-height: 90vw;
  object-fit: cover;
}

.popup__close-button {
  position: absolute;
  right: -40px;
  top: -40px;
  width: 40px;
  height: 40px;
  background: unset;
  border: none;
  background-image: url('~@/assets/images/close-icon.svg');
  background-repeat: no-repeat;
  background-size: contain;
  cursor: pointer;
}

@media screen and (max-width: 640px) {
  .popup {
    width: 90%;
  }

  .popup__container {
    width: 100%;
    display: flex;
  }

  .popup__content {
    padding: 20px;
  }

  .popup__close-button {
    right: 20px;
    top: 20px;
    width: 20px;
    height: 20px;
    filter: invert(100%);
  }
}
</style>
