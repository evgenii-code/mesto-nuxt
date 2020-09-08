export const state = () => ({
  formContent: {
    addCard: [
      {
        id: 1,
        type: 'text',
        placeholder: 'Название',
        minlength: 2,
        maxlength: 30,
      },
      {
        id: 2,
        type: 'url',
        placeholder: 'Ссылка на картинку',
        minlength: 2,
      },
    ],

    signUp: [
      {
        id: 1,
        type: 'email',
        placeholder: 'Email',
        minlength: 2,
      },
      {
        id: 2,
        type: 'password',
        placeholder: 'Пароль',
        minlength: 8,
      },
      {
        id: 3,
        type: 'text',
        placeholder: 'Имя',
        minlength: 2,
        maxlength: 30,
      },
      {
        id: 4,
        type: 'text',
        placeholder: 'О себе',
        minlength: 2,
        maxlength: 30,
      },
      {
        id: 5,
        type: 'url',
        placeholder: 'Ссылка на аватар',
        minlength: 2,
      },
    ],

    signIn: [
      {
        id: 1,
        type: 'email',
        placeholder: 'Email',
        minlength: 2,
      },
      {
        id: 2,
        type: 'password',
        placeholder: 'Пароль',
        minlength: 8,
      },
    ],

    editProfile: [
      {
        id: 1,
        type: 'text',
        placeholder: 'Имя',
        minlength: 2,
        maxlength: 30,
      },
      {
        id: 2,
        type: 'text',
        placeholder: 'О себе',
        minlength: 2,
        maxlength: 30,
      },
    ],

    editAvatar: [
      {
        id: 1,
        type: 'url',
        placeholder: 'Ссылка на аватар',
        minlength: 2,
      },
    ],
  },
  currentContent: [],
});

export const mutations = {
  setState(state, { name, value }) {
    return (state[name] = value);
  },
};

export const actions = {
  updateCurrentContent({ state, commit }, payload) {
    return commit('setState', {
      name: 'currentContent',
      value: state.formContent[payload],
    });
  },
};

export const getters = {
  getCurrentContent(state) {
    return state.currentContent;
  },
};
