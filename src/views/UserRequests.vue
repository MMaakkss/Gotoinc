<script setup>
import UserRequestItem from "../components/UserRequestItem.vue"
import CreateForm from "../components/CreateForm.vue"

import { useMainStore } from "../store/index.js"
import { useRoute } from "vue-router"
import { computed, ref } from "vue"

const { getParcelByUserId, editItem } = useMainStore()

const route = useRoute()

const dialog = ref(false)
const editData = ref({})

const parcelsList = computed(() => getParcelByUserId(route.params.id))

const editRequest = (data) => {
  if (!data.id) return

  dialog.value = true

  editData.value = {
    ...data,
    date: new Date(data.date).toISOString().split("T")[0],
  }
}

const submitEdit = (value) => {
  editItem(value, value.id)

  dialog.value = false
}
</script>

<template>
  <div>
    <UserRequestItem
      v-for="item in parcelsList"
      :key="item.id"
      :data="item"
      @edit-request="editRequest"
    />

    <VDialog
      v-model="dialog"
      width="280px"
    >
      <VCard class="pa-5 w-100">
        <CreateForm
          :request-type="editData.requestType"
          :default-values="editData"
          @submit-form="submitEdit"
        />
        <VBtn
          color="primary"
          class="mt-5"
          @click="dialog = false"
        >
          Close Dialog
        </VBtn>
      </VCard>
    </VDialog>
  </div>
</template>

<style scoped></style>