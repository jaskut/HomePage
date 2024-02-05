<template>
  <v-app>
    <v-main>
      <v-container fluid class="fill-height">
        <v-layout class="align-center justify-center">
          <v-col xs="12" sm="8" md="5" lg="4" xl="3">
            <v-card class="elevation-12 ma-sm-8">
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
                        :error-messages="errorMessage"
                        name="password"
                        label="Password"
                        type="password"
                        placeholder="password"
                        required
                      ></v-text-field>
                      <v-btn 
                        type="submit" 
                        :disabled="loading"
                        :loading="loading"
                        class="mt-4" 
                        color="primary" 
                        value="log in">
                        Login
                      </v-btn>
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

  const loading = ref()
  const errorMessage = ref('')

  function login() {
    loading.value = true
    const { onDone, onError } = authStore.login(username.value, password.value)
    onDone(() => router.push({ name: 'home' }))
    onError(error => {
      loading.value = false
      errorMessage.value = error.message
    })
  }

  if (authStore.isAuthenticated) {
    router.push({ name: 'home' })
  }
</script>