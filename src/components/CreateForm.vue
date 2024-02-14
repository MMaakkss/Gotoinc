<script setup>
import { ref } from "vue"
import { useRoute } from "vue-router"

const props = defineProps({
  requestType: {
    type: String,
    default: "order"
  },
  defaultValues: {
    type: Object,
    default: () => {},
  },
})

const emit = defineEmits(["submitForm"])

const route = useRoute()

const isFormValid = ref(false)
const form = ref(null)
const formValues = ref({
  city_from: "",
  city_to: "",
  parcel_type: "",
  date: "",
  description: "",
  ...props.defaultValues,
})

const selectOption = ["gadgets", "drinks", "clothes", "medicines", "other"]

const requiredRule = (value) => !!value || "This field is required"

const submitForm = () => {
  if (!isFormValid.value) return

  const { city_from, city_to, parcel_type, date, description, id, userId } = formValues.value

  const requestType = props.requestType
  const formattedDate = date ? new Date(date).getTime() : new Date().getTime()

  const formData = {
    id,
    city_from,
    city_to,
    date: formattedDate,
    userId: userId || route.params.id,
    requestType,
    ...(requestType === "order" && { parcel_type, description })
  }

  resetForm()

  emit("submitForm", formData)
}

const resetForm = () => {
  if (form.value) form.value.reset()
}
</script>

<template>
  <div class="form ma-auto">
    <v-form
      v-model="isFormValid"
      ref="form"
      class="d-flex flex-column ga-5"
      fast-fail
      @submit.prevent="submitForm"
    >
      <v-text-field
        v-model="formValues.city_from"
        label="City from"
        :rules="[requiredRule]"
      />

      <v-text-field
        v-model="formValues.city_to"
        label="City to"
        :rules="[requiredRule]"
      />

      <v-select
        v-model="formValues.parcel_type"
        v-if="requestType === 'order'"
        :items="selectOption"
        label="Type of parcel"
      />

      <v-text-field
        v-model="formValues.date"
        label="Date of dispatch"
        type="date"
      />

      <v-text-field
        v-model="formValues.description"
        v-if="requestType === 'order'"
        label="Description"
      />

      <v-btn type="submit">
        Submit
      </v-btn>
    </v-form>
  </div>
</template>

<style lang="scss" scoped>
.form {
  width: 100%;
  max-width: 450px;
}
</style>