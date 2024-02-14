<script setup>
const props = defineProps({
  data: {
    type: Object,
    default: () => {},
  },
})
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