<template>
    <div>
        <TabGroup>
            <TabList as="md-tabs" class="sticky top-0">
                <Tab as="md-tab">Steam News</Tab>
                <Tab as="md-tab">Following</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <SteamNews></SteamNews>
                </TabPanel>

                <TabPanel>
                    <SteamFollowingNews></SteamFollowingNews>
                </TabPanel>
            </TabPanels>
        </TabGroup>
    </div>
</template>

<script setup lang="ts">
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import SteamNews from '@/components/SteamNews.vue';
import SteamFollowingNews from '@/components/SteamFollowingNews.vue'
</script>

<style scoped>

</style>