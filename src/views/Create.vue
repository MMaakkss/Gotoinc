<script setup></script>

<template>
  <div class="d-flex pt-16 justify-center ga-7">
    <router-link
      class="link"
      :to="{ name: 'create-order' }"
    >
      Create order
    </router-link>
    <router-link
      class="link"
      :to="{ name: 'create-deliver' }"
    >
      Create deliver
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.link {
  font-size: 24px;
  padding: 10px 16px;
  background-color: #ffffff;
  border-radius: 4px;
  transition: 0.2s;

  &:hover {
    opacity: 0.8;
  }
}
</style>