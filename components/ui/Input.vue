<template>
  <ValidationProvider slim rules="required">
    <div class="input" slot-scope="{ errors }">
      <input
        class="input__field"
        :name="name"
        v-model.trim="data"
        :type="type"
        :placeholder="placeholder"
        v-bind="minmax"
      />
      <p class="input__error">{{ errors[0] }}</p>
    </div>
  </ValidationProvider>
</template>

<script>
import { ValidationProvider } from 'vee-validate';

export default {
  data() {
    return {
      data: '',
      minmax: {},
    };
  },

  beforeMount() {
    this.getMinMaxLength;
  },

  computed: {
    getMinMaxLength() {
      this.minlength && (this.minmax.minlength = this.minlength);
      this.maxlength && (this.minmax.maxlength = this.maxlength);
    },
  },

  components: {
    ValidationProvider,
  },

  props: {
    placeholder: {
      type: String,
      default: 'Введите текст',
      required: true,
    },

    name: {
      type: String,
      required: true,
    },

    type: {
      type: String,
      default: 'text',
      required: true,
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
.input__field {
  border: none;
  border-bottom: 1px solid #e5e5e5;
  font-size: 14px;
  line-height: 17px;
  padding: 15px 0;
  width: 100%;
}

.input__field:valid {
  border-bottom: 2px solid #35aa35;
}

.input__field:invalid {
  border-bottom: 2px solid #aa3535;
}

.input__error {
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;

  color: #ff0000;
}
</style>
