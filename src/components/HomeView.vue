<script setup>
import { ref, watch, nextTick, onUnmounted } from 'vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'


const data = ref(null)
const error = ref(null)
const loading = ref(false)

const mapEl = ref(null)
let map = null

const parkingPins = [
    { lat: 44.607874971619395, lng: -79.40781656789056, label: 'Parking lot 1' },
    { lat: 44.60975215251213, lng: -79.41097963924729, label: 'Parking lot 2' },
]

async function initMap() {
    if (!mapEl.value || map) return

    map = L.map(mapEl.value).setView([44.6095657, -79.4089769], 17)

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map)

    parkingPins.forEach((pin) => {
        L.marker([pin.lat, pin.lng], { icon: L.icon({ iconUrl: 'https://carol-alexandre-wedding.s3.ca-central-1.amazonaws.com/bus_v3_7cf562106e.png', iconSize: [48, 26], iconAnchor: [24, 12] }) })
            .addTo(map)
            .bindPopup(pin.label)


    })

    L.marker([44.610155499094994, -79.40542053524905], { icon: L.icon({ iconUrl: 'https://carol-alexandre-wedding.s3.ca-central-1.amazonaws.com/portrait_v3_2d0fc9eea5.png', iconSize: [62, 50], iconAnchor: [31, 20] }) })
        .addTo(map)
        .bindPopup('191 Cedar Island Rd, Orillia')
}

watch(data, async (newData) => {
    if (!newData) return
    await nextTick()
    initMap()
})

async function fetchData() {
    loading.value = true
    try {
        const res = await fetch(
            `${import.meta.env.VITE_API_URL}/api/save-the-date-page?populate=*`
        )
        if (!res.ok) throw new Error(res.statusText)

        const payload = await res.json()
        data.value = payload.data

        console.log(payload.data)
    } catch (err) {
        error.value = err
    } finally {
        loading.value = false
    }
}

fetchData()

