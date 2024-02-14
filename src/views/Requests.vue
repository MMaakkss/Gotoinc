<script setup>
import RequestItem from "../components/RequestItem.vue"

import { useMainStore } from "../store/index.js"
import { storeToRefs } from "pinia"

const { changeSort } = useMainStore()
const { sort, getRequestList } = storeToRefs(useMainStore())
</script>

<template>
  <div>
    <div>
      <v-select
        label="Sort"
        :items="['acs', 'des']"
        :model-value="sort"
        @update:model-value="changeSort"
      />
    </div>
    <RequestItem
      v-for="item in getRequestList"
      :key="item.id"
      :data="item"
    />
  </div>
</template>

<style scoped></style>