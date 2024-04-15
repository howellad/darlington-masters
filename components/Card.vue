<template>
    <div class="rounded overflow-hidden shadow-lg">
        <div class="px-10 py-5">
            <div class="font-bold text-xl mb-2" v-text="title"></div>
            <div class="sm:flex rounded justify-center">
                <img v-if="img" v-bind:src="img" max-height="300" class="sm:mr-4"/>
                <p class="text-f-700 text-base" v-text="bio"></p>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    title?: string
    bio?: string
    img?: string
}>()
</script>