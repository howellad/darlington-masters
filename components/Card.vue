<template>
    <div class="rounded overflow-hidden shadow-lg">
        <div class="px-10 py-5">
            <div class="font-bold text-xl mb-2" v-text="title"></div>
            <div class="sm:flex rounded justify-center">
                <img :src="getImageUrl()" >
                <p class="text-f-700 text-base" v-text="bio"></p>
            </div>

        </div>
    </div>
</template>


<script setup lang="ts">
import {defineProps} from "vue";

const props = defineProps({
  img: String,
  bio: String,
  title: String,
  maxheight: String,
})

function getImageUrl() {
  // This path must be correct for your file
  return new URL(`../assets/${props.img}`, import.meta.url).toString()
}

</script>