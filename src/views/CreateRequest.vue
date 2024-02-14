<script setup>
import CreateForm from "../components/CreateForm.vue"

import { useRoute } from "vue-router"
import { useMainStore } from "../store"

const route = useRoute()
const { createParcel } = useMainStore()

const requestType = route.meta.requestType

const submitForm = (formValues) => {
  createParcel(formValues)
}
</script>

<template>
  <div>
    <CreateForm
      :request-type="requestType"
      @submit-form="submitForm"
    />
  </div>
</template>

<style scoped></style>