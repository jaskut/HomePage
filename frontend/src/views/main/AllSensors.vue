<template>
  <div v-if="loading">Loading...</div>
  <v-container v-else-if="result">
    <v-row>
      <v-col cols="12" sm="6" md="4" xl="3" v-for="sensor in result.allSensors">
        <sensor-card
          :sensor-id="Number(sensor.sensorId)"
          :name="sensor.name"
          :factors="sensor.factors"
          :data="sensor.lastData"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
  import { ALL_SENSORS } from '@/apollo/queries'
  import { useQuery } from '@vue/apollo-composable'
  import SensorCard from '@/components/sensors/SensorCard.vue';

  const { result, loading, error } = useQuery(ALL_SENSORS)
</script>