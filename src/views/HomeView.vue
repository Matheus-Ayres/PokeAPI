<script setup>
import { ref } from 'vue'
import AreaCards from '../components/AreaCards.vue'
import Generation from '../components/Generation.vue'
import NavBar from '../components/NavBar.vue'
import PokeTypesDesktop from '../components/PokeTypesDesktop.vue'
import PokeTypesMobile from '../components/PokeTypesMobile.vue'

const selectedTypes = ref([])
const selectedGeneration = ref(null)
</script>

<template>
    <NavBar />

    <div class="p-5">
        <main class="lg:grid lg:grid-cols-[20%_50%_30%] gap-4">
            <div class="mb-4 flex flex-col gap-4 lg:hidden">
                <PokeTypesMobile v-model:selectedTypes="selectedTypes" />

                <div class="rounded-xl bg-white p-4">
                    <Generation v-model:selectedGeneration="selectedGeneration" />
                </div>
            </div>

            <aside class="bg-white rounded-xl p-4 hidden lg:flex flex-col gap-4">
                <PokeTypesDesktop v-model:selectedTypes="selectedTypes" />
                <Generation v-model:selectedGeneration="selectedGeneration" />
            </aside>

            <AreaCards
                :selected-types="selectedTypes"
                :selected-generation="selectedGeneration"
            />
        </main>
    </div>
</template>