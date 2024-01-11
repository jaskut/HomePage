<template>
  <v-main>
    <v-container fluid fill-height>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Login form</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <form ref="form" @submit.prevent="login()">
                  <v-text-field
                    v-model="username"
                    name="username"
                    label="Username"
                    type="text"
                    placeholder="username"
                    required
                  ></v-text-field>
                  
                  <v-text-field
                    v-model="password"
                    name="password"
                    label="Password"
                    type="password"
                    placeholder="password"
                    required
                  ></v-text-field>
                  <v-btn type="submit" class="mt-4" color="primary" value="log in">Login</v-btn>
            </form>
          </v-card-text>
        </v-card>
    </v-container>
  </v-main>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import { useAuthStore } from '@/store/auth'

  const username = ref('')
  const password = ref('')

  const authStore = useAuthStore()

  function login() {
    authStore.login(username.value, password.value)
  }
</script>