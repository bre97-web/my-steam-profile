<template>
    <div>
        <TabGroup>
            <TabList as="md-tabs" class="sticky top-0">
                <Tab as="md-tab">Steam News</Tab>
                <Tab as="md-tab">Following</Tab>
            </TabList>
            <TabPanels class="px-2">
                <TabPanel>
                    <SteamNews></SteamNews>
                </TabPanel>

                <TabPanel>
                    <SteamFollowingNews></SteamFollowingNews>
                </TabPanel>
            </TabPanels>
        </TabGroup>

        <div>
            <h1 class="text-4xl">Recent Games</h1>
            <RecentGames></RecentGames>
        </div>
    </div>
</template>

<script setup lang="ts">
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import RecentGames from '@/components/RecentGames.vue';
import SteamNews from '@/components/SteamNews.vue';
import SteamFollowingNews from '@/components/SteamFollowingNews.vue'
</script>

<style scoped>

</style>