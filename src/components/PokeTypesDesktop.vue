<script setup>
import TypeCard from './TypeCard.vue'
import { onMounted, ref } from 'vue'
import { getPokemonTypes } from '../services/http.js'

defineProps({
    selectedType: {
        type: String,
        default: '',
    },
})

const emit = defineEmits(['update:selectedType'])
const types = ref([])

async function PokemonTypes() {
    types.value = await getPokemonTypes()
}

function selectType(typeName) {
    emit('update:selectedType', typeName)
}

onMounted(PokemonTypes)
</script>

<template>
    <div class="flex flex-col gap-4">
        <div class="flex items-center justify-between">
            <span class="font-bold font-['Nunito'] text-xl">Tipos</span>
            <button
                v-if="selectedType"
                type="button"
                class="text-xs font-bold text-red-500"
                @click="selectType('')"
            >
                Limpar
            </button>
        </div>

        <div class="grid grid-cols-2 gap-2">
            <TypeCard
                v-for="type in types"
                :key="type.name"
                :type="type"
                :selected="selectedType === type.name"
                @select="selectType"
            />
        </div>
    </div>
</template>
