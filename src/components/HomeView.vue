<script>

import SavetheDateView from "./SaveTheDateView.vue"
import CarouselView from "./CarouselView.vue"

export default {

    components: {
        SavetheDateView,
        CarouselView
    },
    methods: {
        goToAbout() {
            this.$router.push('/about')
        },
    },
}
</script>

<template>

    <div class="hero min-h-[60vh] bg-cover bg-bottom bg-no-repeat bg-opacity-75"
        style="background-image: url('https://carol-alexandre-wedding.s3.ca-central-1.amazonaws.com/pexels_kovyrina_1692984_22b8b1f82e.jpg')">
        <div class="hero-content text-center bg-white/30 backdrop-invert backdrop-opacity-10 p-10 rounded-box"    
        >
            <div class="max-w-md">
                <h1 class="text-5xl font-bold">Carol & Alexandre</h1>
                <p class="py-6">
                    The Second of August 2026<br/>
                    Cedar Island, Orillia
                    </p>
                <!-- <button class="btn btn-primary">Get Started</button> -->
            </div>
        </div>
    </div>

    <div class="md:max-w-[80vw] mx-auto m-5 z-25 relative">
        <div
            class="card relative flex w-full flex-col md:flex-row bg-secondary rounded-box p-10 py-[5rem] items-stretch">
            <!-- Text side -->
            <div class="w-full md:w-1/2 card p-5 flex flex-col justify-start">
                <h2 class="text-5xl z-10 mb-10">You are invited for Tea</h2>
                <p class="text-3xl z-10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rhoncus
                    ex a bibendum cursus. In dignissim lacinia risus, a ornare lacus fermentum
                    et. Donec turpis odio, pretium et magna a, malesuada dapibus ex. Cras
                    congue blandit nunc eget varius.
                </p>
            </div>

            <!-- Divider -->
            <div class="divider hidden md:flex divider-horizontal"></div>

            <!-- Image side -->
            <div class="w-full md:w-1/2 card">
                <div class="w-full min-h-[300px] md:h-full rounded-box bg-cover bg-bottom bg-no-repeat"
                    style="background-image: url('https://carol-alexandre-wedding.s3.ca-central-1.amazonaws.com/pexels_fu_zhichao_176355_587739_40ccde9105.jpg')">
                </div>
            </div>
        </div>
    </div>

    <div class="hero bg-base-500">
        <CarouselView />
    </div>

    <div class="hero bg-base-500">
        <SavetheDateView />
    </div>

    <footer class="footer sm:footer-horizontal p-10 mh-10">
        
    </footer>
</template>