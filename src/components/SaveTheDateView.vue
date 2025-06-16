<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { ref, watchEffect } from 'vue'
import { reactive } from 'vue'

const route = useRoute()
const email = computed(() => route.query.email ?? '')

const data = ref(null)
const error = ref(null)
const loading = ref(false)

// 1) Define your form structure up front
const form = reactive({
    id: null,
    documentId: '',
    firstName: '',
    lastName: '',
    email: '',
    invitee: [],
    address: {
        street: '', city: '', province: '', postalCode: '', country: ''
    },
    confirmSaveTheDate: false,
    saveTheDate: {
        attending: false,
        totalAttending: 0,
        notes: ''
    }
})

watchEffect(async (onInvalidate) => {
    const e = email.value
    if (!e) return

    loading.value = true
    let canceled = false
    onInvalidate(() => { canceled = true })

    try {
        const res = await fetch(
            `${import.meta.env.VITE_API_URL}/api/form`, {
            method: "POST",
            body: JSON.stringify({ email: e }),
        })
        if (canceled) return
        if (!res.ok) throw new Error(res.statusText)

        const payload = await res.json()
        data.value = payload;
        const record = payload.data[0]
        // shallow-copy top‑level props
        form.id = record.id
        form.documentId = record.documentId
        form.firstName = record.firstName || ''
        form.lastName = record.lastName || ''
        form.email = record.email || ''
        form.invitee = (record.invitee || []).map(g => ({
            firstName: g.firstName || '',
            lastName: g.lastName || ''
        }))
        form.saveTheDate = {
            attending: record.saveTheDate?.attending ?? false,
            totalAttending: form.invitee.length,
            notes: record.saveTheDate?.notes || ''
        }
        form.address = {
            street: '', city: '', province: '', postalCode: '', country: ''
        }

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
                        <h2 class="card-title">Save the Date</h2>
                        <!-- {{ form }} -->

                        <p>Lorem ipsum asking to fill form.</p>

                        <fieldset class="fieldset">
                            <legend class="fieldset-legend">Attending</legend>
                            <label class="label">
                                <input v-model="form.confirmSaveTheDate" type="checkbox" checked="checked"
                                    class="toggle" />
                                {{ form.confirmSaveTheDate === false ? "No" : "Yes" }}
                            </label>
                        </fieldset>

                        <template v-if="form.confirmSaveTheDate === true">

                            <fieldset class="fieldset">
                                <legend class="fieldset-legend">First Name</legend>
                                <input v-model="form.firstName" type="text" class="input" placeholder="First Name" />
                            </fieldset>


                            <fieldset class="fieldset">
                                <legend class="fieldset-legend">Last Name</legend>
                                <input v-model="form.lastName" type="text" class="input" placeholder="First Name" />
                            </fieldset>

                            <fieldset class="fieldset">
                                <legend class="fieldset-legend">Email</legend>
                                <input v-model="form.email" type="text" class="input" placeholder="First Name" />
                            </fieldset>

                            <h2 class="card-title">Invitees</h2>

                            <template v-for="(guest, idx) in form.invitee" :key="idx">
                                <fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                                    <legend class="fieldset-legend">Guest {{ idx + 1 }}</legend>

                                    <label class="label">First Name</label>
                                    <input v-model="guest.firstName" type="text" class="input"
                                        placeholder="First Name" />

                                    <label class="label">Last Name</label>
                                    <input v-model="guest.lastName" type="text" class="input" placeholder="Last Name" />

                                    <p class="label flex justify-end"><button class="btn btn-neutral mt-4"><svg
                                                xmlns="http://www.w3.org/2000/svg" height="24px"
                                                viewBox="0 -960 960 960" width="24px" fill="#e3e3e3">
                                                <path
                                                    d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                                            </svg></button></p>
                                </fieldset>
                            </template>

                            <fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                                <legend class="fieldset-legend">Address</legend>

                                <label class="label">Street</label>
                                <input v-model="form.address.street" type="text" class="input"
                                    placeholder="Street Name" />

                                <label class="label">City</label>
                                <input v-model="form.address.city" type="text" class="input"
                                    placeholder="City Name" />

                                <label class="label">Province</label>
                                <input v-model="form.address.province" type="text" class="input"
                                    placeholder="Province Name" />

                                <label class="label">Postal Code</label>
                                <input v-model="form.address.postalCode" type="text" class="input"
                                    placeholder="Postal Code Name" />

                                <label class="label">Country</label>
                                <input v-model="form.address.country" type="text" class="input"
                                    placeholder="Country Name" />
                            </fieldset>


                        </template>


                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </template>

</template>