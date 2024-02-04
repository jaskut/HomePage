<template>
  <device-card
    max-width="344"
    :title="name"
    subtitle="Fan"
    prepend-icon="mdi-fan"
  >
    <template v-slot:append v-if="result">
      <v-icon icon="mdi-circle" :color="result.fanstate.state ? 'success':'error'"/>
    </template>
    <v-card-text>
      <v-switch
        v-if="result"
        v-model="override"
        inset
        hide-details
        :label="override ? 'manual' : 'auto'"
        @update:model-value="manual"
      />
      <v-switch
        v-if="result"
        v-model="state"
        inset
        hide-details
        :disabled="!override"
        :label="`State: ${state ? 'on' : 'off'}`"
        @update:model-value="control"
      />
    </v-card-text>
  </device-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { FANSTATE } from '@/apollo/queries'
import { useQuery } from '@vue/apollo-composable'

const props = defineProps<{
  deviceId: number,
  name: string,
  location?: string,
}>()

const state = ref();
const override = ref();

function control(event:any) {
  fetch(import.meta.env.VITE_DEVICE_CONTROL_URL + (state.value ? "on" : "off"), {
    method: 'GET',
    headers: {
      'authorization': `JWT ${localStorage.getItem('token')}`,
    }
  }).then(() => refetch())
}

function manual(event:any) {
  if (!override.value) {
    fetch(import.meta.env.VITE_DEVICE_CONTROL_URL + "reset", {
      method: 'GET',
      headers: { 'authorization': `JWT ${localStorage.getItem('token')}` }
    }).then(() => refetch())
  } else {
    control(null)
  }
}

const { result, loading, error, onResult, refetch } = useQuery(FANSTATE)

onResult(queryResult => {
  state.value = queryResult.data?.fanstate.state > 0;
  override.value = queryResult.data?.fanstate.override > 0;
})
</script>