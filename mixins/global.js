export default {
  methods: {
    togglePopup(payload) {
      this.$store.dispatch('form/updateCurrentContent', payload);

      return this.$store.commit('popup/togglePopup');
    },
  },
};
