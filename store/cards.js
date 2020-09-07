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
    const config = {
      headers: {
        authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjQ1MjBjOGRlZjNiZjBjODBhMmMxY2UiLCJpYXQiOjE1OTkxNDQ4ODQsImV4cCI6MTU5OTc0OTY4NH0.dgvblRNHxO2xfQqSLD4X7SKAdMPYcavJmqFQUDZg608',
      },
    };

    return this.$axios
      .$get(`http://api.mesto-app.ga/cards`, config)
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
