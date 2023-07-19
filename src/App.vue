<template>
  <div class="relative container mx-auto flex flex-col-reverse md:flex-row h-screen bg-[var(--md-sys-color-background)]">
    <NavigationBar></NavigationBar>

    <main class="border-x flex flex-col flex-grow w-full overflow-clip h-full md:min-h-screen">
      <PageTitle class="hidden md:block pl-2 pb-2"></PageTitle>
      <div class="w-full h-full bg-[var(--md-sys-color-surface-container-lowest)] overflow-scroll">
        <router-view></router-view>
      </div>      
    </main>

    <div class="hidden lg:block w-full max-w-md bg-red-300">1</div>
  </div>
</template>

<script setup lang="ts">
import NavigationBar from '@/components/NavigationBar.vue'
import PageTitle from './components/PageTitle.vue';
import { useThemeStore } from './store/useThemeStore';
import { onMounted } from 'vue';


/**
 * Sync Dark Mode
 */
const theme = useThemeStore()
onMounted(() => {
    theme.syncDarkTheme()
})
</script>

<style scoped></style>