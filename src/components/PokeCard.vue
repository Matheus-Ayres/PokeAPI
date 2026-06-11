<script setup>
defineProps({
    pokemon: {
        type: Object,
        required: true
    }
})

function formatPokemonNumber(id) {
    return String(id).padStart(3, '0')
}
</script>

<template>
    <RouterLink :to="`/pokemon/${pokemon.id}`" class="block">
        <article class="border border-gray-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition bg-white">
            <div class="flex items-center justify-between">
                <span class="font-bold text-gray-500">
                    #{{ formatPokemonNumber(pokemon.id) }}
                </span>
         
            </div>

            <img :src="pokemon.image" :alt="pokemon.name" class="w-36 h-36 object-contain mx-auto my-4">

            <div>
                <h3 class="font-bold font-['Nunito'] text-xl text-gray-900 capitalize">
                    {{ pokemon.name }}
                </h3>

                <div class="flex flex-wrap items-center gap-2 mt-3">
                    <span v-for="type in pokemon.types" :key="type.id"
                        class="flex items-center gap-1 px-2 py-1 bg-gray-100 border border-gray-200 rounded-full text-xs font-semibold text-gray-700 capitalize">
                        <img :src="type.icon" :alt="type.name" class="w-4 h-4 object-contain rounded-full">

                        {{ type.name }}
                    </span>
                </div>
            </div>
        </article>
    </RouterLink>
</template>