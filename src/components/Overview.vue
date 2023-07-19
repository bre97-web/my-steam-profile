<template>
    <div class="p-6">
        <div class="">
            <h1 class="text-2xl mb-4">Recent Played</h1>
            <RecentGames></RecentGames>
        </div>

        <div class="">
            <h1 class="text-2xl mb-4">Library</h1>
            <OwnedGames></OwnedGames>
        </div>
    </div>
</template>

<script setup lang="ts">
import RecentGames from './RecentGames.vue';
import OwnedGames from './OwnedGames.vue';


</script>

<style scoped>

</style>