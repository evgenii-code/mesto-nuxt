export const state = () => ({
  user: {},
});

export const mutations = {
  setState(state, { name, value }) {
    return (state[name] = value);
  },
};

export const actions = {
  fetchUser({ state, commit }) {
    const { apiURL } = this.$config;

    return this.$axios
      .get(`${apiURL}/users`, { withCredentials: true })
      .then((response) =>
        commit('setState', {
          name: 'user',
          value: response.data.data,
        })
      )
      .catch((error) => console.log(error));
  },
};

export const getters = {
  getUser(state) {
    return state.user;
  },
};
