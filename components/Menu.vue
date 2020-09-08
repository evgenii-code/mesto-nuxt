<template>
  <nav class="menu">
    <ul class="menu__items">
      <li class="menu__item">
        <Button class="menu__button" @btn-click="togglePopup('signUp')"
          >Sign Up</Button
        >
      </li>
      <li class="menu__item">
        <Button class="menu__button" @btn-click="togglePopup('signIn')"
          >Sign In</Button
        >
      </li>
    </ul>
  </nav>
</template>

<script>
import Button from '@/components/ui/Button';

export default {};
</script>

<style scoped>
.menu {
  max-width: 130px;
  width: 100%;
}

.menu__items {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
}

.menu__item {
  margin: 0;
  padding: 0;
}

.menu__button {
  color: #ffffff;
  border: 1px solid #ffffff;
}
</style>
