import type { App } from "vue";
import PocketBase from "pocketbase";
import { _PocketBaseAppInjectionKey } from "./app";

export type VuePocketOptions = {
  pb: PocketBase;
};

export function VuePocket(app: App, options: VuePocketOptions) {
  app.provide(_PocketBaseAppInjectionKey, options.pb);
}

export { useCurrentUser } from "./auth";
