import { defineStore } from "pinia"
import { computed, ref } from "vue"

export const useMainStore = defineStore("main", () => {

  const requestListStorage = localStorage.getItem("requestList")

  const requestList = ref(JSON.parse(requestListStorage) || [])
  const sort = ref("des")

  const getRequestList = computed(() => {
    return requestList.value.sort((a, b) => sort.value === "des" ? b.date - a.date : a.date - b.date);
  });

  const createParcel = (value) => {
    requestList.value.push({
      ...value,
      id: Math.random().toString(16).slice(2),
    })

    saveToLocalStorage()
  }

  const getParcelByUserId = (userId) => {
    if (!userId) return []

    return requestList.value.filter(el => el.userId === userId)
  }

  const getMatchedParcels = (parcel) => {
    return requestList.value.filter(request =>
      parcel.userId !== request.userId &&
      request.date <= parcel.date &&
      (
        request.city_from === parcel.city_from ||
        request.city_to === parcel.city_to
      )
    )
  }

  const changeSort = (val) => {
    sort.value = val
  }

  const deleteItem = (id) => {
    const elIndex = requestList.value.findIndex(el => el.id === id)
    requestList.value.splice(elIndex, 1)

    saveToLocalStorage()
  }

  const editItem = (newValue, id) => {
    requestList.value = requestList.value.map(el => {
      if (el.id === id) {
        el = newValue
      }

      return el
    })

    saveToLocalStorage()
  }

  const saveToLocalStorage = () => {
    localStorage.setItem("requestList", JSON.stringify(requestList.value))
  }

  return {
    createParcel,
    getParcelByUserId,
    changeSort,
    deleteItem,
    editItem,
    getMatchedParcels,
    getRequestList,
    sort,
    requestList,
  }
})
