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
import { onBeforeMount, onMounted, provide, ref } from 'vue';
import ReviewPanel from '@/components/ReviewPanel.vue'
import { getAccount } from './scripts/account';
import { useRouter } from 'vue-router';

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

const router = useRouter()
onBeforeMount(() => {
  if(getAccount().steamid === '') {
    router.push('/oobe')
  }
})
</script>

<style scoped></style>