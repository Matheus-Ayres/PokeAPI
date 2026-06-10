<script setup>
defineProps({
    modelValue: {
        type: String,
        default: '',
    },
})

const emit = defineEmits(['update:modelValue'])
</script>

<template>
    <div class="relative mb-4">
        <img
            src="../assets/search.png"
            alt=""
            class="pointer-events-none absolute left-4 top-1/2 h-6 w-6 -translate-y-1/2 object-contain"
        >

        <input
            type="search"
            :value="modelValue"
            placeholder="Buscar Pokémon por nome ou número"
            class="h-12 w-full rounded-md border border-gray-500 bg-gray-700 py-2 pl-12 pr-10 font-['Nunito'] text-sm text-white outline-none transition placeholder:text-gray-300 focus:border-red-500"
            @input="emit('update:modelValue', $event.target.value)"
        >

        <button
            v-if="modelValue"
            type="button"
            aria-label="Limpar pesquisa"
            class="absolute right-4 top-1/2 -translate-y-1/2 text-xl text-gray-300 transition hover:text-white"
            @click="emit('update:modelValue', '')"
        >
            ×
        </button>
    </div>
</template>
