<script setup>
defineProps({
    pokemon: {
        type: Object,
        required: true
    }
})

const statNames = {
    hp: 'HP',
    attack: 'Ataque',
    defense: 'Defesa',
    'special-attack': 'Ataque Esp.',
    'special-defense': 'Defesa Esp.',
    speed: 'Velocidade'
}

function getStatName(name) {
    return statNames[name]
}

</script>

<template>
    <section class="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-6 border-b border-gray-200 pb-6">
        <div>
            <h2 class="font-bold text-gray-900 mb-4">
                Habilidades
            </h2>

            <div class="flex flex-col gap-3">
                <div v-for="ability in pokemon.abilities" :key="ability.name"
                    class="flex items-center justify-between rounded-lg border border-gray-200 px-4 py-2 text-sm text-gray-600 shadow-sm">
                    <span class="font-semibold uppercase">
                        {{ ability.name }}
                    </span>

                    <span v-if="ability.isHidden" class="text-xs font-bold text-gray-500">
                        H
                    </span>
                </div>
            </div>
        </div>

        <div class="lg:border-l lg:border-gray-200 lg:pl-6">
            <h2 class="font-bold text-gray-900 mb-4">
                Estatísticas base
            </h2>

            <div class="flex flex-col gap-3">
                <div v-for="stat in pokemon.stats" :key="stat.name"
                    class="flex items-center gap-3 text-sm">
                    <span class="font-medium text-gray-600">
                        {{ getStatName(stat.name) }}
                    </span>

                    <span class="font-bold text-gray-600 text-right">
                        {{ stat.value }}
                    </span>
                </div>

                <div class="flex items-center gap-3 pt-3 mt-1 text-sm">
                    <span class="font-bold text-gray-700">
                        Total
                    </span>

                    <div></div>

                    <span class="font-bold text-gray-800 text-right">
                        {{ pokemon.totalStats }}
                    </span>
                </div>
            </div>
        </div>
    </section>
</template>