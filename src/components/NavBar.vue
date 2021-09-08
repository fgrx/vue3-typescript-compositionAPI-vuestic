<template>
  <div>
    <va-navbar color="#363636" text-color="#9effa1" class="mb-4 shadow">
      <template #left>
        <va-navbar-item class="title-site menu-link">
          <router-link :to="{ name: 'Home' }">
            <va-icon class="material-icons mr-2">laptop</va-icon>
            <span>DevWall</span>
          </router-link>
        </va-navbar-item>
      </template>
      <template #right>
        <va-navbar-item class="menu-link">
          <router-link :to="{ name: 'Ressources' }">Ressources</router-link>
        </va-navbar-item>
        <va-navbar-item class="menu-link">
          <router-link :to="{ name: 'About' }">A propos</router-link>
        </va-navbar-item>
        <va-navbar-item class="menu-link" v-if="!authUser">
          <router-link :to="{ name: 'AdminValidation' }">Admin</router-link>
        </va-navbar-item>
        <va-navbar-item class="menu-link" v-if="authUser">
          <va-button
            text-color="#000"
            color="#9effa1"
            size="small"
            @click="disconnectAction"
            >Déconnecter</va-button
          >
        </va-navbar-item>
        <va-navbar-item class="menu-link">
          <va-button
            @click="openFormRessourceAction"
            size="small"
            text-color="#000"
            color="#9effa1"
            >Ajouter</va-button
          >
        </va-navbar-item>
      </template>
    </va-navbar>
  </div>
</template>

<script setup>
import eventBus from "@/plugins/eventBus";
import { computed } from "@vue/reactivity";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const openFormRessourceAction = () =>
  eventBus.emit("open-ressource-form-dialog");

const store = useStore();
const router = useRouter();

const authUser = computed(() => store.state.authModule.user);

const disconnectAction = () => {
  store.dispatch("authModule/updateUserAction", null);
  router.push({ name: "Home" });
};
</script>

<style lang="scss" scoped>
</style>