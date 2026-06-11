<script setup>
import { computed, ref } from 'vue'
import { RouterView, useRoute } from 'vue-router'

import AreaCards from '../components/AreaCards.vue'
import Generation from '../components/Generation.vue'
import NavBar from '../components/NavBar.vue'
import PokeTypesDesktop from '../components/PokeTypesDesktop.vue'
import PokeTypesMobile from '../components/PokeTypesMobile.vue'

const route = useRoute()

const selectedTypes = ref([])
const selectedGeneration = ref(null)
const searchQuery = ref('')

const pokemonIsOpen = computed(() => {
    return Boolean(route.params.id)
})
</script>

<template>
    <NavBar v-model:search-query="searchQuery" />

    <div class="p-5">
        <main
            class="grid grid-cols-1 gap-4 lg:grid-cols-[20%_minmax(0,1fr)_30%]"
        >
            <!-- Filtros no mobile -->
            <div class="mb-4 flex flex-col gap-4 lg:hidden">
                <PokeTypesMobile
                    v-model:selected-types="selectedTypes"
                />

                <div class="rounded-xl bg-white p-4">
                    <Generation
                        v-model:selected-generation="selectedGeneration"
                    />
                </div>
            </div>

            <!-- Filtros à esquerda no desktop -->
            <aside
                class="hidden rounded-xl bg-white p-4 lg:flex lg:flex-col lg:gap-4"
            >
                <PokeTypesDesktop
                    v-model:selected-types="selectedTypes"
                />

                <Generation
                    v-model:selected-generation="selectedGeneration"
                />
            </aside>

            <!-- Cards no centro -->
            <AreaCards
                :class="{
                    'lg:col-span-2': !pokemonIsOpen
                }"
                :selected-types="selectedTypes"
                :selected-generation="selectedGeneration"
                :search-query="searchQuery"
            />

            <!-- Detalhes à direita -->
            <aside
                v-if="pokemonIsOpen"
                class="min-w-0 self-start lg:sticky lg:top-5"
            >
                <RouterView />
            </aside>
        </main>
    </div>
</template>