class FormContent {
  constructor(title, method, inputs) {
    this.title = title;
    this.method = method;
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
    addCard: new FormContent('Добавить карточку', 'POST', [
      fields.name,
      fields.link,
    ]),
    signUp: new FormContent('Регистрация', 'POST', [
      fields.email,
      fields.password,
      fields.name,
      fields.about,
      fields.avatar,
    ]),
    signIn: new FormContent('Вход', 'POST', [fields.email, fields.password]),
    editProfile: new FormContent('Редактировать профиль', 'PATCH', [
      fields.name,
      fields.about,
    ]),
    editAvatar: new FormContent('Изменить аватар', 'PATCH', [fields.avatar]),
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
