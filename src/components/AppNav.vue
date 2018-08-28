<template>
  <nav class="app-nav">
    <ul class="app-nav__list">
      <li class="app-nav__list-item">
        <router-link 
        :to="{name: 'Home'}" 
        class="app-nav__list-link"
        exact-active-class="app-nav__list-link--active"
        >Namai</router-link>
      </li>
      <li class="app-nav__list-item">
        <router-link 
        :to="{name: 'About'}"
        class="app-nav__list-link"
        exact-active-class="app-nav__list-link--active"
        >About</router-link>
      </li>
      <li class="app-nav__list-item">
        <router-link 
        :to="{name: 'Contacts'}"
        class="app-nav__list-link"
        exact-active-class="app-nav__list-link--active"
        >Kontaktai</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'AppNav'
}
</script>

<style lang="scss" scoped>
.app-nav {
  display: flex;
  justify-content: flex-end;
  padding-top: 42px;
  padding-right: 121px;

  &__list {
    width: 290px;
    display: flex;
    list-style: none;
    justify-content: space-between;

    &-item {
      color: #fff;
      font-size: 16px;
      font-weight: 400;
      text-transform: uppercase;
      letter-spacing: 0.92;
    }

    &-link {
      color: #fff;
      font-size: 16px;
      text-decoration: none;

      &--active {
        color: #37e9b8;
        text-decoration: underline;
      }
    }
  }
}
</style>
