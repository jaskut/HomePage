<template>
  <Line
    :options="options"
    :data="data"
  />
</template>

<script lang="ts" setup>
  import { Line } from 'vue-chartjs'
  import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, TimeScale } from 'chart.js'
  import 'chartjs-adapter-date-fns'
  
  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, TimeScale)
  
  const props = withDefaults(
    defineProps<{
      options?: any,
      data: {
        labels: any,
        datasets: any
      }
    }>(),
    {
      options: () => ({
        responsive: true, 
        lineTension: 0.3,
        scales: {
          x: {
            type: 'time',
            time: {
              unit: 'hour',
              displayFormats: {
                hour: 'HH:mm'
              },
            }
          },
          temp: {
            type: 'linear',
            display: true,
            side: 'left'
          },
          hum: {
            type: 'linear',
            display: true,
            position: 'right',
            grid: {
              drawOnChartArea: false,
            },
          },
          pres: {
            type: 'linear',
            display: false,
            position: 'right'
          }
        }
      })
    },
  )

</script>