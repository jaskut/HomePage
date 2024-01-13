<template>
  <v-app>
    <v-main>
      <v-container fluid class="fill-height">
        <v-layout class="align-center justify-center">
          <v-col xs="12" sm="8" md="4">
            <v-card class="elevation-12 ma-8">
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
          </v-col>
        </v-layout>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
  import { ref, watch } from 'vue'
  import { useAuthStore } from '@/store/auth'
  import { useRouter } from 'vue-router'

  const router = useRouter()

  const username = ref('')
  const password = ref('')

  const authStore = useAuthStore()

  function login() {
    authStore.login(username.value, password.value)
    router.push({ name: 'Home' })
  }

  watch(
    () => authStore.isAuthenticated, 
    (isAuthenticated) => checkAuthentication(isAuthenticated)
  )

  function checkAuthentication(isAuthenticated: boolean) {
    if (isAuthenticated) {
      router.push({ name: 'Home' })
    }
  }

  checkAuthentication(authStore.isAuthenticated)
</script>