<template>
  <va-modal v-model="isOpen" hide-default-actions>
    <template #header>
      <h2 class="display-3 mb-4">Ajouter un nouveau document</h2>
    </template>

    <va-input class="mb-3" label="Titre" v-model="titleForm"></va-input>

    <va-input class="mb-3" label="URL" v-model="urlForm"></va-input>

    <va-input class="mb-3" label="Image URL" v-model="imageForm"></va-input>

    <p class="ml-2 mb-3">
      Note :
      <va-rating v-model="ratingForm" />
    </p>

    <va-select class="mb-3" label="Langue" :options="langOptions" v-model="langForm" allowCreate />

    <va-select
      class="mb-3"
      label="Type de média"
      :options="mediaOptions"
      v-model="mediaForm"
      allowCreate
    />

    <va-input class="mb-3" v-model="descriptionForm" type="textarea" label="Description" rows="6" />

    <template #footer>
      <va-button
        type="button"
        :disabled="isDisabled"
        @click="saveRessourceAction"
        icon="save"
        color="success"
        class="mr-4"
      >Ajouter</va-button>
      <va-button @click="isOpen = false" icon="close">Fermer</va-button>
    </template>
  </va-modal>
</template>

<script lang="ts">
import { ref, defineComponent, computed } from "vue";
import { IRessource } from "@/interfaces/IRessource";
import eventBus from "@/plugins/eventBus"
import RessourceService from "@/services/ressourceService";
import store from "@/store";


export default defineComponent({

  setup() {
    const isOpen = ref(false)

    eventBus.on("open-ressource-form-dialog", () => {
      isOpen.value = true
    })

    interface ISelectOption {
      text: string;
      value: string;
    }

    const langOptions: Array<ISelectOption> = [
      { text: "Français", value: "fr" },
      { text: "Anglais", value: "en" },
    ];


    const mediaOptions: Array<ISelectOption> = [
      { text: "Article", value: "post" },
      { text: "Livre", value: "book" },
      { text: "Vidéo", value: "video" },
    ];

    const titleForm = ref<string>("");
    const urlForm = ref<string>("");
    const ratingForm = ref<number>(0);
    const langForm = ref<ISelectOption>(langOptions[0]);
    const mediaForm = ref<ISelectOption>(mediaOptions[0]);
    const imageForm = ref<string>("");
    const descriptionForm = ref<string>("");



    const isDisabled = computed(() => {
      if (langForm.value && titleForm.value && urlForm.value && mediaForm.value) return false;
      return true
    })

    const saveRessourceAction = async () => {
      const currentDate = new Date();

      const ressource: IRessource = {
        date: currentDate.toLocaleDateString("EN-en") + " " + currentDate.toLocaleTimeString(),
        title: titleForm.value,
        lang: langForm.value.value,
        media: mediaForm.value.value,
        url: urlForm.value,
        rating: ratingForm.value,
        isTop: false,
        isValid: false,
        image: imageForm.value,
        description: descriptionForm.value
      };


      const ressourceService = new RessourceService();

      const ressourceSaved = await ressourceService.saveRessource(ressource)

      if (ressourceSaved) {
        titleForm.value = "",
          langForm.value.value = "fr",
          mediaForm.value.value = "post",
          urlForm.value = "",
          ratingForm.value = 0,
          imageForm.value = "",
          descriptionForm.value = ''

        isOpen.value = false
        store.dispatch("ressourceModule/addRessourceAction", ressourceSaved)
      } else {
        alert("Une erreur s'est produite durant l'ajout du document")
      }

      isOpen.value = false;
    }

    return {
      isOpen,
      isDisabled,
      langOptions,
      mediaOptions,
      titleForm,
      langForm,
      mediaForm,
      urlForm,
      ratingForm,
      imageForm,
      descriptionForm,
      saveRessourceAction
    }

  }
})
</script>

<style scoped>
</style>