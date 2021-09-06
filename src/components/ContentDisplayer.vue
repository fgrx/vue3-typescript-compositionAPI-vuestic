<template>
    <div class="row">
        <div class="flex xs12 offset--md2 md8">
            <h3 class="display-3">
                Description de
                <slot name="title"></slot>"
            </h3>
            <slot />
        </div>
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
</style>