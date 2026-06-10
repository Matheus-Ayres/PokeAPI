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

            <div
                class="group hidden cursor-pointer items-center gap-1 lg:flex"
            >
                <div class="relative h-5 w-5">
                    <img
                        src="../assets/favs.png"
                        alt=""
                        class="absolute inset-0 group-hover:hidden"
                    >

                    <img
                        src="../assets/liked.png"
                        alt=""
                        class="absolute inset-0 hidden group-hover:block"
                    >
                </div>

                <span class="text-white">
                    Favoritos
                </span>
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