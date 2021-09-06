<template>
    <div>
        <h1 class="display-1">Administration</h1>
        <va-button-group class="my-4">
            <va-button :to="{ name: 'AdminManagement' }">Gestion</va-button>
            <va-button :to="{ name: 'AdminValidation' }">Validation</va-button>
        </va-button-group>
        <router-view />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {


        return {}
    }
})
</script>

<style scoped>
.router-link-exact-active {
    background-color: rgb(2 43 128) !important;
}
</style>