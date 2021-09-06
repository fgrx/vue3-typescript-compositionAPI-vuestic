<template>
    <div>
        <h1 class="display-1">Connexion</h1>
        <va-alert v-if="error" color="danger">{{ error }}</va-alert>
        <va-input @click="error = ''" outline label="Adresse email" v-model="email" class="mb-3"></va-input>
        <va-input
            @click="error = ''"
            outline
            label="Mot de passe"
            type="password"
            v-model="password"
            class="mb-3"
        ></va-input>
        <va-button :disabled="!isCompleted" @click="authenticateUser">Connexion</va-button>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import AuthService from "@/services/authService"
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default defineComponent({
    setup() {
        const router = useRouter()
        const store = useStore()

        const email = ref("admin@gmail.com")
        const password = ref("12345")
        const error = ref("")

        const authenticateUser = async () => {
            const authService = new AuthService()
            const res = await authService.connectWithEmailAndPassword(email.value, password.value)

            if (res) {
                store.dispatch("authModule/updateUserAction", res)
                router.push({ name: "AdminValidation" })
            } else {
                error.value = "Mauvais couple email/mot de passe"
            }
        }

        const isCompleted = computed(() => email.value && password.value ? true : false)

        return { email, password, error, authenticateUser, isCompleted }
    }
})
</script>

<style scoped>
</style>