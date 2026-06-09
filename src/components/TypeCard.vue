<script setup>
defineProps({
    type: {
        type: Object,
        required: true
    }
})
</script>

<template>
    <button type="button"
        class="grid h-11 w-full grid-cols-[24px_1fr] items-center gap-2 rounded-xl border border-red-500 bg-white shadow-md px-3 transition hover:bg-red-50">

        <img :src="type.icon" :alt="type.name" class="h-5 w-5 object-contain justify-self-center rounded-full">

        <span class="font-['Nunito'] text-xs font-bold capitalize text-gray-800 text-left">
            {{ type.name }}
        </span>
    </button>
</template>