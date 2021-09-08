<template>
  <div>
    <h2 class="display-3">Validation des propositions</h2>

    <va-card>
      <va-card-content>
        <ul v-if="ressources && ressources.length">
          <li v-for="ressource in ressources" :key="ressource.id">
            <va-button
              @click="validateRessourceAction(ressource)"
              class="mr-2"
              color="success"
              icon="thumb_up"
            ></va-button>
            <va-button
              @click="deleteRessourceAction(ressource)"
              color="warning"
              icon="thumb_down"
              class="mr-3"
            ></va-button>
            {{ ressource.title }}
          </li>
        </ul>

        <va-alert
          v-if="ressources && !ressources.length"
          color="success"
          class="mb-4"
          >Il n'y a pas de ressource à valider</va-alert
        >
      </va-card-content>
    </va-card>
  </div>
</template>

<script setup lang="ts">
import { IRessource } from "@/interfaces/IRessource";
import RessourceService from "@/services/ressourceService";
import { onMounted, ref } from "@vue/runtime-core";
import { useStore } from "vuex";

const ressourceService = new RessourceService();

const store = useStore();
const user = store.state.authModule.user;

let ressources = ref([] as IRessource[]);

onMounted(
  async () =>
    (ressources.value = await ressourceService.getUnvalidatedRessources(
      user.token
    ))
);

const deleteRessourceAction = (ressourceToDelete: IRessource) => {
  ressources.value = ressources.value.filter(
    (ressource) => ressource.id != ressourceToDelete.id
  );
  if (ressourceToDelete.id)
    ressourceService.deleteRessourceByID(ressourceToDelete.id, user.token);
};

const validateRessourceAction = (ressourceToValidate: IRessource) => {
  ressourceToValidate.isValid = true;
  if (ressourceToValidate.id)
    ressourceService.updateRessource(ressourceToValidate, user.token);
  store.dispatch("ressourceModule/addRessourceAction", ressourceToValidate);
  ressources.value = ressources.value.filter(
    (ressource) => ressource.id != ressourceToValidate.id
  );
};
</script>

<style scoped>
</style>