<template>
    <div>
        <img :src="props.avatar">
    </div>
</template>

<script setup lang="ts">


const props = defineProps<{
    avatar: string
}>()
</script>

<style scoped>

</style>