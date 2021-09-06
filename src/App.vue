<template>
    <div>
        <va-affix :offset-top="0">
            <NavBar />
        </va-affix>

        <div class="container px-3">
            <Loading :isLoading="isLoading" />

            <router-view v-slot="{ Component }">
                <transition name="slide" mode="out-in">
                    <component :is="Component"></component>
                </transition>
            </router-view>

            <VideoDialog />
            <RessourceFormDialog />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { useStore } from 'vuex';

import NavBar from "@/components/NavBar.vue";
import VideoDialog from "@/components/VideoDialog.vue";
import RessourceService from './services/ressourceService';
import RessourceFormDialog from "@/components/RessourceFormDialog.vue";
import Loading from "@/components/Loading.vue";


export default defineComponent({
    components: { VideoDialog, RessourceFormDialog, Loading, NavBar },

    setup() {
        const store = useStore()
        const isLoading = ref(false)

        onMounted(async () => {
            isLoading.value = true
            const ressourceService = new RessourceService();
            const ressources = await ressourceService.getAllRessources()
            store.dispatch("ressourceModule/updateRessourcesAction", ressources)
            isLoading.value = false
        }
        )

        return { isLoading }
    }
})
</script>

<style>
#app {
    font-family: "Source Sans Pro", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
}

.shadow {
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
        0px 4px 5px 0px rgba(0, 0, 0, 0.14),
        0px 1px 10px 0px rgba(0, 0, 0, 0.12);
}

.container {
    font-size: 16px;
    line-height: 1.5;
    margin-right: auto;
    margin-left: auto;
    max-width: 1185px;
}

.title-site {
    font-size: 1.5em;
}

.menu-link a {
    color: #9effa1;
}

.router-link-active {
    text-decoration: underline;
}

.slide-enter-from {
    transform: translateX(-100px);
    opacity: 0;
}

.slide-leave-to {
    transform: translateX(100px);
    opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
    transition: all 0.5s ease-out;
}
</style>