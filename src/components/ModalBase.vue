<script setup>
defineProps({
    show: {
        type: Boolean,
        required: true
    },
    title: String,
})

const emit = defineEmits(['close'])

function closeModal() {
    emit('close')
}
</script>

<template>
    <Teleport to="body">
        <div v-if="show" class="fixed inset-0 z-50 flex items-center justify-center px-4">
            <!-- Fundo escuro -->
            <div class="absolute inset-0 bg-black/50 backdrop-blur-sm" @click="closeModal"></div>

            <!-- Caixa do modal -->
            <div class="relative z-10 w-full max-w-2xl rounded-2xl bg-white p-6 shadow-2xl">
                <!-- Header -->
                <div class="flex items-center justify-between mb-6">
                    <h2 class="font-bold font-['Nunito'] text-xl text-gray-900">
                        {{ title }}
                    </h2>

                    <button type="button"
                        class="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition hover:bg-red-100 hover:text-red-500"
                        @click="closeModal">
                        X
                    </button>
                </div>

                <!-- Conteúdo -->
                <div>
                    <slot />
                </div>
            </div>
        </div>
    </Teleport>
</template>