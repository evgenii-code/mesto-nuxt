<template>
  <div class="popup">
    <div class="popup__container">
      <button class="popup__close-button" @click.prevent="togglePopup"></button>
      <Form />
    </div>
  </div>
</template>

<script>
import Form from '@/components/Form';

export default {
  components: {
    Form,
  },

  methods: {
    togglePopup() {
      return this.$store.commit('popup/togglePopup');
    },
  },
};
</script>

<style scoped>
.popup {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.popup__container {
  position: relative;
  width: 430px;
  height: 330px;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 36px;
  display: flex;
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
</style>
