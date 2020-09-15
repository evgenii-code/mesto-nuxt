class PopupContent {
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
  isShown: false,

  popupContent: {
    addCard: new PopupContent('Добавить фото', 'post', '/cards', [
      fields.name,
      fields.link,
    ]),
    signUp: new PopupContent('Регистрация', 'post', '/signup', [
      fields.email,
      fields.password,
      fields.name,
      fields.about,
      fields.avatar,
    ]),
    signIn: new PopupContent('Вход', 'post', '/signin', [
      fields.email,
      fields.password,
    ]),
    editProfile: new PopupContent(
      'Редактировать профиль',
      'patch',
      '/users/me',
      [fields.name, fields.about]
    ),
    editAvatar: new PopupContent(
      'Изменить аватар',
      'patch',
      '/users/me/avatar',
      [fields.avatar]
    ),
    showImage: {
      src: '',
      title: '',
    },
    errMessage: {
      title: 'Ошибка',
      message: '',
    },
  },

  currentPopupContent: {},
});

export const mutations = {
  setState(state, { name, value }) {
    return (state[name] = value);
  },

  togglePopup(state) {
    return (state.isShown = !state.isShown);
  },

  setImage(state, { payload }) {
    state.currentPopupContent.src = payload.src;
    state.currentPopupContent.title = payload.title;
    return state.currentPopupContent;
  },

  setErrMessage(state, { message }) {
    return (state.currentPopupContent.message = message);
  },
};

export const actions = {
  togglePopup({ commit }) {
    document.body.classList.toggle('body_scroll-disabled');

    return commit('togglePopup');
  },

  updateCurrentPopupContent({ state, commit }, { key }) {
    return commit('setState', {
      name: 'currentPopupContent',
      value: state.popupContent[key],
    });
  },

  setImageSrc({ commit }, { payload }) {
    return commit('setImage', { payload });
  },

  sendData({ state, commit, dispatch, getters }, { form, data }) {
    const { apiURL } = this.$config;
    const { path, method } = form;

    return this.$axios[method](`${apiURL}${path}`, data, {
      withCredentials: true,
    })
      .then((response) => {
        dispatch('popup/togglePopup', null, { root: true });

        if (path.includes('/users') || path.includes('/signin'))
          dispatch('profile/fetchUser', null, { root: true });

        if (path.includes('/cards'))
          dispatch('cards/fetchCards', null, { root: true });

        return response;
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
  getPopupState(state) {
    return state.isShown;
  },

  getCurrentPopupContent(state) {
    return state.currentPopupContent;
  },
};
