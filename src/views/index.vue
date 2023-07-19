<template>
    <div>
        <ProfileCardAvatar></ProfileCardAvatar>
        
        <div>
            <h1 class="text-4xl">Recent Games</h1>
            <RecentGames></RecentGames>
        </div>
    </div>
</template>

<script setup lang="ts">
import ProfileCardAvatar from '@/components/ProfileAvatar.vue'
import RecentGames from '@/components/RecentGames.vue';
</script>

<style scoped>

</style>