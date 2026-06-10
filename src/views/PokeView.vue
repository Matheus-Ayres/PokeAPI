<script setup>
import { onMounted, ref, watch } from 'vue';
import { getPokemonByID } from '../services/http';
import router from '../router';
import { useRoute } from 'vue-router';
import Details from '../components/Details.vue';

const route = useRoute()

const pokemonInfo = ref({})

async function getPokemonInfo(id) {
    try {
        const result = await getPokemonByID(id)
        pokemonInfo.value = result
    } catch (error) {
        console.log(error)
    }
}

function formatPokemonNumber(id) {
    return String(id).padStart(3, '0')
}

watch(
    () => route.params.id,
    (id) => {
        getPokemonInfo(id)
    },
    { immediate: true }
)
</script>


<template>
    <div class="p-5 bg-white rounded-xl shadow-sm mr-8">
        <span class="font-bold text-gray-500">
            #{{ formatPokemonNumber(pokemonInfo.id) }}
        </span>
        <h1 class="text-2xl font-bold text-black capitalize">{{ pokemonInfo.name }}</h1>

        <div class="flex flex-wrap items-center gap-2 mt-3">
            <span v-for="type in pokemonInfo.types" :key="type.id"
                class="flex items-center gap-1 px-2 py-1 bg-gray-100 border border-gray-200 rounded-full text-xs font-semibold text-gray-700 capitalize">
                <img :src="type.icon" :alt="type.name" class="w-4 h-4 object-contain rounded-full">
                {{ type.name }}
            </span>
        </div>

        <div class="grid grid-cols-[40%_60%] mt-5 gap-4 items-center">
            <div class="flex flex-col gap-4">
                <p class="text-gray-600">{{ pokemonInfo.description }}</p>
                
                <section class="flex items-center gap-8">
                    <div class="flex flex-col gap-4">
                        <span class="text-gray-600">Altura</span>
                        <span class="font-bold font-['Nunito'] text-md text-gray-900">{{ pokemonInfo.height }} m</span>
                    </div>
                    <div class="flex flex-col gap-4">
                        <span class="text-gray-600">Peso</span>
                        <span class="font-bold font-['Nunito'] text-md text-gray-900">{{ pokemonInfo.weight }} kg</span>
                    </div>
                </section>
            </div>
            <img :src="pokemonInfo.image" :alt="pokemonInfo.name" class="w-64 h-48 object-contain">
        </div>

        <Details :pokemon="pokemonInfo" class="mt-5"/>
    </div>

</template>