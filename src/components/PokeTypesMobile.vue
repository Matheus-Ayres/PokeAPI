<script setup>
import TypeCard from './TypeCard.vue'
import BaseModal from './ModalBase.vue'
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
const showTypesModal = ref(false)

async function PokemonTypes() {
    types.value = await getPokemonTypes()
}

function selectType(typeName) {
    emit('update:selectedType', typeName)
    showTypesModal.value = false
}

onMounted(PokemonTypes)
</script>

<template>
    <div class="flex flex-col gap-4">
        <div class="flex justify-between items-center">
            <span class="font-bold font-['Nunito'] text-xl">Tipos</span>

            <div class="flex items-center gap-3">
                <button
                    v-if="selectedType"
                    type="button"
                    class="font-bold font-['Nunito'] text-sm text-gray-500"
                    @click="selectType('')"
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
            <div v-for="type in types" :key="type.name" class="min-w-32">
                <TypeCard
                    :type="type"
                    :selected="selectedType === type.name"
                    @select="selectType"
                />
            </div>
        </div>
    </div>

    <BaseModal :show="showTypesModal" title="Todos os tipos" @close="showTypesModal = false">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
            <TypeCard
                v-for="type in types"
                :key="type.name"
                :type="type"
                :selected="selectedType === type.name"
                @select="selectType"
            />
        </div>
    </BaseModal>
</template>
