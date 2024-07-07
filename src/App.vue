<template>
  <nav>'
    <router-link class="test" to="/product/1234?name=test test">
      Product
    </router-link>
    <br/>
    <button @click="goto('Customer')">customer</button>
  </nav>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <router-view />
</template>

<script setup>
import HelloWorld from './components/HelloWorld.vue'
import {useRouter} from "vue-router";

const router = useRouter();
const xyz = "Keke";

const goto = (routePath) => {
  router.push({name: routePath});
}
</script>

<style scoped>
.test{
  background-color: yellow;
  color: #1a1a1a;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
