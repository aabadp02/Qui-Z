<script setup lang="ts">
import Button from "primevue/button";
import Divider from "primevue/divider";
import InputNumber from "primevue/inputnumber";
import Dropdown from "primevue/dropdown";

import MultiSelect from "primevue/multiselect";

import { ref, reactive } from "vue";
import { inject } from "vue";
import { useGameConfiguration } from "@/stores/useGameConfiguration";
import { storeToRefs } from "pinia";

const dialogRef: any = inject("dialogRef");

const totalNumberQuestions = ref(0);

const questionCategory = ref([]);
const questionCategoriesTypes = ref([
  { name: "Cualquier Categoría", code: "" },
  { name: "Cultura general", code: "9" },
  { name: "Entretenimiento: Libros", code: "10" },
  { name: "Entretenimiento: Películas", code: "11" },
  { name: "Entretenimiento: Música", code: "12" },
  { name: "Entretenimiento: Teatros y Musicales", code: "13" },
]);

const questionDifficulty = ref("");
const questionDifficultiesTypes = ref([
  { name: "Cualquier dificultad", code: "", number: 0 },
  { name: "Fácil", code: "easy", number: 1 },
  { name: "Normal", code: "medium", number: 2 },
  { name: "Difícil", code: "hard", number: 3 },
]);

const questionType = ref("");
const questionTypes = ref([
  { name: "Cualquier tipo", code: "" },
  { name: "Respuesta múltiple", code: "multiple" },
  { name: "Verdadero o falso", code: "boolean" },
]);

const closeDialog = (e: any) => {
  dialogRef.value.close(e);
};

const storeGameConfiguration = useGameConfiguration();
const { saveConfiguration } = storeGameConfiguration;

const saveConfigurationAndClose = () => {
  saveConfiguration(
    totalNumberQuestions,
    questionCategory,
    questionDifficulty,
    questionType
  );
  closeDialog({ buttonType: "guardar" });
};
</script>

<template>
  <form action="">
    <div class="flex flex-col items-center">
      <section id="NumeroPreguntas">
        <h1 class="mb-2">¿Cuántas preguntas quieres responder?</h1>
        <InputNumber
          v-model="totalNumberQuestions"
          inputId="minmax-buttons"
          mode="decimal"
          showButtons
          :min="1"
          :max="20"
          suffix=" Preguntas"
          class="w-full md:w-14rem"
        />
      </section>
      <Divider />
      <section id="CategoriasPreguntas">
        <h1 class="mb-2">Categorías</h1>
        <Dropdown
          id="ms-categorias"
          v-model="questionCategory"
          :options="questionCategoriesTypes"
          optionLabel="name"
          display="chip"
          placeholder="Escoja una o varias categorías"
          class="w-full md:w-14rem"
        />
      </section>
      <Divider />
      <section id="DificultadPreguntas">
        <h1 class="mb-2">Dificultad</h1>
        <Dropdown
          v-model="questionDifficulty"
          :options="questionDifficultiesTypes"
          optionLabel="name"
          placeholder="Escoja dificultad"
          class="w-full md:w-14rem"
        />
      </section>
      <Divider />

      <section id="TipoPreguntas">
        <h1 class="mb-2">Tipo de preguntas</h1>
        <Dropdown
          v-model="questionType"
          :options="questionTypes"
          optionLabel="name"
          placeholder="Tipo"
          class="w-full md:w-14rem"
        />
      </section>
      <Divider />
    </div>
  </form>
  <Button
    label="Cancelar"
    icon="pi pi-times"
    @click="closeDialog({ buttonType: 'cancelar' })"
    text
  />
  <Button
    label="Guardar"
    icon="pi pi-check"
    @click="saveConfigurationAndClose()"
    autofocus
  />
</template>

<style scoped></style>
