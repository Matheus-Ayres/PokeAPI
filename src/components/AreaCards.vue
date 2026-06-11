<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { getPokemonList } from '../services/http'
import PokeCard from './PokeCard.vue'

const props = defineProps({
    selectedTypes: {
        type: Array,
        default: () => [],
    },

    selectedGeneration: {
        type: Number,
        default: null,
    },

    searchQuery: {
        type: String,
        default: '',
    },
})

const pokemons = ref([])
const loading = ref(false)
const error = ref(null)

const currentPage = ref(1)
const perPage = 6
const pokemonLimit = 1025

function getGenerationById(id) {
    if (id <= 151) return 1
    if (id <= 251) return 2
    if (id <= 386) return 3
    if (id <= 493) return 4
    if (id <= 649) return 5
    if (id <= 721) return 6
    if (id <= 809) return 7
    if (id <= 905) return 8
    if (id <= 1025) return 9

    return null
}

async function getPokemons() {
    try {
        loading.value = true
        error.value = null

        pokemons.value = await getPokemonList(pokemonLimit)

        console.log('Primeiro Pokémon:')
        console.log(pokemons.value[0])
    } catch (err) {
        error.value = 'Erro ao carregar os Pokémon.'
        console.error('Erro ao obter a lista de Pokémon:', err)
    } finally {
        loading.value = false
    }
}

const filteredPokemons = computed(() => {
    const query = props.searchQuery
        .trim()
        .toLowerCase()
        .replace(/^#/, '')

    return pokemons.value.filter(pokemon => {
        const pokemonTypeNames = pokemon.types.map(type => type.name)

        const matchesTypes =
            props.selectedTypes.length === 0 ||
            props.selectedTypes.every(selectedType =>
                pokemonTypeNames.includes(selectedType)
            )

        const generation =
            pokemon.generation ?? getGenerationById(pokemon.id)

        const matchesGeneration =
            !props.selectedGeneration ||
            generation === props.selectedGeneration

        const normalId = String(pokemon.id)
        const formattedId = normalId.padStart(3, '0')

        const matchesSearch =
            query === '' ||
            pokemon.name.toLowerCase().includes(query) ||
            normalId.includes(query) ||
            formattedId.includes(query)

        return (
            matchesTypes &&
            matchesGeneration &&
            matchesSearch
        )
    })
})

const totalPages = computed(() => {
    return Math.ceil(filteredPokemons.value.length / perPage)
})

const paginatedPokemons = computed(() => {
    const start = (currentPage.value - 1) * perPage
    const end = start + perPage

    return filteredPokemons.value.slice(start, end)
})

const visiblePages = computed(() => {
    const total = totalPages.value
    const current = currentPage.value
    const pages = []

    if (total <= 7) {
        for (let page = 1; page <= total; page++) {
            pages.push(page)
        }

        return pages
    }

    pages.push(1)

    const start = Math.max(2, current - 2)
    const end = Math.min(total - 1, current + 2)

    if (start > 2) {
        pages.push('...')
    }

    for (let page = start; page <= end; page++) {
        pages.push(page)
    }

    if (end < total - 1) {
        pages.push('...')
    }

    pages.push(total)

    return pages
})

watch(
    () => [
        props.searchQuery,
        props.selectedGeneration,
        ...props.selectedTypes,
    ],
    () => {
        currentPage.value = 1
    }
)

function goToPage(page) {
    if (page === '...') return

    currentPage.value = page
}

function nextPage() {
    if (currentPage.value < totalPages.value) {
        currentPage.value++
    }
}

function previousPage() {
    if (currentPage.value > 1) {
        currentPage.value--
    }
}

onMounted(getPokemons)
</script>

<template>
    <section class="rounded-2xl bg-white p-4">
        <div class="mb-6 flex items-center justify-between">
            <h2 class="font-['Nunito'] text-xl font-bold text-gray-900">
                Pokémon
            </h2>

            <span class="text-sm text-gray-500">
                {{ filteredPokemons.length }} encontrados
            </span>
        </div>

        <div
            v-if="loading"
            class="py-10 text-center text-gray-500"
        >
            Carregando Pokémon...
        </div>

        <div
            v-else-if="error"
            class="py-10 text-center text-red-500"
        >
            {{ error }}
        </div>

        <div
            v-else-if="filteredPokemons.length === 0"
            class="py-10 text-center text-gray-500"
        >
            Nenhum Pokémon encontrado.
        </div>

        <div
            v-else
            class="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
            <PokeCard
                v-for="pokemon in paginatedPokemons"
                :key="pokemon.id"
                :pokemon="pokemon"
            />
        </div>

        <div
            v-if="totalPages > 1"
            class="mt-8 flex flex-wrap items-center justify-center gap-2"
        >
            <button
                type="button"
                :disabled="currentPage === 1"
                class="h-10 w-10 rounded-lg border border-gray-200 text-gray-500 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
                @click="previousPage"
            >
                ‹
            </button>

            <button
                v-for="(page, index) in visiblePages"
                :key="`${page}-${index}`"
                type="button"
                :disabled="page === '...'"
                class="h-10 w-10 rounded-lg border border-gray-200 text-sm font-bold transition disabled:cursor-default"
                :class="[
                    currentPage === page
                        ? 'border-red-500 bg-red-500 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100',

                    page === '...'
                        ? 'border-transparent hover:bg-white'
                        : '',
                ]"
                @click="goToPage(page)"
            >
                {{ page }}
            </button>

            <button
                type="button"
                :disabled="currentPage === totalPages"
                class="h-10 w-10 rounded-lg border border-gray-200 text-gray-500 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
                @click="nextPage"
            >
                ›
            </button>
        </div>
    </section>
</template>