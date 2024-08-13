import PocketBase, { type AuthModel } from "pocketbase";
import { ref } from "vue";
import { _PocketBaseAppInjectionKey } from "../app";
import { usePb } from "../app";

const user = ref<AuthModel>();
const loading = ref(true);

export function useAuth(authCollectionName: string = "user") {
  const pb = usePb();

  async function loginWithPassword(emailOrUser: string, password: string) {
    loading.value = true;
    try {
      await pb
        .collection(authCollectionName)
        .authWithPassword(emailOrUser, password);
    } catch (error) {
      loading.value = false;
      throw error;
    }
  }

  async function loginWithOAuth(provider: string) {
    loading.value = true;
    try {
      await pb.collection(authCollectionName).authWithOAuth2({ provider });
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

  return { loginWithPassword, logout, loginWithOAuth };
}

export function useAuthUser() {
  return { user, loading };
}

export function trackAuthState(pb: PocketBase) {
  pb.authStore.onChange((_, model) => {
    user.value = model;
    loading.value = false;
  });
}
