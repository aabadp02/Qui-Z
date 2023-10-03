<script setup lang="ts">
import Knob from "primevue/knob";
import Panel from 'primevue/panel';
import { ref } from "vue";

const value = ref(0);
</script>

<template>
  <h1>VISTA DE JUEGO</h1>
  <Knob v-model="value" valueTemplate="{value}%" />
  <Panel header="Default Preset">
      <p>
        First panel component uses the global pass through preset from the
        Tailwind CSS based implementation of PrimeOne Design 2023.
      </p>
    </Panel>
</template>

<style></style>
