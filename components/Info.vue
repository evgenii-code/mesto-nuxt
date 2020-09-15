<template>
  <div class="info">
    <Title class="info__title" :title="currentContent.title" />

    <Paragraph class="info_text" :text="currentContent.message" />

    <Button class="info__button" :type="'button'" @btn-click="togglePopup"
      >Закрыть</Button
    >
  </div>
</template>

<script>
import Title from '@/components/ui/Title';
import Paragraph from '@/components/ui/Paragraph';

export default {
  components: {
    Title,
    Paragraph,
  },

  props: {
    currentContent: {
      type: Object,
    },
  },
};
</script>

<style scoped>
.info {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.info_text {
  font-size: 13px;
}

.info__button {
  width: 100%;
  height: 50px;
  background-color: #000000;
  color: #ffffff;
}
</style>
