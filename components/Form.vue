<template>
  <ValidationObserver slim v-slot="{ invalid }">
    <form class="form" @submit.prevent="">
      <h2 class="form__title">{{ title }}</h2>

      <Input
        v-for="input of getCurrentContent"
        :key="input.id"
        class="form__input"
        :type="input.type"
        :placeholder="input.placeholder"
        :minlength="input.minlength"
        :maxlength="input.maxlength"
      />

      <Button
        :class="['form__button', { form__button_disabled: invalid }]"
        :disabled="invalid"
        :type="'button'"
        >Сохранить</Button
      >
    </form>
  </ValidationObserver>
</template>

<script>
import { ValidationObserver } from 'vee-validate';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

export default {
  components: {
    ValidationObserver,
    Input,
    Button,
  },

  computed: {
    getCurrentContent() {
      return this.$store.getters['form/getCurrentContent'];
    },
  },

  props: {
    title: {
      type: String,
      default: 'Название',
    },
  },
};
</script>

<style scoped>
.form {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.form__title {
  font-weight: 900;
  font-size: 24px;
  line-height: 29px;

  color: #000000;
}

.form__input {
  margin-bottom: 20px;
}

.form__button {
  width: 100%;
  height: 50px;
  background-color: #000000;
  color: #ffffff;
}

.form__button_disabled {
  background-color: unset;
  border: 1px solid #e5e5e5;
  color: #e5e5e5;
}
</style>
