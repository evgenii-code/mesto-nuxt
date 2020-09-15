<template>
  <ValidationObserver slim v-slot="{ invalid }">
    <form class="form" ref="form" @submit.prevent="onSubmit" novalidate>
      <Title class="form__title" :title="currentContent.title"></Title>

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
import Title from '@/components/ui/Title';

export default {
  components: {
    ValidationObserver,
    Input,
    Button,
    Title,
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

      this.$store.dispatch('popup/sendData', {
        form: this.currentContent,
        data,
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
  color: #000000;
}

.form__input:first-of-type {
  margin-top: 20px;
}

.form__input:last-of-type {
  margin-bottom: 10px;
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
