<template>
  <v-app>
  <v-main>
  <div class="d-flex align-content-start flex-wrap">
    <fan-card
      :device-id="1"
      name="Keller"
      location="Basement"
    />
  </div>
  </v-main>
  </v-app>
</template>

<script lang="ts" setup>
  import FanCard from '@/components/actors/FanCard.vue';
</script>