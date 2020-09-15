export default {
  methods: {
    togglePopup() {
      return this.$store.dispatch('popup/togglePopup');
    },

    defineContent({ key, event }) {
      this.$store.dispatch('popup/updateCurrentPopupContent', { key });

      if (event) {
        const payload = {
          src: event.target.src,
          title: event.target.closest('.card').querySelector('.card__title')
            .textContent,
        };

        this.$store.dispatch('popup/setImageSrc', { payload });
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
