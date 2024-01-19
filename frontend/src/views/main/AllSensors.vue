<template>
  <v-app>
  <v-main>
  <div v-if="loading">Loading...</div>
  <div v-else-if="result" class="d-flex align-content-start flex-wrap">
    <sensor-card
      v-for="sensor in result.allSensors"
      :sensor-id="Number(sensor.sensorId)"
      :name="sensor.name"
      :factors="sensor.factors.split(',')"
    />
  </div>
  </v-main>
  </v-app>
</template>

<script lang="ts" setup>
  import { ALL_SENSORS } from '@/apollo/queries'
  import { useQuery } from '@vue/apollo-composable'
  import SensorCard from '@/components/sensors/SensorCard.vue';

  const { result, loading, error } = useQuery(ALL_SENSORS)
  const x = loading.value
</script>