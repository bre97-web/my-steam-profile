<template>
    <h1 class="font-bold text-4xl">{{ props.name }}</h1>
</template>

<script setup lang="ts">

const props = defineProps<{
    name: string | null
}>()
</script>

<style scoped>

</style>