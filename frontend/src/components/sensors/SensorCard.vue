<template>
  <device-card
    max-width="344"
    :title="name"
    subtitle="Sensor"
    prepend-icon="mdi-access-point"
  >
    <v-card-text>
      {{ location }}
      <v-icon
        v-for="factor in factors"
        :icon="icons[factor]"
        size="40"
      />
    </v-card-text>
  </device-card>
</template>

<script lang="ts" setup>
const props = defineProps<{
  sensorId: number,
  name: string,
  location?: string,
  factors: Array<string>,
}>()

const icons: { [key: string]: string } = {
  temperature: "mdi-thermometer",
  humidity: "mdi-water",
  pressure: "mdi-gauge",
}
</script>