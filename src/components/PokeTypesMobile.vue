<script setup>
import TypeCard from './TypeCard.vue'
import BaseModal from './ModalBase.vue'

import { onMounted, ref } from 'vue'
import { getPokemonTypes } from '../services/http.js'

const types = ref([])
const showTypesModal = ref(false)

async function PokemonTypes() {
    const result = await getPokemonTypes()
    types.value = result
}

onMounted(() => {
    PokemonTypes()
})
</script>

<template>
    <div class="flex flex-col gap-4">
        <div class="flex justify-between items-center">
            <span class="font-bold font-['Nunito'] text-xl">
                Tipos
            </span>

            <button type="button" class="font-bold font-['Nunito'] text-red-500 bg-transparent"
                @click="showTypesModal = true">
                Ver todos
            </button>
        </div>
        
        <div class="flex gap-2 overflow-x-auto pb-2">
            <TypeCard v-for="type in types" :key="type.name" :type="type" />
        </div>
    </div>

    <!-- Modal -->
    <BaseModal :show="showTypesModal" title="Todos os tipos" @close="showTypesModal = false">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
            <TypeCard v-for="type in types" :key="type.name" :type="type" />
        </div>
    </BaseModal>
</template>