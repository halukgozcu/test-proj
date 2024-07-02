

<template>
<p> Merhaba {{kamilName}}</p>
</template>

<style scoped>

</style>

<script setup>
defineProps({
  kamilName: {
    type: String,
    default: '',
    required: false
  }
})
</script>