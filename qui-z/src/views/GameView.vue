<script setup lang="ts">
import Knob from "primevue/knob";
import { ref } from "vue";

const value = ref(0);
</script>

<template>
  <h1>VISTA DE JUEGO</h1>
  <Knob v-model="value" valueTemplate="{value}%" />
</template>

<style></style>
