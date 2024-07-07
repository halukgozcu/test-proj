
<template>
  <div>
    <button @click="userStore.fetchUsers()">Fetch Users</button>
    <p v-if="userStore.loading">Loading...</p>
    <ul v-else>
      <li v-for="user in userStore.users" :key="user.id">{{ user.name }}</li>
    </ul>
  </div>
</template>

<script setup>
import {useUserStore} from "../stores/users.js";

const userStore = useUserStore()

</script>

<style scoped>

</style>