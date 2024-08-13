import { createApp } from "vue";
import App from "./App.vue";
import PocketBase from "pocketbase";
import { VuePocket } from "vuepocket";
import "@picocss/pico";

const pb = new PocketBase("http://127.0.0.1:8090");

const app = createApp(App);

app.use(VuePocket, { pb });

app.mount("#app");
