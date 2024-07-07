<template>
<div style="color: red; background-color: white"> Customer Componentim</div>
  <br/>
  <div>Dışarıdan gelen mesaj : {{mesaj}}</div>
  <br />
  <input v-bind:value="mesaj">

  <Product :kamil-name="mesaj" :id="1234" />
</template>

<script setup>

import Product from "./Product.vue";

defineProps({
  mesaj: {
    type: String,
    default: '',
    required: false
  }
})

</script>

<style scoped>

</style>