onUnmounted(() => {
    if (map) {
        map.remove()
        map = null
    }
})
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

            <img src="https://carol-alexandre-wedding.s3.ca-central-1.amazonaws.com/portrait_v3_2d0fc9eea5.png"
                alt="Carol & Alexandre" class="h-100 w-auto object-contain block mx-auto relative z-20" />
        </section>


        <!-- Blue section pulled up UNDER the portrait -->
        <section class="relative pt-60 pb-16 -mt-75 bg-cover bg-no-repeat bg-center w-full" style="background-image:url('https://carol-alexandre-wedding.s3.ca-central-1.amazonaws.com/Bg_blue_04df1a7b42.png');
                background-size: 100% 100%;
                ">
            <div class="container mx-auto text-white relative px-5 md:px-20">
                <h2 class="text-2xl font-semibold text-center">{{ data.bodyCopyHeader }}</h2>
                <p class="mt-4 text-xl text-center">
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

                    <div class="container mx-auto text-black relative px-5 md:px-20">
                        <h2 class="text-2xl font-semibold text-center">{{ data.scheduleheader }}</h2>
                        <div class="text-xl text-center flex flex-col gap-2 mt-4 last-bottom h-8/10">
                            <template v-for="item, index in data.schedulecopy" :key="index">
                                <template v-for="child in item.children">
                                    <h2 class="mt-4 text-xl font-semibold text-center" v-if="item.type === 'heading'">{{
                                        child.text }}</h2>
                                    <p v-if="item.type != 'heading' && index != data.schedulecopy.length - 1"
                                        class="mt-0 text-lg text-center">{{ child.text }}</p>
                                    <p v-if="item.type != 'heading' && index === data.schedulecopy.length - 1"
                                        class="mt-auto text-md text-center mt-auto italic">{{ child.text }}</p>
                                </template>
                            </template>
                        </div>
                    </div>
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
                            <h1 class="text-2xl font-semibold">{{ data.dresscodeHeader }}</h1>
                            <p class="py-6 text-xl">
                                {{ data.dresscodeCopy }}
                            </p>
                        </div>


                        <div class="carousel carousel-center rounded-box flex gap-4 p-4">
                            <template v-for="(item, index) in data.dresscodeImages" :key="index">
                                <div class="carousel-item w-1/3"
                                    :onclick="`document.getElementById('my_modal_${index}').showModal()`">
                                    <img :src="item.url" alt="Dress code image" />
                                </div>

                                <dialog :id="`my_modal_${index}`" class="modal">
                                    <div class="modal-box">
                                        <img :src="item.url" alt="Dress code image" />
                                    </div>
                                    <form method="dialog" class="modal-backdrop">
                                        <button>close</button>
                                    </form>
                                </dialog>
                            </template>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="relative px-5 py-24 md:px-20 bg-cover bg-no-repeat bg-center w-full" style="background-image:url('https://carol-alexandre-wedding.s3.ca-central-1.amazonaws.com/Bg_blue_04df1a7b42.png');
                background-size: 100% 100%;
                ">
            <div class="container mx-auto text-white relative px-5 md:px-20 text-center">

                <div class="text-center mb-4">
                    <h1 class="text-2xl font-semibold">{{ data.parkingHeader }}</h1>
                    <p class="py-6 text-xl">
                        {{ data.parkingCopy }}
                    </p>
                </div>

                <div ref="mapEl" class="w-full h-[500px] rounded-box overflow-hidden "></div>

                <!-- <figure class="w-1/4 mx-auto my-0">
                    <img src="https://carol-alexandre-wedding.s3.ca-central-1.amazonaws.com/bus_v3_7cf562106e.png"
                        alt="" class="object-contain w-full h-auto" />
                </figure> -->
            </div>
        </section>

        <!-- Form section -->
        <section class="relative px-5 py-24 md:px-20 bg-cover bg-no-repeat bg-center w-full" style="background-image:url('https://carol-alexandre-wedding.s3.ca-central-1.amazonaws.com/Bg_pink_9003ba9237.png');
                background-size: 100% 100%;
                ">
            <div class="flex flex-wrap gap-4 justify-center">

                <div class="w-full md:w-[48%] flex justify-center">

                    <div class="container mx-auto text-black relative px-5 md:px-20">
                        <h2 class="text-2xl font-semibold text-center">{{ data.hotelHeader }}</h2>
                        <div class="text-xl text-center flex flex-col gap-2 mt-4 last-bottom h-8/10">
                            <template v-for="item, index in data.hotelCopyBlocks" :key="index">
                                <template v-for="child in item.children">

                                    <p v-if="item.type != 'heading' && index != data.schedulecopy.length - 1"
                                        class="mt-0 text-lg text-center">{{ child.text }}</p>
                                    <p v-if="item.type != 'heading' && index === data.schedulecopy.length - 1"
                                        class="mt-auto text-md text-center mt-auto italic">{{ child.text }}</p>

                                    <template v-for="children in child.children">
                                        <a class="font-medium text-fg-brand hover:italic underline" :href="child.url"
                                            target="_blank">{{ children.text }}</a>
                                    </template>

                                </template>
                            </template>
                        </div>
                    </div>
                </div>

                <div class="w-full md:w-[48%] flex justify-center">
                    <div class="">

                        <figure class="w-full">
                            <img src="https://carol-alexandre-wedding.s3.ca-central-1.amazonaws.com/airplane_811094ba0d.png"
                                alt="" class="object-contain w-full h-auto" />
                        </figure>
                    </div>
                </div>


            </div>

        </section>

        <!-- Yellow hero with background-image -->
        <section class="relative px-5 py-24 md:px-20 bg-cover bg-no-repeat bg-center w-full" style="background-image:url('https://carol-alexandre-wedding.s3.ca-central-1.amazonaws.com/Bg_yellow_4fb2940800.png'); background-size: 100% 80%; background-position-y: 0;">
            <div class="text-center">
                <h2 class="text-2xl font-semibold text-center">{{ data.giftHeader }}</h2>
                <p class="py-6 text-4xl">
                    <template v-for="item, index in data.giftCopy" :key="index">
                        <template v-for="child in item.children">

                            <p v-if="item.type != 'heading' && index != data.giftCopy.length - 1"
                                class="mt-0 text-lg text-center">{{ child.text }}</p>

                            <template v-for="children in child.children">
                                <a class="font-medium text-fg-brand hover:italic underline" :href="child.url"
                                    target="_blank">{{ children.text }}</a>
                            </template>

                        </template>
                    </template>
                </p>
            </div>

            <img src="https://carol-alexandre-wedding.s3.ca-central-1.amazonaws.com/teacup_pink_295c909ee3.png"
                alt="Carol & Alexandre" class="h-100 w-auto object-contain block mx-auto relative z-20" />
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