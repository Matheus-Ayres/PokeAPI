<script setup>
import TypeCard from './TypeCard.vue'
import { onMounted, ref } from 'vue'
import { getPokemonTypes } from '../services/http.js'

const props = defineProps({
    selectedTypes: {
        type: Array,
        default: () => [],
    },
})

const emit = defineEmits(['update:selectedTypes'])

const types = ref([])

async function PokemonTypes() {
    types.value = await getPokemonTypes()
}

function selectType(typeName) {
    const selected = [...props.selectedTypes]

    if (selected.includes(typeName)) {
        emit(
            'update:selectedTypes',
            selected.filter(type => type !== typeName)
        )

        return
    }

    if (selected.length >= 2) {
        return
    }

    emit('update:selectedTypes', [...selected, typeName])
}

function clearTypes() {
    emit('update:selectedTypes', [])
}

onMounted(PokemonTypes)
</script>

<template>
    <div class="flex flex-col gap-4">
        <div class="flex items-center justify-between">
            <div>
                <span class="font-bold font-['Nunito'] text-xl">
                    Tipos
                </span>

                <p class="text-xs text-gray-500">
                    Selecione até 2 tipos
                </p>
            </div>

            <button
                v-if="selectedTypes.length"
                type="button"
                class="text-xs font-bold text-red-500"
                @click="clearTypes"
            >
                Limpar
            </button>
        </div>

        <div class="grid grid-cols-2 gap-2">
            <TypeCard
                v-for="type in types"
                :key="type.name"
                :type="type"
                :selected="selectedTypes.includes(type.name)"
                :disabled="
                    selectedTypes.length >= 2 &&
                    !selectedTypes.includes(type.name)
                "
                @select="selectType"
            />
        </div>
    </div>
</template>