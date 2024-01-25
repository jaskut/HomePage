<template>
  <v-app>
  <v-layout>
    <v-app-bar>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"/>
      <v-app-bar-title>HomePage</v-app-bar-title>
      <v-btn @click="logout">Log out</v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer">
      <v-list nav>
        <v-list-item 
          v-for="(item, i) in items" 
          :key="i" :value="item" 
          :title="item.text" 
          :to="item.to"
        />
      </v-list>
    </v-navigation-drawer>

    <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
      <router-view/>
    </v-main>
  </v-layout>
  </v-app>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import router from '@/router';
  import { useAuthStore } from '@/store/auth';

  const authStore = useAuthStore()

  const items = [
    {text: 'Home', to: '/home'},
    {text: 'Sensors', to: '/sensors'},
    {text: 'Actors', to: '/actors'},
  ]

  const drawer = ref()

  function logout() {
    authStore.logout()
    router.push({ name: 'login' })
  }
</script>