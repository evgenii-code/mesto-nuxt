<template>
  <ValidationProvider slim rules="required">
    <div class="input" slot-scope="{ errors }">
      <div class="input__container">
        <input
          class="input__field"
          :name="name"
          v-model.trim="data"
          :type="type === 'password' ? fieldType : type"
          :placeholder="placeholder"
          v-bind="minmax"
        />

        <button
          class="input__button"
          v-if="type === 'password'"
          @click.prevent="switchVisibility"
        >
          <fa
            class="input__icon"
            :icon="['far', 'eye']"
            v-if="fieldType === 'password'"
          />
          <fa class="input__icon" :icon="['far', 'eye-slash']" v-else />
        </button>
      </div>

      <p class="input__error">{{ errors[0] }}</p>
    </div>
  </ValidationProvider>
</template>

<script>
import { ValidationProvider } from 'vee-validate';

export default {
  components: {
    ValidationProvider,
  },

  data() {
    return {
      data: '',
      minmax: {},
      fieldType: 'password',
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

  methods: {
    switchVisibility() {
      this.fieldType = this.fieldType === 'password' ? 'text' : 'password';
    },
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
.input__container {
  position: relative;
}

.input__field {
  border: none;
  border-bottom: 1px solid #e5e5e5;
  font-size: 14px;
  line-height: 17px;
  padding: 15px 0;
  width: 100%;
}

.input__button {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(0, -50%);
  cursor: pointer;
  padding: 0;
  background: unset;
  border: none;
  font-size: 14px;
}

.input__error {
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;

  min-height: 30px;

  color: #ff0000;
}

@media screen and (max-width: 640px) {
  .input__field {
    font-size: 12px;
    line-height: 15px;
    padding: 8px 0;
  }

  .input__error {
    font-size: 10px;
    line-height: 12px;
    min-height: 24px;
  }
}
</style>
