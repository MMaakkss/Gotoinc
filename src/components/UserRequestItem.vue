<script setup>
import { useMainStore } from "../store/index.js"
import { computed } from "vue"

const props = defineProps({
  data: {
    type: Object,
    default: () => {},
  },
})

const emit = defineEmits(["editRequest"])

const { deleteItem, getMatchedParcels } = useMainStore()

const matches = computed(() => getMatchedParcels(props.data))

const editRequest = () => {
  emit("editRequest", props.data)
}
</script>

<template>
  <div class="item">
    <p>
      <b>Form:</b>
      {{ data.city_from }}
    </p>
    <p>
      <b>To:</b>
      {{ data.city_to }}
    </p>
    <p>
      <b>Parcel Type:</b>
      {{ data.requestType }}
    </p>
    <p>
      <b>Date:</b>
      {{ new Date(data.date).toLocaleDateString() }}
    </p>

    <h4 class="mt-3">Matches:</h4>
    <ul class="pl-4 d-flex ga-10 flex-wrap">
      <li v-for="item in matches" :key="item.id">
        <p>
          <b>Form:</b>
          {{ item.city_from }}
        </p>
        <p>
          <b>To:</b>
          {{ item.city_to }}
        </p>
        <p>
          <b>User:</b>
          {{ item.userId }}
        </p>
        <p>
          <b>Date:</b>
          {{ new Date(item.date).toLocaleDateString() }}
        </p>
      </li>
    </ul>

    <div class="mt-5 d-flex ga-5">
      <VBtn @click="editRequest">Edit</VBtn>
      <VBtn @click="deleteItem(data.id)">Delete</VBtn>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.item {
  padding: 20px;
  border: 1px solid #fff;
  border-radius: 4px;
  margin-bottom: 20px;
  text-align: left;

  &:last-child {
    margin-bottom: 0;
  }
}
</style>