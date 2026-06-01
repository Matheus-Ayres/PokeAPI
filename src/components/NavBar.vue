<script setup>
import SearchBar from './SearchBar.vue';


</script>

<template>
    <nav class="bg-gray-800 h-15 p-5 flex flex-col gap-8">
        <div class="flex justify-between items-center
            lg:grid grid-cols-[auto_1fr_auto_auto] gap-6
        ">

            <div class="flex gap-3 items-center">
                <img src="../assets/pokeball-icon.svg" class="w-12 h-12">
                <span class="text-white font-bold text-xl">PokéAPI Explorer</span>
            </div>

            <SearchBar class="hidden 
            lg:flex justify-self-center w-full max-w-xl
            " />

            <div class="hidden lg:flex gap-1 items-center group cursor-pointer">
                <div class="relative w-5 h-5">
                    <img src="../assets/favs.png" class="absolute inset-0 group-hover:hidden">

                    <img src="../assets/liked.png" class="absolute inset-0 hidden group-hover:block">
                </div>

                <span class="text-white">Favoritos</span>
            </div>

            <img src="../assets/red-icon.jpeg" class="w-14 h-14 rounded-full">


        </div>
        <SearchBar class="lg:hidden" />
    </nav>
</template>