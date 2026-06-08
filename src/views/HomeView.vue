<script setup>
import NavBar from '../components/NavBar.vue';
import PokeTypesDesktop from '../components/PokeTypesDesktop.vue';
import PokeTypesMobile from '../components/PokeTypesMobile.vue';

</script>

<template>
    <NavBar/>

    <body class="p-5">
        <main class="lg:grid lg:grid-cols-[20%_60%_20%] gap-4">
            <!-- escondendo o componente no desktop-->
            <div class="lg:hidden">
                <PokeTypesMobile/>
            </div>
            <div class="bg-white rounded-xl p-4  hidden lg:block">
                <PokeTypesDesktop/>
            </div>
        </main>
    </body>
</template>