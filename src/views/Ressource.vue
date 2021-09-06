<template>
    <div>
        <va-alert
            v-if="!ressource"
            icon="info"
            color="warning"
            class="mb-4"
        >Damned ! Document non trouvé.</va-alert>

        <div class="mb-5" v-if="ressource">
            <div class="row">
                <div class="flex md4 xs12 mb-4">
                    <va-image :src="ressource.image || require('@/assets/default-image.png')"></va-image>
                </div>
                <div class="flex md8 xs12 pl-4">
                    <h1 class="display-1">{{ ressource.title }}</h1>
                    <p class="my-2">
                        {{ typeInFrench }} - ajouté le {{ dateInFrench }}
                        <br />

                        <va-rating v-model="ressource.rating"></va-rating>
                    </p>

                    <va-button
                        class="my-2"
                        :href="ressource.url"
                        target="blank"
                        icon="link"
                    >Voir la ressource</va-button>
                </div>
            </div>

            <ContentDisplayer>
                <template v-slot:title>{{ ressource.title }}</template>
                {{ ressource.description }}
            </ContentDisplayer>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { useRoute } from 'vue-router';
import RessourceService from "@/services/ressourceService"

import useRessource from "@/composables/useRessource";
import ContentDisplayer from "@/components/ContentDisplayer.vue"

export default defineComponent({
    components: { ContentDisplayer },

    setup() {
        const { ressource, dateInFrench, typeInFrench } = useRessource()
        const route = useRoute()
        const ressourceID = route.params.id.toString()

        onMounted(async () => {
            const ressourceService = new RessourceService()
            const ressourceFromDB = await ressourceService.getRessourceByID(ressourceID)
            if (ressourceFromDB) ressource.value = ressourceFromDB
        }
        )

        return { ressource, typeInFrench, dateInFrench }
    }
})
</script>

<style scoped>
</style>