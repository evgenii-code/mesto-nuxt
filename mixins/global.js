export default {
  methods: {
    togglePopup({ payload, event }) {
      if (payload) this.$store.dispatch('form/updateCurrentContent', payload);
      if (event)
        this.$store.dispatch('form/updateCurrentContent', event.target.src);

      return this.$store.commit('popup/togglePopup');
    },
  },
};
