import type { AuthModel } from "pocketbase";
import { ref } from "vue";
import { _PocketBaseAppInjectionKey } from "../app";
import { usePb } from "../app";

const user = ref<AuthModel>();
const loading = ref(true);

export function useCurrentUser() {
  const pb = usePb();

  async function login(emailOrUser: string, password: string) {
    if (!pb) {
      throw new Error("pb instance not found");
    }
    loading.value = true;
    try {
      await pb.collection("users").authWithPassword(emailOrUser, password);
    } catch (error) {
      loading.value = false;
      throw error;
    }
  }

  function logout() {
    if (!pb) {
      throw new Error("pb instance not found");
    }
    loading.value = true;
    return pb.authStore.clear();
  }

  pb?.authStore.onChange((_, model) => {
    user.value = model;
    loading.value = false;
  }, true);

  return { login, logout, loading, user };
}
