<script setup>
const props = defineProps({
    type: {
        type: Object,
        required: true,
    },
    selected: {
        type: Boolean,
        default: false,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
})

const emit = defineEmits(['select'])
</script>

<template>
    <button
        type="button"
        :disabled="disabled"
        @click="emit('select', props.type.name)"
        class="grid h-11 w-full grid-cols-[24px_1fr] items-center gap-2 rounded-xl border px-3 shadow-md transition"
        :class="[
            selected
                ? 'border-red-500 bg-red-500 text-white'
                : 'border-red-500 bg-white hover:bg-red-50',

            disabled
                ? 'cursor-not-allowed opacity-40 hover:bg-white'
                : ''
        ]"
    >
        <img
            :src="type.icon"
            :alt="type.name"
            class="h-5 w-5 object-contain justify-self-center rounded-full"
        >

        <span
            class="font-['Nunito'] text-xs font-bold capitalize text-left"
            :class="selected ? 'text-white' : 'text-gray-800'"
        >
            {{ type.name }}
        </span>
    </button>
</template>