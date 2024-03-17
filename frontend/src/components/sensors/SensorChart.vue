<template>
  <Line
    :options="options"
    :data="data"
  />
</template>

<script lang="ts" setup>
  import { watch } from 'vue'
  import Line from '@/components/charts/Line.vue'
  import 'chartjs-adapter-date-fns'
  
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
        elements:{
          point:{
            borderWidth: 0,
            radius: 10,
            backgroundColor: 'rgba(0,0,0,0)'
          }
        },
        scales: {
          x: {
            type: 'time',
            time: {
              displayFormats: {
                hour: 'HH:mm',
                minute: 'HH:mm'
              },
            }
          },
          y: {
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