<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { ref, watchEffect } from 'vue'
import { toRefs } from 'vue'
import { reactive } from 'vue'

const route = useRoute()
const email = computed(() => route.query.email ?? '')

const data = ref(null)
const error = ref(null)
const loading = ref(false)

const submitData = ref(null)
const submitError = ref(null)
const submitLoading = ref(false)
const submitCompleted = ref(false)

const props = defineProps({
    formHeader: {
        type: String,
        default: '',
    },
    formCopyText: {
        type: String,
        default: '',
    },
})
const { formHeader, formCopyText } = toRefs(props)

// 1) Define your form structure up front
const form = reactive({
    documentId: '',
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

    console.log(formHeader)
    console.log(formCopyText)

    const e = email.value
    if (!e) return

    loading.value = true
    let canceled = false
    onInvalidate(() => { canceled = true })

    try {
        const res = await fetch(
            `${import.meta.env.VITE_API_URL}/api/savethedate/fetch`, {
            method: "POST",
            body: JSON.stringify({ email: e }),
        })
        if (canceled) return
        if (!res.ok) throw new Error(res.statusText)

        const payload = await res.json()
        data.value = payload;
        const record = payload.data[0]
        // shallow-copy top‑level props
        form.documentId = record.documentId,
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
            attending: record.saveTheDate?.attending === true ? true : false,
            totalAttending: record.saveTheDate?.totalAttending,
            notes: record.saveTheDate?.notes || ''
        }
        form.address = {
            street: record.address?.street || '',
            city: record.address?.city || '',
            province: record.address?.province || '',
            postalCode: record.address?.postalCode || '',
            country: record.address?.country || ''
        }

    } catch (err) {
        if (!canceled) error.value = err
    } finally {
        if (!canceled) loading.value = false
    }
})

function addInvitee() {
    form.invitee.push({ firstName: '', lastName: '' });
}

function removeInvitee(invitee) {
    const idx = form.invitee.indexOf(invitee);
    if (idx !== -1) form.invitee.splice(idx, 1);
}

async function saveTheDate() {

    submitLoading.value = true;

    let canceled = false;
    try {
        const res = await fetch(
            `${import.meta.env.VITE_API_URL}/api/savethedate/submit`, {
            method: "POST",
            body: JSON.stringify(form),
        })

        if (canceled) return
        if (!res.ok) throw new Error(res.statusText)

        const payload = await res.json()
        submitLoading.value = false;
        submitData.value = payload
        submitCompleted.value = true;

    } catch (err) {
        if (!canceled) submitError.value = err
    } finally {
        if (!canceled) submitLoading.value = false
    }
}
</script>

<template>
    <div v-if="loading">Loading…</div>
    <div v-else-if="error">Error: {{ error.message }}</div>
    <template v-else-if="data">



        <div class="">
            <div class="card-body">
                <!-- <h2 class="card-title">{{ formHeader }}</h2> -->
                <!-- {{ form }} -->

                <!-- <p>{{ formCopyText }}</p> -->

                <h2 class="text-2xl font-semibold">{{ formHeader }}</h2>
                <p class="mt-4 text-xl">
                    {{ formCopyText }}
                </p>

                <div class="form-control w-full">
                    <fieldset class="fieldset">
                        <legend class="fieldset-legend">Attending</legend>
                        <label class="label">
                            <input v-model="form.saveTheDate.attending" type="checkbox" checked="checked"
                                class="toggle" />
                            {{ form.saveTheDate.attending === false ? "No" : "Yes" }}
                        </label>
                    </fieldset>

                    <template v-if="form.saveTheDate.attending === true">

                        <fieldset class="fieldset">
                            <legend class="fieldset-legend">First Name</legend>
                            <input v-model="form.firstName" type="text" class="input w-full" placeholder="First Name" />
                        </fieldset>


                        <fieldset class="fieldset">
                            <legend class="fieldset-legend">Last Name</legend>
                            <input v-model="form.lastName" type="text" class="input w-full" placeholder="First Name" />
                        </fieldset>

                        <fieldset class="fieldset">
                            <legend class="fieldset-legend">Email</legend>
                            <input v-model="form.email" type="text" class="input w-full" placeholder="First Name" />
                        </fieldset>

                        <h2 class="card-title">Invitees</h2>

                        <template v-for="(guest, idx) in form.invitee" :key="idx">
                            <div class="relative bg-cover bg-no-repeat bg-center w-full">
                                <fieldset class="fieldset">
                                    <legend class="fieldset-legend">Guest {{ idx + 1 }}</legend>

                                    <label class="label">First Name</label>
                                    <input v-model="guest.firstName" type="text" class="input w-full"
                                        placeholder="First Name" />

                                    <label class="label">Last Name</label>
                                    <input v-model="guest.lastName" type="text" class="input w-full"
                                        placeholder="Last Name" />

                                    <p class="label flex justify-end"><button @click="removeInvitee(guest)"
                                            class="btn btn-error mt-4"><svg xmlns="http://www.w3.org/2000/svg"
                                                height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3">
                                                <path
                                                    d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                                            </svg></button></p>
                                </fieldset>
                            </div>
                        </template>

                        <p class="label flex justify-end" v-if="form.invitee.length < form.saveTheDate.totalAttending">
                            <button @click="addInvitee" class="btn btn-soft btn-neutral mt-4">Add Guest</button>
                        </p>


                        <fieldset class="fieldset">
                            <legend class="fieldset-legend">Address</legend>

                            <label class="label">Street</label>
                            <input v-model="form.address.street" type="text" class="input w-full"
                                placeholder="Street Name" />

                            <label class="label">City</label>
                            <input v-model="form.address.city" type="text" class="input w-full"
                                placeholder="City Name" />

                            <label class="label">Province</label>
                            <input v-model="form.address.province" type="text" class="input w-full"
                                placeholder="Province Name" />

                            <label class="label">Postal Code</label>
                            <input v-model="form.address.postalCode" type="text" class="input w-full"
                                placeholder="Postal Code Name" />

                            <label class="label">Country</label>
                            <input v-model="form.address.country" type="text" class="input w-full"
                                placeholder="Country Name" />
                        </fieldset>

                        <fieldset class="fieldset">
                            <legend class="fieldset-legend">Additional Notes</legend>
                            <textarea class="textarea input w-full" v-model="form.saveTheDate.notes"></textarea>
                        </fieldset>
                    </template>


                    <div v-if="!submitCompleted">

                        <div class="card-actions justify-end" v-if="!submitLoading">
                            <button @click="saveTheDate()" class="btn btn-primary mt-4">Submit</button>
                        </div>
                        <div class="card-actions justify-end" v-if="submitLoading">
                            <span class="loading loading-spinner text-primary"></span>
                        </div>
                    </div>
                    <template v-else-if="submitCompleted">
                        <p>Thank you for submitting your information, we hope to see you soon!</p>
                    </template>
                </div>
            </div>
        </div>


    </template>

</template>
