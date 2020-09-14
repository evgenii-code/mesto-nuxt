export default {
  methods: {
    togglePopup() {
      return this.$store.commit('popup/togglePopup');
    },

    defineContent({ key, event }) {
      this.$store.dispatch('form/updateCurrentContent', { key });

      if (event) {
        const payload = {
          src: event.target.src,
          title: event.target.closest('.card').querySelector('.card__title')
            .textContent,
        };

        this.$store.dispatch('form/setImageSrc', { payload });
      }

      this.togglePopup();
    },
  },

  computed: {
    user() {
      return this.$store.getters['profile/getUser'];
    },
  },
};
