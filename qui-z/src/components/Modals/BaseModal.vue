<script setup lang="ts">

import { ref } from "vue";
import Dialog from "primevue/dialog";

const props = defineProps({
  visible: Boolean,
  modalText : String
});

const hiddenStyle = ref("");

if (props.visible) {
  hiddenStyle.value = "hidden";
} else {
  hiddenStyle.value = "";
}
</script>

<template>
  <div v-bind:class="hiddenStyle">
    <div @click="visible=false" class="w-screen h-screen">
        <Dialog
        :style="{ width: '50vw' }"
        >
        <p>{{ modalText }}</p>
        </Dialog>
    </div>
  </div>
</template>

<style scoped></style>
