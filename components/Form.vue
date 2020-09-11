<template>
  <ValidationObserver slim v-slot="{ invalid }">
    <form class="form" ref="form" @submit.prevent="onSubmit" novalidate>
      <h2 class="form__title">{{ currentContent.title }}</h2>

      <Input
        v-for="(input, index) of currentContent.inputs"
        :key="index"
        class="form__input"
        :type="input.type"
        :name="input.name"
        :placeholder="input.placeholder"
        :minlength="input.minlength"
        :maxlength="input.maxlength"
      />

      <Button
        :class="['form__button', { form__button_disabled: invalid }]"
        :disabled="invalid"
        :type="'submit'"
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

  props: {
    currentContent: {
      type: Object,
    },
  },

  methods: {
    onSubmit(e) {
      const inputs = [...e.target.elements].filter(
        (item) => item.tagName === 'INPUT'
      );

      const data = inputs.reduce((result, item) => {
        result[item.name] = item.value;
        return result;
      }, {});

      this.$store.dispatch('form/sendData', {
        data,
        path: this.currentContent.path,
      });
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
