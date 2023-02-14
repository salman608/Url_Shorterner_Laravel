<template>
  <nav class="bg-teal-600 p-4 text-white text-2xl flex justify-between">
    <router-link to="/">Home</router-link>
    <div v-if="loggedIn" class="flex">
      <p class="mx-3 text-orange-400">Hi, {{ user.name }}</p>
      <a href="" @click.prevent="logout">Logout</a>
    </div>
    <div v-else>
      <router-link to="/login">LogIn</router-link>
      <router-link to="/register">Register</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      loggedIn: window.loggedIn,
      user: window.user,
    };
  },
  methods: {
    logout() {
      axios.post("/logout").then((res) => (window.location = "/login"));
    },
  },
};
</script>

<style>
</style>
