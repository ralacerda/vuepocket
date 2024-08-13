<script setup lang="ts">
import { useAuth, useAuthUser } from "vuepocket";

const { loginWithPassword, logout } = useAuth();
const { user, loading } = useAuthUser();

function login() {
  console.log("Login");
  loginWithPassword("test@test.com", "6SgaMsY-aLHka54");
}
</script>

<template>
  <template v-if="loading">
    <div>Loading...</div>
  </template>
  <template v-else-if="user">
    <div>
      <pre><code>User: {{ user }}</code></pre>
    </div>
    <button @click="logout">Logout</button>
  </template>
  <template v-else>
    <button @click="login">Login</button>
  </template>
</template>
