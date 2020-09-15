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

  deleteCard({ dispatch }, { cardId }) {
    const { apiURL } = this.$config;

    return this.$axios
      .$delete(`${apiURL}/cards/${cardId}`, {
        withCredentials: true,
      })
      .then((response) => {
        dispatch('cards/fetchCards', null, { root: true });
      })
      .catch((error) => console.log(error));
  },

  likeCard({ commit, dispatch }, { cardId, method }) {
    const { apiURL } = this.$config;

    return this.$axios(`${apiURL}/cards/${cardId}/likes`, {
      method,
      withCredentials: true,
    })
      .then((response) => {
        console.log(response);
        dispatch('cards/fetchCards', null, { root: true });
      })
      .catch((error) => {
        let message = '';

        if (error.response) {
          message = error.response.data.message;
        } else if (error.request) {
          message = error.request;
        } else {
          message = error.message;
        }

        if (!getters['popup/getPopupState'])
          dispatch('popup/togglePopup', null, { root: true });
        dispatch(
          'popup/updateCurrentPopupContent',
          { key: 'errMessage' },
          { root: true }
        );
        commit('popup/setErrMessage', { message }, { root: true });
        console.dir(error);
      });
  },
};

export const getters = {
  getCards(state) {
    return state.cards;
  },
};
