<script setup>
import { ref, onMounted, onBeforeUnmount, onBeforeMount } from 'vue'

// your image URLs
const images = [
    'https://carol-alexandre-wedding.s3.ca-central-1.amazonaws.com/IMG_2303_79f09d39d4.jpeg',
    'https://carol-alexandre-wedding.s3.ca-central-1.amazonaws.com/IMG_2658_79a80290f3.jpeg',
    'https://carol-alexandre-wedding.s3.ca-central-1.amazonaws.com/IMG_2208_0d52465dd2.jpeg',
    'https://carol-alexandre-wedding.s3.ca-central-1.amazonaws.com/DSCF_2174_fb82442512.JPG',
    'https://carol-alexandre-wedding.s3.ca-central-1.amazonaws.com/IMG_0870_9d9ebd3f7a.JPG',
    'https://carol-alexandre-wedding.s3.ca-central-1.amazonaws.com/IMG_0358_91d8dbf665.jpeg',
    'https://carol-alexandre-wedding.s3.ca-central-1.amazonaws.com/IMG_1100_8854866f5d.jpeg'
]

const carousel = ref(null)
let intervalId

// plain JS shuffle (Fisher–Yates)
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
            ;[arr[i], arr[j]] = [arr[j], arr[i]]
    }
}

// shuffle before Vue mounts or renders anything
onBeforeMount(() => {
    shuffleArray(images)
})

onMounted(() => {
    intervalId = window.setInterval(() => {
        if (!carousel.value) return

        const el = carousel.value
        const item = el.querySelector('.carousel-item')
        if (!item) return

        const step = item.clientWidth
        const maxScroll = el.scrollWidth - el.clientWidth

        if (el.scrollLeft + step >= maxScroll) {
            // loop back
            el.scrollTo({ left: 0, behavior: 'smooth' })
        } else {
            el.scrollBy({ left: step, behavior: 'smooth' })
        }
    }, 3000)
})

onBeforeUnmount(() => {
    clearInterval(intervalId)
})
</script>

<template>
    <div
      ref="carousel"
      class="carousel carousel-start rounded-box m-5 overflow-x-auto"
    >
      <div
        v-for="(src, i) in images"
        :key="i"
        class="carousel-item w-[25vw] h-auto"
      >
        <img :src="src" alt="" class="object-cover w-full h-full" />
      </div>
    </div>
  </template>