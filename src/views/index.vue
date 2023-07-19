<template>
    <div>
        <TabGroup>
            <TabList as="md-tabs" class="sticky top-0">
                <Tab as="md-tab">Steam News</Tab>
                <Tab as="md-tab">Following</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>1</TabPanel>
                <TabPanel>2</TabPanel>
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
</script>

<style scoped>

</style>