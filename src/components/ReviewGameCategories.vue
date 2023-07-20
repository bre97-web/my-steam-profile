<template>
    <md-chip-set>
        <md-suggestion-chip v-for="e in props.categories" :key="e.id" :label="e.description"></md-suggestion-chip>
    </md-chip-set>
</template>

<script setup lang="ts">
const props = defineProps<{
    categories: [{
        id: number;
        description: string;
    }] | null
}>()
</script>

<style scoped></style>