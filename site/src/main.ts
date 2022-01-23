import { createApp } from "vue";
import App from "./App.vue";
import "./assets/css/index.css";

const app = createApp(App);

// Vue Fullpage
// @ts-ignore: Missing type declarations.
import VueFullPage from "vue-fullpage.js";
app.use(VueFullPage);

// Mount the app
app.mount("#app");
