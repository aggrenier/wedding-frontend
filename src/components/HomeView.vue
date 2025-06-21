<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { ref, watchEffect } from 'vue'
import { reactive } from 'vue'

import SavetheDateView from "./SaveTheDateView.vue"
import CarouselView from "./CarouselView.vue"

// reactive state
const data = ref(null)
const error = ref(null)
const loading = ref(false)

// 1) Define your form structure up front
const content = reactive({
    formHeader: "",
    formCopyText: ""
})

watchEffect(async (onInvalidate) => {

    loading.value = true
    let canceled = false
    onInvalidate(() => { canceled = true })

    try {
        const res = await fetch(
            `${import.meta.env.VITE_API_URL}/api/save-the-date-page`, {
            method: "get",
        })
        if (canceled) return
        if (!res.ok) throw new Error(res.statusText)

        const payload = await res.json()
        data.value = payload.data;
        console.log(data.value)

    } catch (err) {
        if (!canceled) error.value = err
    } finally {
        if (!canceled) loading.value = false
    }
})


// router instance
const router = useRouter()

// methods become plain functions
function goToAbout() {
    router.push('/about')
}
</script>

<template>

    <div v-if="loading"></div>
    <template v-else-if="data">

        <!-- Yellow hero with background-image -->
        <section class="relative z-0 bg-contain bg-no-repeat bg-top py-24 z-10 " style="background-image:url('https://carol-alexandre-wedding.s3.ca-central-1.amazonaws.com/Bg_yellow_4fb2940800.png');
            background-size: auto 80%;
            ">
            <div class="text-center">
                <h1 class="text-5xl font-bold">{{ data.pageHeader }}</h1>
                <p class="py-6 text-4xl">
                    {{ data.pageSubHeaderOne }}<br />
                    {{ data.pageSubHeaderTwo }}
                </p>
            </div>

            <!-- Portrait: block + centered + negative bottom margin + high z-index -->
            <img src="https://carol-alexandre-wedding.s3.ca-central-1.amazonaws.com/portrait_v3_2d0fc9eea5.png"
                alt="Carol & Alexandre" class="h-100 w-auto object-contain block mx-auto relative z-20" />
            <!-- class="block mx-auto relative z-20 -mb-16 w-64 md:w-80" /> -->
        </section>


        <!-- Blue section pulled up UNDER the portrait -->
        <section class="relative pt-60 pb-16 -mt-75 bg-cover bg-no-repeat bg-center w-full" style="background-image:url('https://carol-alexandre-wedding.s3.ca-central-1.amazonaws.com/Bg_blue_04df1a7b42.png');
                background-size: 100% 100%;
                ">
            <div class="container mx-auto text-white relative px-5 md:px-20">
                <h2 class="text-2xl font-semibold">{{ data.bodyCopyHeader }}</h2>
                <p class="mt-4 text-xl">
                    {{ data.bodyCopyText }}
                </p>
            </div>
        </section>

        <!-- Form section -->
        <section class="relative px-5 py-24 md:px-20 bg-cover bg-no-repeat bg-center w-full" style="background-image:url('https://carol-alexandre-wedding.s3.ca-central-1.amazonaws.com/Bg_pink_9003ba9237.png');
                background-size: 100% 100%;
                ">
            <div class="flex flex-wrap gap-4 justify-center">

                <div class="w-full md:w-[48%] flex justify-center">
                    <div class="">

                        <figure class="w-full">
                            <img src="https://carol-alexandre-wedding.s3.ca-central-1.amazonaws.com/street_sign_v2_4ba14a539e.png"
                                alt="" class="object-contain w-full h-auto" />
                        </figure>
                    </div>
                </div>

                <div class="w-full md:w-[48%] flex justify-center">
                    <SavetheDateView :formHeader="data.formHeader" :formCopyText="data.formCopyText" />
                </div>
            </div>

        </section>

        <!-- Form section -->
        <section class="relative px-5 py-24 md:px-20 bg-cover bg-no-repeat bg-center w-full" style="background-image:url('https://carol-alexandre-wedding.s3.ca-central-1.amazonaws.com/Bg_yellow_4fb2940800.png');
                background-size: 100% 100%;
                ">
            <div class="flex flex-wrap gap-4 justify-center">
                <div class="w-full flex justify-center">
                    <div class="">
                        <div class="text-center">
                            <h1 class="text-2xl font-semibold">{{ data.moreInfoHeader }}</h1>
                            <p class="py-6 text-xl">
                                {{ data.moreInfoCopyText }}
                            </p>
                        </div>
                        <figure class="w-full">
                            <img src="https://carol-alexandre-wedding.s3.ca-central-1.amazonaws.com/bus_v3_7cf562106e.png"
                                alt="" class="object-contain w-full h-auto" />
                        </figure>
                    </div>
                </div>
            </div>
        </section>

        <footer class="footer sm:footer-horizontal p-10 mh-10">
            <div class="text-center">
                <p class="py-6 text-xl">
                    Carol & Alexandre
                </p>
            </div>
        </footer>
    </template>
</template>