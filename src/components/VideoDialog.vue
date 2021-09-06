<template>
  <va-modal v-model="isOpen" hide-default-actions>
    <template #header>
      <h2 class="display-3 mb-4">{{ ressource.title }}</h2>
    </template>

    <iframe
      width="560"
      height="315"
      :src="embedUrl"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>

    <template #footer>
      <va-button @click="isOpen = false" icon="close">Fermer</va-button>
    </template>
  </va-modal>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import eventBus from "@/plugins/eventBus";
import { IRessource } from "@/interfaces/IRessource";

let ressource = ref({
  userID: "",
  media: "",
  title: "",
  image: "",
  url: "",
  lang: "",
  rating: 0,
  isTop: false,
  date: "",
  description: '',
  isValid: false
} as IRessource);

const isOpen = ref(false);

const embedUrl = computed(() =>
  ressource.value.url.replace(".com/watch?v=", ".com/embed/")
);

eventBus.on("open-ressource", function (ressourceSent) {
  isOpen.value = true;
  ressource.value = ressourceSent as IRessource;
});
</script>

<style scoped>
</style>