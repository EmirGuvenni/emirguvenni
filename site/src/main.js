import { createApp } from "vue";
import VueFullPage from "vue-fullpage.js";
import App from "./App.vue";
import "./index.css";

const app = createApp(App);

app.use(VueFullPage);

app.mount("#app");
