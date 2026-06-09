<script setup>
import { onMounted, ref } from 'vue'
import { getGenerations } from '../services/http'

defineProps({
    selectedGeneration: {
        type: Number,
        default: null,
    },
})

const emit = defineEmits(['update:selectedGeneration'])
const generations = ref([])

async function loadGenerations() {
    generations.value = await getGenerations()
}

function selectGeneration(generation) {
    emit('update:selectedGeneration', generation)
}

onMounted(loadGenerations)
</script>

<template>
    <div class="flex flex-col gap-2">
        <div class="flex items-center justify-between">
            <span class="font-bold font-['Nunito'] text-xl">Gerações</span>
            <button
                v-if="selectedGeneration"
                type="button"
                class="text-xs font-bold text-red-500"
                @click="selectGeneration(null)"
            >
                Limpar
            </button>
        </div>

        <div class="flex flex-wrap gap-2">
            <button
                v-for="generation in generations"
                :key="generation"
                type="button"
                @click="selectGeneration(generation)"
                class="rounded-md border px-3 py-1 text-sm transition"
                :class="selectedGeneration === generation
                    ? 'border-red-500 bg-red-500 text-white'
                    : 'border-gray-400 text-gray-600 hover:border-red-500 hover:bg-red-500 hover:text-white'"
            >
                {{ generation }}ª
            </button>
        </div>
    </div>
</template>
