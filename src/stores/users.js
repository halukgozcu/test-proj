// stores/user.js
import { defineStore } from 'pinia'
import axios from 'axios'
import {ref} from "vue";

export const useUserStore = defineStore('user',() =>{
  const users  = ref([]);
  const loading = ref(false);

  const fetchUsers = async () =>{
      console.log("fetch invoke oldu")
      loading.value = true
      try {
          const response = await axios.get('https://jsonplaceholder.typicode.com/users')
          users.value = response.data
      } catch (error) {
          console.error(error)
      } finally {
          loading.value = false
      }
  }

  return {users,loading,fetchUsers}
})