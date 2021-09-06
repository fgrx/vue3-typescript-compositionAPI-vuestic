<template>
  <div>
    <va-card v-if="bookmarks.length" class="mb-4">
      <va-card-title class="display-4">Mes bookmarks</va-card-title>

      <va-card-content>
        <ul v-for="ressource in bookmarks" :key="ressource.id">
          <li>
            <va-button
              flat
              class="mr-2"
              @click="deleteFormBookmarksAction(ressource)"
              color="danger"
              icon="delete"
            ></va-button>

            <a :href="ressource.url" target="blank" color="#000">{{ ressource.title }}</a>
          </li>
        </ul>
      </va-card-content>
    </va-card>

    <div class="row">
      <div class="flex md4 lg3 xs12 pa-3" v-for="ressource in ressources" :key="ressource.id">
        <RessourceItem
          @bookmark-ressource="bookmarkRessourceAction($event)"
          :ressourceDatas="ressource"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { useStore } from "vuex";

import { IRessource } from "@/interfaces/IRessource";

import RessourceItem from "@/components/RessourceItem.vue";

export default defineComponent({
  components: { RessourceItem },

  setup() {
    const store = useStore();
    let ressources = computed(() => store.getters["ressourceModule/getValidRessources"]);

    const bookmarks = ref([] as IRessource[]);

    const bookmarkRessourceAction = (ressource: IRessource) => {
      bookmarks.value.push(ressource);
    };

    const deleteFormBookmarksAction = (ressource: IRessource) => {
      bookmarks.value = bookmarks.value.filter(
        (bookmark) => bookmark.id !== ressource.id
      );
    };

    return {
      ressources,
      bookmarks,
      bookmarkRessourceAction,
      deleteFormBookmarksAction,
    };
  },
});
</script>

<style scoped>
.center {
  text-align: center;
}
</style>