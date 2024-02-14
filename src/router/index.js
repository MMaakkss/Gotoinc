import { createRouter, createWebHistory } from "vue-router"
import App from "../App.vue"

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: App,
    },
    {
      path: "/requests",
      name: "requests",
      component: () => import("../views/Requests.vue"),
    },
    {
      path: "/:id",
      redirect: { name: "user-requests" },
    },
    {
      path: "/:id/create",
      name: "create",
      component: () => import("../views/Create.vue"),
    },
    {
      path: "/:id/order",
      name: "create-order",
      meta: {
        requestType: 'order',
      },
      component: () => import("../views/CreateRequest.vue"),
    },
    {
      path: "/:id/deliver",
      name: "create-deliver",
      meta: {
        requestType: 'deliver',
      },
      component: () => import("../views/CreateRequest.vue"),
    },
    {
      path: "/:id/requests",
      name: "user-requests",
      component: () => import("../views/UserRequests.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: { name: "home" },
    }
  ],
})
