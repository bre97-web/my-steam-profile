<template>
    <div>
        <label>
            <h1>Dark Mode</h1>
            <DarkSwitch></DarkSwitch>
        </label>
    </div>
</template>

<script setup lang="ts">
import DarkSwitch from '@/components/DarkSwitch.vue';


</script>

<style scoped>
h1 {
    @apply text-xl;
}
</style>