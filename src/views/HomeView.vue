<script setup>
import { ref } from 'vue'
import AreaCards from '../components/AreaCards.vue'
import Generation from '../components/Generation.vue'
import NavBar from '../components/NavBar.vue'
import PokeTypesDesktop from '../components/PokeTypesDesktop.vue'
import PokeTypesMobile from '../components/PokeTypesMobile.vue'
import { RouterView } from 'vue-router'

const selectedTypes = ref([])
const selectedGeneration = ref(null)
const searchQuery = ref('')
</script>

<template>
    <NavBar v-model:search-query="searchQuery" />

    <div class="p-5">
        <main class="lg:grid lg:grid-cols-[20%_50%_30%] gap-4">
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

            <AreaCards
                class="lg:col-span-2"
                :selected-types="selectedTypes"
                :selected-generation="selectedGeneration"
                :search-query="searchQuery"
            />
            <RouterView/>
        </main>
    </div>
</template>