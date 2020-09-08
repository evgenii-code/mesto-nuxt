<template>
  <input
    class="input"
    :type="type"
    :placeholder="placeholder"
    :minlength="minlength"
    :maxlength="maxlength"
  />
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: 'Введите текст',
    },
    type: {
      type: String,
      default: 'text',
      validator: function (value) {
        return ['text', 'email', 'password', 'url'].indexOf(value) !== -1;
      },
    },
    minlength: {
      type: Number,
      default: 2,
      validator: function (value) {
        return value >= 1 && value <= 255;
      },
    },
    maxlength: {
      type: Number,
      default: null,
      validator: function (value) {
        return value >= 1 && value <= 255;
      },
    },
  },
};
</script>

<style scoped>
.input {
  border: none;
  border-bottom: 1px solid #e5e5e5;
  font-size: 14px;
  line-height: 17px;
}

.input:valid {
  border-bottom: 2px solid #35aa35;
}

.input:invalid {
  border-bottom: 2px solid #aa3535;
}
</style>
