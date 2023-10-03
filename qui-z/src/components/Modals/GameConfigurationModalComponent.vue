<script setup lang="ts">
import Dialog from "primevue/dialog";
import Button from "primevue/button";
import { ref, reactive } from "vue";

import { inject } from "vue";

const dialogRef = inject("dialogRef") ;

const closeDialog = (e: any) => {

  dialogRef.value.close(e);
};
</script>

<template>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>

  <Button
    label="No"
    icon="pi pi-times"
    @click="closeDialog({ buttonType: 'No' })"
    text
  />
  <Button
    label="Yes"
    icon="pi pi-check"
    @click="closeDialog({ buttonType: 'No' })"
    autofocus
  />
</template>

<style scoped></style>
