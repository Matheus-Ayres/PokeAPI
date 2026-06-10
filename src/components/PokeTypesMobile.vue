<script setup>
import TypeCard from './TypeCard.vue'
import BaseModal from './ModalBase.vue'
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
const showTypesModal = ref(false)

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
        <div class="flex justify-between items-center">
            <div>
                <span class="font-bold font-['Nunito'] text-xl">
                    Tipos
                </span>

                <p class="text-xs text-gray-500">
                    Selecione até 2 tipos
                </p>
            </div>

            <div class="flex items-center gap-3">
                <button
                    v-if="selectedTypes.length"
                    type="button"
                    class="font-bold font-['Nunito'] text-sm text-gray-500"
                    @click="clearTypes"
                >
                    Limpar
                </button>

                <button
                    type="button"
                    class="font-bold font-['Nunito'] text-red-500 bg-transparent"
                    @click="showTypesModal = true"
                >
                    Ver todos
                </button>
            </div>
        </div>

        <div class="flex gap-2 overflow-x-auto pb-2">
            <div
                v-for="type in types"
                :key="type.name"
                class="min-w-32"
            >
                <TypeCard
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
    </div>

    <BaseModal
        :show="showTypesModal"
        title="Todos os tipos"
        @close="showTypesModal = false"
    >
        <div class="mb-4 flex items-center justify-between">
            <span class="text-sm text-gray-500">
                {{ selectedTypes.length }}/2 selecionados
            </span>

            <button
                v-if="selectedTypes.length"
                type="button"
                class="text-sm font-bold text-red-500"
                @click="clearTypes"
            >
                Limpar
            </button>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
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
    </BaseModal>
</template>