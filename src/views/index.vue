<template>
    <div>
        <TabGroup>
            <TabList as="md-tabs" class="sticky top-0 z-50">
                <Tab as="md-tab" @click="goTop">Overview</Tab>
                <Tab as="md-tab" @click="goTop">Following News</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <Overview></Overview>
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
import Overview from '@/components/Overview.vue';
import SteamFollowingNews from '@/components/SteamFollowingNews.vue'
import { Ref, inject } from 'vue';

const contentWindow = inject('contentWindowRef') as Ref<HTMLElement>
const goTop = () => {
    contentWindow.value.scrollTop = 0
}
</script>

<style scoped>

</style>