

<template>
<p> Merhaba {{kamilName}}</p>
  <p>Senin ID Değerin : {{id}}</p>
  <p>Senin Name Değerin : {{name}}</p>
</template>

<style scoped>

</style>

<script setup>

import {useRouter, useRoute} from "vue-router";

defineProps({
  kamilName: {
    type: String,
    default: '',
    required: false
  },
  id:{
    type:String,
    default:'1234',
    required:false
  }
})

const route = useRoute();
console.log(route.query.name);

const name = route.query.name;
</script>