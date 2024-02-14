import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router/index.js";

import { createPinia } from "pinia";

const pinia = createPinia();

import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
});

createApp(App)
  .use(router)
  .use(vuetify)
  .use(pinia)
  .mount("#app");
