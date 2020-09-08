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
  top: 50vh;
  left: 50%;
  transform: translate(-50%, -50%);
}

.popup__container {
  position: relative;
  width: 430px;
  min-height: 330px;
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

@media screen and (max-width: 640px) {
  .popup {
    width: 90%;
  }

  .popup__container {
    padding: 25px;
    width: 100%;
    display: flex;
  }

  .popup__close-button {
    right: 20px;
    top: 20px;
    border: 1px solid red;
  }
}
</style>
