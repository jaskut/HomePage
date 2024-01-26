<template>
  <v-app>
  <v-main>
  <v-container>
  <v-row>
    <v-col cols="12" sm="6" md="4" xl="3">
      <fan-card
      :device-id="1"
      name="Keller"
      location="Basement"
    />
    </v-col>
  </v-row>
  </v-container>
  </v-main>
  </v-app>
</template>

<script lang="ts" setup>
  import FanCard from '@/components/actors/FanCard.vue';
</script>