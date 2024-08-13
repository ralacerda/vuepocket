import type { App } from "vue";
import PocketBase from "pocketbase";
import { _PocketBaseAppInjectionKey } from "./app";
import { trackAuthState } from "./auth";

export type VuePocketOptions = {
  pb: PocketBase;
};

export function VuePocket(app: App, options: VuePocketOptions) {
  app.provide(_PocketBaseAppInjectionKey, options.pb);

  trackAuthState(options.pb);
}

export { useAuth, useAuthUser } from "./auth";
export { usePb } from "./app";
