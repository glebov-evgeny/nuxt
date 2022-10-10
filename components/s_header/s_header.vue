<template>
  <header class="s-header" ref="header" id="header">
    <nav>
      <NuxtLink to="/">Главная</NuxtLink>
      <NuxtLink to="/about">О компании</NuxtLink>
      <NuxtLink to="/users">Пользователи</NuxtLink>
    </nav>
  </header>
</template>

<script>
import './s_header.scss';

export default {
  name: 's-header',

  data() {
    return {};
  },

  computed: {},

  watch: {},

  methods: {},

  beforeDestroy() {},

  mounted() {},
};
</script>
