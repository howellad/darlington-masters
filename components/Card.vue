<template>
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <!-- <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"> -->
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2" v-text="title"></div>
            <p class="text-gray-700 text-base" v-text="bio">
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
  title?: string
  bio?: string
}>()
</script>