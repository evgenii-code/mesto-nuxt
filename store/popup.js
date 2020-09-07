export const state = () => ({
  isShown: false,
});

export const mutations = {
  setState(state, { name, value }) {
    return (state[name] = value);
  },

  togglePopup(state) {
    return (state.isShown = !state.isShown);
  },
};

export const actions = {};

export const getters = {
  getPopupState(state) {
    return state.isShown;
  },
};
