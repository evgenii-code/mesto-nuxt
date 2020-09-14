<template>
  <div class="card">
    <div
      class="card__picture"
      @click="defineContent({ key: 'showImage', event: $event })"
    >
      <img :src="url" alt="Picture of nice place" class="card__image" />
    </div>

    <div class="card__description">
      <div class="card__title">{{ card.name }}</div>

      <div class="card__like-container">
        <button
          :class="['card__like', { card__like_inactive: !checkLike }]"
          @click.prevent="likeCard(card._id)"
        ></button>
        <p class="card__like-counter">{{ card.likes.length }}</p>
      </div>
    </div>

    <button
      v-if="showDeleteButton"
      class="card__delete"
      @click.prevent="deleteCard(card._id)"
    ></button>
  </div>
</template>

<script>
import Like from '@/assets/images/like-active.svg';
export default {
  props: {
    card: {
      type: Object,
    },
    title: {
      type: String,
      default: 'Название',
      require: true,
    },
    likes: {
      type: Number,
      default: 0,
      require: true,
    },
    url: {
      type: String,
    },
  },

  computed: {
    checkLike() {
      return this.isLiked();
    },

    showDeleteButton() {
      return this.card.owner._id === this.user._id;
    },
  },

  methods: {
    isLiked() {
      return this.card.likes.some((like) => like._id === this.user._id);
    },

    deleteCard(cardId) {
      this.$store.dispatch('cards/deleteCard', { cardId });
    },

    likeCard(cardId) {
      let method = 'delete';

      if (!this.isLiked()) {
        method = 'put';
      }

      this.$store.dispatch('cards/likeCard', { cardId, method });
    },
  },
};
</script>

<style scoped>
.card {
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
}

.card__delete {
  position: absolute;
  top: 18px;
  right: 15px;
  width: 18px;
  height: 19px;
  background-color: unset;
  border: none;
  background-image: url('~@/assets/images/trash-icon.svg');
  background-size: contain;
  background-repeat: no-repeat;

  cursor: pointer;
}

.card__picture {
  border-radius: 10px;
  width: 100%;
  position: relative;
  padding-bottom: 100%;
  cursor: pointer;
}

.card__image {
  border-radius: 10px 10px 0 0;
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card__description {
  background: #ffffff;
  padding: 25px;
  border-radius: 0 0 10px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card__title {
  font-weight: 900;
  font-size: 24px;
  line-height: 29px;
}

.card__like-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 10px;
}

.card__like {
  width: 20px;
  height: 20px;
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
  background-color: unset;
  border: none;
  background-image: url('~@/assets/images/like-active.svg');
}

/* .card__like_type_active {
  background-image: url('~@/assets/images/like-active.svg');
} */

.card__like_inactive {
  background-image: url('~@/assets/images/like-inactive.svg');
}
</style>
