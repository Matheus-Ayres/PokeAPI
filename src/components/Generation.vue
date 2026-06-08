<script setup>
import { onMounted, ref } from 'vue';
import { getGenerations } from '../services/http';


const generations = ref([])

async function Generations() {
    const result = await getGenerations()
    generations.value = result
}

onMounted(() => {
    Generations()
})

</script>

<template>
    <div class="flex flex-col gap-1">
        <span class="font-bold font-['Nunito'] text-xl">
            Gerações
        </span>

        <div class="flex flex-wrap gap-4">
            <div v-for="generation in generations" :key="generation">
                <span class="border border-gray-400 rounded-md px-3 py-1 text-gray-600 text-sm
                hover:bg-red-500 hover:text-white hover:border-red-500 transition cursor-pointer
                ">
                    {{ generation }}
                </span>
            </div>
        </div>
    </div>
</template>