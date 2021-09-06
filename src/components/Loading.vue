<template>
    <va-inner-loading v-if="isLoading" :loading="true" :size="60">
        <va-card>
            <va-card-title>Chargement</va-card-title>
            <va-card-content>Veuillez patienter ...</va-card-content>
        </va-card>
    </va-inner-loading>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        isLoading: {
            type: Boolean,
            default: false
        }
    },

    setup() {
        return {}
    }
})
</script>

<style scoped>
</style>