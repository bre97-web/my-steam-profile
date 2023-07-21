<template>
    <h1 class="font-black text-2xl">
        {{ router.currentRoute.value.name }}
    </h1>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';


const router = useRouter()
</script>

<style scoped>

</style>