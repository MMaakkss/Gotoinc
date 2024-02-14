<script setup>
import { useRoute } from "vue-router"

const route = useRoute()
</script>

<template>
  <div v-if="route.name === 'home'">
    To use this application enter the route manually
  </div>
  <router-view v-else/>
</template>

<style scoped></style>
