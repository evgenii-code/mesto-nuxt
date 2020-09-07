<template>
  <div class="popup">
    <div class="popup__container">
      <h2 class="popup__title">{{ title }}</h2>

      <button class="popup__close-button" @click.prevent="togglePopup"></button>

      <input type="text" class="popup__input" :placeholder="placeholders[0]" />

      <input type="text" class="popup__input" :placeholder="placeholders[1]" />

      <button class="popup__button popup__button_disabled">Сохранить</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
      default: 'Заголовок',
    },
    placeholders: {
      type: Array,
      required: true,
      default: ['Название', 'Ссыка на картинку'],
    },
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
  flex-direction: column;
  justify-content: space-between;
}

.popup__title {
  font-weight: 900;
  font-size: 24px;
  line-height: 29px;

  color: #000000;
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
}

.popup__input {
  border: none;
  border-bottom: 1px solid #e5e5e5;
  font-size: 14px;
  line-height: 17px;
}

.popup__button {
  width: 100%;
  height: 50px;
  background-color: #000000;
  color: #ffffff;
  border-radius: 2px;
}

.popup__button_disabled {
  background-color: unset;
  border: 1px solid #e5e5e5;
  color: #e5e5e5;
}
</style>
