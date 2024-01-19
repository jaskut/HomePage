<template>
  <device-card
    max-width="344"
    :title="name"
    subtitle="Fan"
    prepend-icon="mdi-fan"
  >
    <v-card-text>
      {{ location }}
      <v-switch
        v-model="state"
        inset
        hide-details
        @update:model-value="toggle"
      />
    </v-card-text>
  </device-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const props = defineProps<{
  deviceId: number,
  name: string,
  location?: string,
}>()

const state = ref(true);

function toggle(event:any) {
  //state.value ? fetch(import.meta.env.VITE_DEVICE_CONTROL_URL + "on") : fetch(import.meta.env.VITE_DEVICE_CONTROL_URL + "off")
}
</script>