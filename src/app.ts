import { inject, type InjectionKey } from "vue";
import PocketBase from "pocketbase";

export const _PocketBaseAppInjectionKey: InjectionKey<PocketBase> =
  Symbol("PocketBaseApp");

export function usePb() {
  const pb = inject(_PocketBaseAppInjectionKey);
  if (!pb) {
    throw new Error("pb instance not found");
  }
  return pb;
}
