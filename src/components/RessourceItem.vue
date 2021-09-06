<template>
  <va-card :color="cardColor" class="pb-3">
    <router-link :to="{ name: 'Ressource', params: { id: ressource.id } }">
      <va-image
        style="height: 220px"
        :src="ressource.image || require('@/assets/default-image.png')"
      ></va-image>
    </router-link>

    <va-card-title>{{ ressource.title }}</va-card-title>
    <va-card-content>{{ typeInFrench }} - ajouté le {{ dateInFrench }}</va-card-content>

    <div class="px-3">
      <va-button
        class="mr-3"
        color="#3ac93e"
        gradient
        @click="addToReadingListAction(ressource)"
        icon="bookmark"
        round
      ></va-button>
      <va-button
        v-if="ressource.media === 'video'"
        color="#3ac93e"
        gradient
        @click="previewVideoAction(ressource)"
        icon="play_circle_filled"
        round
      ></va-button>
    </div>
  </va-card>
</template>


<script lang="ts">
import { defineComponent, PropType, ref, toRefs } from "vue";
import eventBus from "@/plugins/eventBus";
import { IRessource } from "@/interfaces/IRessource";
import useRessource from "@/composables/useRessource";

export default defineComponent({
  props: {
    ressourceDatas: {
      type: Object as PropType<IRessource>,
      default: null,
    },
    displayBookmark: {
      type: Boolean,
      default: false,
    },
  },

  setup(props, context) {

    const { ressource, typeInFrench, dateInFrench } = useRessource();

    const { ressourceDatas } = toRefs(props);

    ressource.value = ressourceDatas.value;

    const cardColor = ref("#fff");

    const addToReadingListAction = (ressource: IRessource) => {
      context.emit("bookmark-ressource", ressource);
    };

    const previewVideoAction = (ressource: IRessource) => {
      eventBus.emit("open-ressource", ressource);
      cardColor.value = "#e0e0e0";
    };

    return {
      ressource,
      typeInFrench,
      dateInFrench,
      cardColor,
      addToReadingListAction,
      previewVideoAction
    };
  },
});
</script>

<style scoped>
</style>