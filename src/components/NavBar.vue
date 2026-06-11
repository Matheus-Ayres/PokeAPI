<script setup>
import SearchBar from './SearchBar.vue'

defineProps({
    searchQuery: {
        type: String,
        default: '',
    },
})

const emit = defineEmits(['update:searchQuery'])
</script>

<template>
    <nav class="bg-gray-800 p-5 flex flex-col gap-8">
        <div
            class="flex items-center justify-between lg:grid lg:grid-cols-[auto_1fr_auto_auto] gap-6"
        >
            <div class="flex items-center gap-3">
                <img
                    src="../assets/pokeball-icon.svg"
                    alt="Pokébola"
                    class="h-12 w-12"
                >

                <span class="text-xl font-bold text-white">
                    PokéAPI Explorer
                </span>
            </div>

            <SearchBar
                class="hidden w-full max-w-xl justify-self-center lg:flex"
                :model-value="searchQuery"
                @update:model-value="emit('update:searchQuery', $event)"
            />

            <div class="hidden lg:flex gap-1 items-center group cursor-pointer">
                <div class="relative w-5 h-5">
                </div>

                <span class="text-white"></span>
            </div>

            <img
                src="../assets/red-icon.jpeg"
                alt="Perfil"
                class="h-14 w-14 rounded-full"
            >
        </div>

        <SearchBar
            class="lg:hidden"
            :model-value="searchQuery"
            @update:model-value="emit('update:searchQuery', $event)"
        />
    </nav>
</template>