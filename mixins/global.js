export default {
  methods: {
    togglePopup() {
      return this.$store.commit('popup/togglePopup');
    },

    defineContent({ key, event }) {
      if (key) this.$store.dispatch('form/updateCurrentContent', { key });
      if (event)
        this.$store.dispatch('form/setImageSrc', { payload: event.target.src });

      this.togglePopup();
    },
  },

  computed: {
    user() {
      return this.$store.getters['profile/getUser'];
    },
  },
};
