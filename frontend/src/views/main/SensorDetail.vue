<template>
  <div v-if="loading">Loading...</div>
  <v-container v-else-if="sensorDetail">
    <sensor-card
      :sensor-id="Number(sensorDetail.sensor.sensorId)"
      :name="sensorDetail.sensor.name"
      :factors="sensorDetail.sensor.factors"
      :data="sensorDetail.sensor.lastData"
    >
      <v-btn-toggle v-model="chosenTimeOption" mandatory variant="outlined">
        <v-btn
          v-for="timeOption in timeOptions"
          :text="timeOption.text"
          :value="timeOption.value"
        ></v-btn>
      </v-btn-toggle>
      <v-progress-circular v-if="loadingData" indeterminate class="mx-4"/>
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
const chosenTimeOption = ref(120)
const timeOptions = ref([
  {text: "2 hours", value: 120},
  {text: "6 hours", value: 6*60},
  {text: "1 day", value: 24*60},
  {text: "1 week", value: 7*24*60},
  {text: "1 month", value: 31*24*60},
])

const { result: sensorDetail, loading, error } = useQuery(SENSOR, {id: Number.parseInt(props.id)})
const { onResult, loading:loadingData } = useQuery(DATA_BY_SENSOR, () => ({id: Number.parseInt(props.id), n_minutes: chosenTimeOption.value}))

onResult((result) => {
  if(result.data) {
    data.value.labels = result.data.dataBySensor.map((obj: any) => obj.time)
    data.value.datasets = []
    if (result.data.dataBySensor[0].temperature) {
      data.value.datasets.push({
        label: 'temperature',
        data: result.data.dataBySensor.map((obj: any) => obj.temperature),
        borderColor: theme.current.value.colors.primary,
        yAxisID: 'y',
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