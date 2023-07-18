<template>
    <div class="px-4 py-2">
        <router-link to="/">
            Overview
        </router-link>
        <router-link to="/api-list">
            Apis
        </router-link>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.active {
    @apply font-black;
}
</style>