<template>
  <div>
    <va-card>
      <va-card-title>
        <h1 class="display-3">Gestion</h1>
      </va-card-title>
      <va-card-content>
        <ul>
          <li v-for="ressource in ressources" :key="ressource.id">
            <va-button
              color="warning"
              gradient
              @click="deleteRessourceAction(ressource.id)"
              icon="remove"
              round
              class="mr-2"
            ></va-button>

            <va-button
              gradient
              @click="switchIsTopAction(ressource)"
              icon="star"
              :color="ressource.isTop ? 'success' : ''"
              round
              class="mr-4"
            ></va-button>

            <a href="ressource.url" target="blank">{{ ressource.title }}</a>
          </li>
        </ul>
      </va-card-content>
    </va-card>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";

import { IRessource } from "@/interfaces/IRessource";
import RessourceService from "@/services/ressourceService";

export default defineComponent({
  setup() {
    const store = useStore();

    const ressourceService = new RessourceService();

    const ressources = computed(() => store.getters["ressourceModule/getValidRessources"]);

    const deleteRessourceAction = async (id: string) => {
      const res = await ressourceService.deleteRessourceByID(id);
      if (res) store.dispatch("ressourceModule/deleteRessourceAction", id);
    };

    const switchIsTopAction = async (ressource: IRessource) => {
      ressource.isTop = !ressource.isTop;
      const res = await ressourceService.updateRessource(ressource);
      if (res)
        store.dispatch("ressourceModule/updateRessourceAction", ressource);
    };

    return { ressources, deleteRessourceAction, switchIsTopAction };
  },
});
</script>

<style scoped>
a {
  color: black;
}
</style>