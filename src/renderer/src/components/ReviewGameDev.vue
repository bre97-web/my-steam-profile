<template>
    <div class="text-xs flex flex-wrap gap-2">
        <p v-for="e in props.developers" :key="e">{{ e }}</p>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    developers: string[]
}>()
</script>

<style scoped></style>