export default {
  methods: {
    togglePopup() {
      return this.$store.commit('popup/togglePopup');
    },

    checkPayload({ payload, event }) {
      if (payload) this.$store.dispatch('form/updateCurrentContent', payload);
      if (event)
        this.$store.dispatch('form/updateCurrentContent', event.target.src);

      this.togglePopup();
    },
  },

  computed: {
    user() {
      return this.$store.getters['profile/getUser'];
    },
  },
};
