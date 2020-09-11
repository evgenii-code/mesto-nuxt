export const state = () => ({
  cards: [],
});

export const mutations = {
  setState(state, { name, value }) {
    return (state[name] = value);
  },
};

export const actions = {
  fetchCards({ state, commit }) {
    const { apiURL } = this.$config;

    return this.$axios
      .$get(`${apiURL}/cards`)
      .then((response) => {
        return commit('setState', {
          name: 'cards',
          value: response.data,
        });
      })
      .catch((error) => console.log(error));
  },
};

export const getters = {
  getCards(state) {
    return state.cards;
  },
};
