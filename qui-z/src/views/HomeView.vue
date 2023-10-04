<script setup lang="ts">
import ConfiguracionIcon from "@/components/Icons/ConfiguracionIcon.vue";
import { useToast } from "primevue/usetoast";
import { useDialog } from "primevue/usedialog";
import { ref, defineAsyncComponent } from "vue";

const GameConfigurationModalComponent = defineAsyncComponent(
  () => import("@/components/Modals/GameConfigurationModalComponent.vue")
);

const toast = useToast();

const dialog = useDialog();
const showConfiguracion = () => {
  const dialogRef = dialog.open(GameConfigurationModalComponent, {
    props: {
      header: "Configuración del juego",
      style: {
        width: "50vw",
      },
      breakpoints: {
        "960px": "75vw",
        "640px": "90vw",
      },
      modal: true,
      dismissableMask: true,
    },
    onClose: (options: any) => {
      const data = options.data;
      if (data) {
        const buttonType = data.buttonType;
        if (buttonType == "cancelar") {
          toast.add({ severity: "warn", detail: "Cancelado", life: 2000 });
        }
        if (buttonType == "guardar") {
          toast.add({ severity: "success", detail: "Guardado", life: 2000 });
        }
      }
    },
  });
};
</script>

<template>
  <section class="bg-white dark:bg-gray-900">
    <div
      class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"
    >
      <div class="mr-auto place-self-center lg:col-span-7">
        <h1
          class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"
        >
          El concurso de illojuan mal
        </h1>
        <p
          class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
        >
          Mejora tus habilidades, cultura y conocimientos con estas divertidas
          preguntas. Los niños también pueden jugar.
        </p>
        <a
          href="#"
          @click="showConfiguracion"
          class="inline-flex items-center justify-center px-5 py-3 mr-3 pl-2 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
        >
          Configura las preguntas
          <ConfiguracionIcon class="ml-2" />
        </a>

        <router-link
          to="/game"
          class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >¡Jugar!</router-link
        >
      </div>
      <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
        <img
          src="https://cdn-icons-png.flaticon.com/512/6531/6531095.png"
          alt="mockup"
        />
      </div>
    </div>
  </section>
</template>

<style></style>
