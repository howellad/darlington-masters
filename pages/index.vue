<script setup lang="ts">
const items = [
    'assets/Main_Pool_1.jpg',
    'https://picsum.photos/600/800?random=2',
    'https://picsum.photos/600/800?random=3',
    'https://picsum.photos/600/800?random=4',
    'https://picsum.photos/600/800?random=5',
    'https://picsum.photos/600/800?random=6'
]
</script>

<template>
    <div class="flex justify-center">
        <div>
            <text class="font-bold text-2xl mt-8 ml-1 mr-1 text-center">
            Welcome to Darlington Masters Swim team!
            </text>
            <UCarousel v-slot="{ item }" :items="items">
                <img :src="item" width="300" height="400" draggable="false">
            </UCarousel>
            <img  src="assets/Main_Pool_1.jpg">
        </div>
    </div>
</template>
