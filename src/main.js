import { createApp } from "vue";
import "./index.css";
import App from "./App.vue";
import router from "./router/index";
import { createPinia } from "pinia";

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

const pinia = createPinia();

createApp(App).use(router).use(pinia).mount("#app");
