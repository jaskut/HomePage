<template>
  <div v-if="loading">Loading...</div>
  <v-container v-else-if="sensorDetail">
    <sensor-card
      :sensor-id="Number(sensorDetail.sensor.sensorId)"
      :name="sensorDetail.sensor.name"
      :factors="sensorDetail.sensor.factors"
      :data="sensorDetail.sensor.lastData"
    >
      <sensor-chart v-if="data.datasets.length > 0" :data="data"/>
    </sensor-card>
  </v-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { SENSOR, DATA_BY_SENSOR } from '@/apollo/queries'
import { useQuery } from '@vue/apollo-composable'
import SensorCard from '@/components/sensors/SensorCard.vue'
import SensorChart from '@/components/sensors/SensorChart.vue'

import { useTheme } from 'vuetify'

const props = defineProps<{
  id: string
}>()

const theme = useTheme()

const data = ref({labels: [] as string[], datasets: [] as any[]})

const { result: sensorDetail, loading, error } = useQuery(SENSOR, {id: Number.parseInt(props.id)})
const { onResult } = useQuery(DATA_BY_SENSOR, {id: Number.parseInt(props.id), n_minutes: 120})

onResult((result) => {
  if(result.data) {
    data.value.labels = result.data.dataBySensor.map((obj: any) => obj.time)
    if (result.data.dataBySensor[0].temperature) {
      data.value.datasets.push({
        label: 'temperature',
        data: result.data.dataBySensor.map((obj: any) => obj.temperature),
        borderColor: theme.current.value.colors.primary,
        yAxisID: 'temp',
      })
    }
    if (result.data.dataBySensor[0].humidity) {
      data.value.datasets.push({
        label: 'humidity',
        data: result.data.dataBySensor.map((obj: any) => obj.humidity),
        borderColor: theme.current.value.colors.secondary,
        yAxisID: 'hum',
      })
    }
    if (result.data.dataBySensor[0].pressure) {
      data.value.datasets.push({
        label: 'pressure',
        data: result.data.dataBySensor.map((obj: any) => obj.pressure),
        borderColor: theme.current.value.colors.gray,
        yAxisID: 'pres',
      })
    }
  }
})
</script>