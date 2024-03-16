<template>
  <div v-if="loading">Loading...</div>
  <v-container v-else-if="result">
    <sensor-card
      :sensor-id="Number(result.sensor.sensorId)"
      :name="result.sensor.name"
      :factors="result.sensor.factors"
      :data="result.sensor.lastData"
    >Some test message</sensor-card>
  </v-container>
</template>

<script lang="ts" setup>
import { SENSOR } from '@/apollo/queries'
import { useQuery } from '@vue/apollo-composable'
import SensorCard from '@/components/sensors/SensorCard.vue';

const props = defineProps<{
  id: string
}>()

const { result, loading, error } = useQuery(SENSOR, {id: Number.parseInt(props.id)})
</script>