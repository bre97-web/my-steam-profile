<template>
  <div class="relative container mx-auto flex flex-col-reverse md:flex-row h-screen bg-[var(--md-sys-color-background)]">
    <NavigationBar></NavigationBar>

    <main class="border-x flex flex-col flex-grow w-full overflow-clip h-full md:min-h-screen">
      <PageTitle class="hidden md:block pl-2 pb-2"></PageTitle>
      <div id="contentWindow" ref="contentWindowRef" class="w-full h-full bg-[var(--md-sys-color-surface-container-lowest)] overflow-scroll">
        <router-view></router-view>
      </div>      
    </main>

    <ReviewPanel></ReviewPanel>
  </div>
</template>

<script setup lang="ts">
import NavigationBar from '@/components/NavigationBar.vue'
import PageTitle from './components/PageTitle.vue';
import { useThemeStore } from './store/useThemeStore';
import { onMounted, provide, ref } from 'vue';
import ReviewPanel from '@/components/ReviewPanel.vue'

/**
 * Sync Dark Mode
 */
const theme = useThemeStore()
onMounted(() => {
    theme.syncDarkTheme()
})

const contentWindowRef = ref()
/**
 * Provide contentWindowRef
 */
provide('contentWindowRef', contentWindowRef)
</script>

<style scoped></style>