<script setup>
import AreaCards from '../components/AreaCards.vue';
import Generation from '../components/Generation.vue';
import NavBar from '../components/NavBar.vue';
import PokeCard from '../components/PokeCard.vue';
import PokeTypesDesktop from '../components/PokeTypesDesktop.vue';
import PokeTypesMobile from '../components/PokeTypesMobile.vue';

</script>

<template>
    <NavBar/>

    <body class="p-5">
        <main class="lg:grid lg:grid-cols-[20%_50%_30%] gap-4">
            <!-- escondendo o componente no desktop-->
            <div class="mb-4 lg:hidden">
                <PokeTypesMobile/>
            </div>
            <div class="bg-white rounded-xl p-4 hidden lg:flex flex-col gap-4">
                <PokeTypesDesktop/>
                <Generation/>
            </div>

            <AreaCards/>
        </main>
    </body>
</template>