class FormContent {
  constructor(title, method, path, inputs) {
    this.title = title;
    this.method = method;
    this.path = path;
    this.inputs = inputs;
  }
}

const fields = {
  email: {
    name: 'email',
    type: 'email',
    placeholder: 'Email',
    minlength: 2,
  },
  password: {
    name: 'password',
    type: 'password',
    placeholder: 'Пароль',
    minlength: 8,
  },
  name: {
    name: 'name',
    type: 'text',
    placeholder: 'Имя',
    minlength: 2,
    maxlength: 30,
  },
  about: {
    name: 'about',
    type: 'text',
    placeholder: 'О себе',
    minlength: 2,
    maxlength: 30,
  },
  avatar: {
    name: 'avatar',
    type: 'url',
    placeholder: 'Ссылка на картинку',
    minlength: 2,
  },
  link: {
    name: 'link',
    type: 'url',
    placeholder: 'Ссылка на картинку',
    minlength: 2,
  },
};

export const state = () => ({
  formContent: {
    addCard: new FormContent('Добавить карточку', 'post', '/cards', [
      fields.name,
      fields.link,
    ]),
    signUp: new FormContent('Регистрация', 'post', '/signup', [
      fields.email,
      fields.password,
      fields.name,
      fields.about,
      fields.avatar,
    ]),
    signIn: new FormContent('Вход', 'post', '/signin', [
      fields.email,
      fields.password,
    ]),
    editProfile: new FormContent(
      'Редактировать профиль',
      'patch',
      '/users/me',
      [fields.name, fields.about]
    ),
    editAvatar: new FormContent(
      'Изменить аватар',
      'patch',
      '/users/me/avatar',
      [fields.avatar]
    ),
  },

  currentContent: {},
});

export const mutations = {
  setState(state, { name, value }) {
    return (state[name] = value);
  },
};

export const actions = {
  updateCurrentContent({ state, commit }, { key }) {
    return commit('setState', {
      name: 'currentContent',
      value: state.formContent[key],
    });
  },

  setImageSrc({ commit }, { payload }) {
    return commit('setState', {
      name: 'currentContent',
      value: payload,
    });
  },

  sendData({ state, commit, dispatch }, { form, data }) {
    const { apiURL } = this.$config;
    const { path, method } = form;

    return this.$axios[method](`${apiURL}${path}`, data, {
      withCredentials: true,
    })
      .then((response) => {
        commit('popup/togglePopup', null, { root: true });
        if (path.includes('/users') || path.includes('/signin'))
          dispatch('profile/fetchUser', null, { root: true });
        if (path.includes('/cards'))
          dispatch('cards/fetchCards', null, { root: true });
        return response;
      })
      .catch((error) => console.log(error));
  },
};

export const getters = {
  getCurrentContent(state) {
    return state.currentContent;
  },
};
