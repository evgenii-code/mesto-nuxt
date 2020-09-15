<template>
  <section class="profile">
    <div
      class="profile__avatar"
      @click.prevent="defineContent({ key: 'editAvatar' })"
    >
      <img
        class="profile__img"
        v-if="user.avatar"
        :src="user.avatar"
        alt="User avatar"
      />

      <img
        class="profile__img"
        v-else
        src="@/assets/images/avatar.svg"
        alt="User avatar"
      />

      <div class="profile__img-overlay"></div>
    </div>

    <div class="profile__user">
      <h1 class="profile__name">{{ user.name || 'Гость' }}</h1>
      <h2 class="profile__about" v-if="user.about">{{ user.about }}</h2>
      <Button
        class="profile__button profile__button_type_edit"
        v-if="user.name"
        @btn-click="defineContent({ key: 'editProfile' })"
        >Редактировать профиль</Button
      >
    </div>

    <Button
      class="profile__button profile__button_type_add"
      v-if="user.name"
      @btn-click="defineContent({ key: 'addCard' })"
    ></Button>
  </section>
</template>

<script>
import Container from '@/components/Container';
import Button from '@/components/ui/Button';

export default {
  components: {
    Container,
    Button,
  },

  async fetch() {
    await this.$store.dispatch('profile/fetchUser');
  },
};
</script>

<style scoped>
.profile {
  padding-top: 70px;
  padding-bottom: 50px;
  display: flex;
  justify-content: space-between;
}

.profile__avatar {
  width: 100%;
  max-width: 150px;
  max-height: 150px;
  position: relative;
}

.profile__avatar:after {
  content: '';
  display: block;
  padding-bottom: 100%;
}

.profile__img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

.profile__img-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.5);
  transition: 0.5s;
  display: flex;
  border-radius: 50%;
  cursor: pointer;
}

.profile__img-overlay:hover {
  opacity: 1;
}

.profile__img-overlay:before {
  content: 'Edit';
  color: #ffffff;
  font-size: 21px;
  line-height: 25px;
  margin: auto;
}

.profile__user {
  font-style: normal;
  color: #ffffff;
  max-width: 360px;
  margin-left: 36px;
  margin-right: auto;
}

.profile__name {
  font-weight: 900;
  font-size: 54px;
  line-height: 56px;
}

.profile__about {
  font-weight: normal;
  font-size: 21px;
  line-height: 25px;
  margin-top: 20px;
}

.profile__button {
  color: #ffffff;
}

.profile__button_type_edit {
  font-size: 12px;
  line-height: 15px;
  margin-top: 20px;
  border: 1px solid #ffffff;
}

.profile__button_type_add {
  max-width: 150px;
  width: 100%;
  height: 50px;
}

.profile__button_type_add:before,
.profile__button_type_add:after {
  content: '';
  background-color: #ffffff;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 22px;
  height: 2px;
  transform: translate(-50%, -50%);
}

.profile__button_type_add:after {
  transform: translate(-50%, -50%) rotate(90deg);
}

@media screen and (max-width: 640px) {
  .profile {
    flex-direction: column;
    align-items: center;
  }

  .profile__user {
    margin: 20px auto;
    align-items: center;
    display: flex;
    flex-direction: column;
  }

  .profile__name {
    text-align: center;
    font-size: 50px;
  }
}
</style>
