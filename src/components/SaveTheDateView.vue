<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import { ref, watchEffect } from 'vue'

const route = useRoute()
const email = computed(() => route.query.email ?? '')

const data = ref(null)
const error = ref(null)
const loading = ref(false)

watchEffect(async (onInvalidate) => {
    const e = email.value     // <-- read the string so it’s tracked
    if (!e) return            // same as checking length

    loading.value = true
    let canceled = false
    onInvalidate(() => { canceled = true })

    try {
        const res = await fetch(
            `${import.meta.env.VITE_API_URL}/api/form`, {
            method: "POST",
            body: JSON.stringify({ email: e }),
        }

        )
        if (canceled) return
        if (!res.ok) throw new Error(res.statusText)
        data.value = await res.json()
        console.log(data)
    } catch (err) {
        if (!canceled) error.value = err
    } finally {
        if (!canceled) loading.value = false
    }
})

</script>

<template>
    <div v-if="loading">Loading…</div>
    <div v-else-if="error">Error: {{ error.message }}</div>
    <template v-else-if="data">


        <div class="flex flex-wrap gap-4 justify-center bg-base-300 py-10">
            <!-- Column 1: make it a flex container -->
            <div class="w-full md:w-[48%] flex justify-center">
                <div class="card bg-base-300 rounded-box p-4">
                    <!-- wrap your image in a <figure> for a DaisyUI card -->
                    <figure class="w-full">
                        <img src="https://carol-alexandre-wedding.s3.ca-central-1.amazonaws.com/IMG_1809_42aec5b021.jpeg"
                            alt="" class="object-contain w-full h-auto" />
                    </figure>
                </div>
            </div>

            <!-- Column 2: same thing -->
            <div class="w-full md:w-[48%] flex justify-center">
                <div class="card card-border bg-base-300 w-96">
                    <div class="card-body">
                        <h2 class="card-title">Card Title</h2>
                        <p>
                            A card component has a figure, a body part, and inside body there are title and actions
                            parts
                        </p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </template>

</template>