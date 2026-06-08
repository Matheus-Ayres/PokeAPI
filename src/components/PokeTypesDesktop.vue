<script setup>
import TypeCard from './TypeCard.vue'

import { onMounted, ref } from 'vue'
import { getPokemonTypes } from '../services/http.js'

const types = ref([])

async function PokemonTypes() {
    const result = await getPokemonTypes()
    types.value = result
}

onMounted(() => {
    PokemonTypes()
})
</script>

<template>

    <div class="flex flex-col gap-4 ">
        <span class="font-bold font-['Nunito'] text-xl">
            Tipos
        </span>
        
        <div class="grid grid-cols-2 gap-2">
            <TypeCard v-for="type in types" :key="type.name" :type="type" />
        </div>
    </div>
</template>