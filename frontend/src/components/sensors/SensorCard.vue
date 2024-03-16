<template>
  <device-card
    :title="name"
    subtitle="Sensor"
    prepend-icon="mdi-access-point"
  >
    <template v-slot:append>
      <v-icon
        v-for="factor in factors"
        :icon="icons[factor]"
        size="40"
      />
    </template>
    <v-card-text>
      <div>{{ location }}</div>
      <div class="d-flex text-h4 text-medium-emphasis pb-2">
        <b v-if="data?.temperature">{{ data?.temperature }}° </b>
        <v-divider v-if="data?.humidity" vertical class="mx-3 border-opacity-50"/>
        <b v-if="data?.humidity"> {{ data?.humidity }}% </b>
      </div>
      
      <div class="pt-2">
        <slot/>
      </div>
    </v-card-text>
  </device-card>
</template>

<script lang="ts" setup>

interface Data {
  temperature: number;
  humidity: number;
  pressure: number;
}

const props = defineProps<{
  sensorId: number,
  name: string,
  location?: string,
  data?: Data,
  factors: Array<string>,
}>()

const icons: { [key: string]: string } = {
  temperature: "mdi-thermometer",
  humidity: "mdi-water",
  pressure: "mdi-gauge",
}
</script>