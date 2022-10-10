<template>
  <main class="main">
    <s-users-info />
  </main>
</template>

<script>
// import getUsers from '@/api/getUsers'
export default {
  data() {
    return {};
  },
  // async asyncData({ $axios }) {
  //   const usersData = await $axios.$get('https://jsonplaceholder.typicode.com/users');
  //   console.log(usersData)
  //   return { usersData };
  // },
  async mounted() {
    // getUsers()
  },
};
</script>
