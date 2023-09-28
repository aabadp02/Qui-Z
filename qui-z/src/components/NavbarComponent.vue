<script setup lang="ts">
import { ref } from "vue";

const aciertosGlobales = ref(0);
const fallosGlobales = ref(0);
</script>

<template>
  <nav id="navBar" class="bg-slate-700">
    <div
      class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl py-4 drop-shadow-md"
    >
      <!--Al hacer click en el logo nos devuelve a home -->
      <router-link to="/"
        ><div class="flex flex-row content-end items-end space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-trophy h-10"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M8 21l8 0"></path>
            <path d="M12 17l0 4"></path>
            <path d="M7 4l10 0"></path>
            <path d="M17 4v8a5 5 0 0 1 -10 0v-8"></path>
            <path d="M5 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
            <path d="M19 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
          </svg>

          <h1 id="nombre" class="text-3xl font-bold">Qui-Z</h1>
        </div></router-link
      >

      <div
        id="puntuacionGlobal"
        class="flex flex-row text-3xl font-bold space-x-4"
      >
        <h1 class="text-green-500">Aciertos: {{ aciertosGlobales }}</h1>
        <span class="text-slate-600">|</span>
        <h1 class="text-red-500">Fallos: {{ fallosGlobales }}</h1>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
