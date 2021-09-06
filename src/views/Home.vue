<template>
    <div>
        <div>
            <h1 class="display-1 mb-3">Bienvenue sur DevWall</h1>

            <va-image :src="require('@/assets/home.jpg')" style="height: 420px" class="mb-3"></va-image>

            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi vero nostrum suscipit, perferendis beatae, nesciunt quisquam officiis ex facere dolore minima saepe delectus vitae non voluptatibus, doloremque exercitationem excepturi provident?</p>

            <p>Tempore dicta alias debitis ullam. Similique minus voluptates delectus quo laborum totam, iusto doloribus, est voluptatibus illum repellat soluta quam nesciunt adipisci reprehenderit ut corporis perferendis reiciendis! Error, fuga odio.</p>

            <p>Corrupti ratione, cum rem maxime possimus veritatis consectetur porro aliquam modi, quidem neque fugit facilis perspiciatis commodi nesciunt facere voluptas doloremque atque laborum mollitia, ut ipsa doloribus? Quia, vel reiciendis?</p>
        </div>

        <va-card v-if="topRessources.length" class="my-5">
            <va-card-title>
                <h2 class="display-2">Sélection du moment</h2>
            </va-card-title>
            <va-card-content>
                <div class="row">
                    <div
                        class="flex md4 lg3 xs12 pa-3"
                        v-for="ressource in topRessources"
                        :key="ressource.id"
                    >
                        <RessourceItem :ressourceDatas="ressource" />
                    </div>
                </div>
            </va-card-content>
        </va-card>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex';
import RessourceItem from "@/components/RessourceItem.vue"


export default defineComponent({
    components: { RessourceItem },

    setup() {
        const store = useStore()

        const topRessources = computed(
            () => store.getters["ressourceModule/getTopRessources"]
        );

        return { topRessources }
    }
})
</script>

<style scoped>
</style>