<script setup lang="ts">
import Dialog from "primevue/dialog";
import Button from "primevue/button";
import BaseModal from "./BaseModal.vue";

const props = defineProps({
  visible: Boolean,
});

const modalText = " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim\
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate \
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat\
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id\
      est laborum."

</script>

<template>
  <BaseModal :visible="visible" :modalText="modalText"></BaseModal>
  <Dialog
    v-bind="props.visible"
    :visible="visible"
    :draggable="draggable"
    :modal="true"
    :dismissableMask="true"
  >
    Test content
  </Dialog>
  <!-- <Dialog
    v-model:visible="props.visible"
    :style="{ width: '50vw' }"
    :visible="visible"
    :draggable="draggable"
    :modal="true"
    :dismissableMask="true"
  >
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
    <Button @click="visible = false">ESTO ES UN BOTÓN</Button>
  </Dialog> -->
</template>

<style scoped></style>
