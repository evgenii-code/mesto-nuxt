<template>
  <button
    class="button"
    @click.prevent="$emit('btn-click')"
    :disabled="disabled"
    :type="type"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'button',
      validator: function (value) {
        return ['submit', 'reset', 'button', 'menu'].indexOf(value) !== -1;
      },
    },
  },
};
</script>

<style scoped>
.button {
  position: relative;
  background-color: unset;
  border: 2px solid #ffffff;
  box-sizing: border-box;
  border-radius: 2px;
  cursor: pointer;
}
</style>
