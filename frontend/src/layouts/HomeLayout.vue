<template>
  <v-app>
  <v-layout class="rounded rounded-md">
    <v-app-bar title="HomePage"></v-app-bar>

    <v-navigation-drawer>
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
  const items = [
    {text: 'Home', to: '/home'},
    {text: 'Sensors', to: '/sensors'},
    {text: 'Actors', to: '/actors'},
  ]
</script>