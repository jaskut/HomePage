<template>
  <div>
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import Chart from 'chart.js/auto';

const props = withDefaults(
  defineProps<{
    options?: any,
    data: {
      labels: any,
      datasets: any
    }
  }>(),
  {
    options: () => ({responsive: true})
  },
)

const chartCanvas = ref();
var chartInstance: Chart;

onMounted(() => {
  const ctx = chartCanvas.value.getContext('2d')
  chartInstance = new Chart(ctx, {
    type: 'line',
    data: props.data,
    options: props.options,
  });
  chartInstance.update();
});

watch(() => props.data, (_newData, _oldData) => {
  if (chartInstance) {
    chartInstance.data = props.data;
    chartInstance.legend?.legendItems?.forEach((l, i) => {
      if (l.hidden) chartInstance.data.datasets[i].hidden = true;
    })
    chartInstance.update('none');
  }
}, { deep: true });

watch(() => props.options, () => {
  if (chartInstance) {
    chartInstance.options = props.options;
    chartInstance.update();
  }
});
</script>

<style scoped>
canvas {
  max-width: 100%;
  height: auto;
}
</style>