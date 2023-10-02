<script setup lang="ts">
import { ref } from "vue";
import CopichuelaIcon from "./Icons/CopichuelaIcon.vue";

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
          <!--Esto es el SVG del icono de la copa-->
          <CopichuelaIcon/>
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
