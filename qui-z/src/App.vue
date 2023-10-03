<script setup lang="ts">
import { RouterView } from "vue-router";
import NavbarComponent from "@/components/NavbarComponent.vue";
import DynamicDialog from "primevue/dynamicdialog";
import Toast from "primevue/toast";
</script>

<template>
  <NavbarComponent />

  <DynamicDialog />
  <Toast />
  <RouterView />
</template>

<style scoped></style>
