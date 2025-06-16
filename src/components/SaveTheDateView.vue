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
            `${import.meta.env.VITE_API_URL}/api/email`
        )
        if (canceled) return
        if (!res.ok) throw new Error(res.statusText)
        data.value = await res.json()
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
    <div v-else-if="data">
        {{ data }}
    </div>
</template>