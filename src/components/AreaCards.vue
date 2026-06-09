<script setup>
import { onMounted, ref, computed } from 'vue'
import { getPokemonList } from '../services/http'
import PokeCard from './PokeCard.vue'

const pokemons = ref([])
const loading = ref(false)
const error = ref(null)

const currentPage = ref(1)
const perPage = 6 // Número de Pokémon por página
const allPokemons = 1350 // Número total de Pokémon conhecidos (pode ser atualizado conforme necessário)

async function getPokemons() {    
    try {
        loading.value = true
        error.value = null

        pokemons.value = await getPokemonList(allPokemons)
    } catch (err) {
        error.value = 'Erro ao carregar os Pokémon.'
        console.error('Erro ao obter a lista de Pokémon:', err)
    } finally {
        loading.value = false
    }
}

const totalPages = computed(() => { // Função para calcular o total de páginas
    return Math.ceil(pokemons.value.length / perPage)   
})

const paginatedPokemons = computed(() => { // Função para obter os Pokémon da página atual
    const start = (currentPage.value - 1) * perPage   
    const end = start + perPage

    return pokemons.value.slice(start, end)
})

const visiblePages = computed(() => { // Função para calcular as páginas visíveis na paginação
    const total = totalPages.value
    const current = currentPage.value
    const pages = []
    
    if (total <= 7) {    
        for (let i = 1; i <= total; i++) {
            pages.push(i)
        }

        return pages
    }

    pages.push(1)

    const start = Math.max(2, current - 2)
    const end = Math.min(total - 1, current + 2)

    if (start > 2) {
        pages.push('...')
    }

    for (let i = start; i <= end; i++) {
        pages.push(i)
    }

    if (end < total - 1) {
        pages.push('...')
    }

    pages.push(total)

    return pages
})

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

onMounted(() => {
    getPokemons()
})
</script>

<template>
    <section class="bg-white rounded-2xl p-4">
        <div class="flex items-center justify-between mb-6">
            <h2 class="font-bold font-['Nunito'] text-xl text-gray-900">
                Pokémon
            </h2>

            <span class="text-sm text-gray-500">
                {{ pokemons.length }} encontrados
            </span>
        </div>

        <div v-if="loading" class="text-gray-500">
            Carregando Pokémon...
        </div>

        <div v-else-if="error" class="text-red-500">
            {{ error }}
        </div>

        <div v-else class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <PokeCard v-for="pokemon in paginatedPokemons" :key="pokemon.id" :pokemon="pokemon" />
        </div>

        <div v-if="totalPages > 1" class="flex justify-center items-center gap-2 mt-8">
            <button type="button" @click="previousPage" :disabled="currentPage === 1"
                class="w-10 h-10 rounded-lg border border-gray-200 text-gray-500 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-100 transition">
                ‹
            </button>

            <button v-for="(page, index) in visiblePages" :key="`${page}-${index}`" type="button"
                @click="goToPage(page)" :disabled="page === '...'"
                class="w-10 h-10 rounded-lg border border-gray-200 text-sm font-bold transition disabled:cursor-default"
                :class="[
                    currentPage === page
                        ? 'bg-red-500 text-white border-red-500'
                        : 'bg-white text-gray-700 hover:bg-gray-100',
                    page === '...' ? 'border-transparent hover:bg-white' : ''
                ]">
                {{ page }}
            </button>

            <button type="button" @click="nextPage" :disabled="currentPage === totalPages"
                class="w-10 h-10 rounded-lg border border-gray-200 text-gray-500 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-100 transition">
                ›
            </button>
        </div>
    </section>
</template>