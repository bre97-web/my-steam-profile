<template>
  <div class="relative container mx-auto flex h-screen bg-[var(--md-sys-color-background)]">
    <NavigationBar>
      <md-standard-icon-button @click="isOpenAside = !isOpenAside">
        <md-icon>settings</md-icon>
      </md-standard-icon-button>
    </NavigationBar>

    <main class="flex flex-col flex-grow bg-[var(--md-sys-color-background)] w-full overflow-clip min-h-screen">
      <PageTitle></PageTitle>
      <div class="w-full h-full bg-[var(--md-sys-color-surface-container-lowest)] overflow-scroll">
        <router-view></router-view>
      </div>      
    </main>

    <div class="hidden lg:block w-full max-w-md bg-red-300">1</div>

    <AsideWindow :is-open="isOpenAside" :set-is-open="(e: boolean) => isOpenAside = e" class="overflow-scroll">
      <DarkSwitch></DarkSwitch>
    </AsideWindow>
  </div>
</template>

<script setup lang="ts">
import NavigationBar from '@/components/NavigationBar.vue'
import { computed, onMounted, onUnmounted, ref } from 'vue';
import AsideWindow from './components/AsideWindow.vue';
import DarkSwitch from './components/DarkSwitch.vue';
import PageTitle from './components/PageTitle.vue';





const isOpenAside = ref(false)
const topNavRef = ref()
var innerHeight = ref(window.innerHeight)
const updateInnerHeight = () => {
  innerHeight.value = window.innerHeight
}
onMounted(() => {
  window.addEventListener('resize', updateInnerHeight)
})
onUnmounted(() => {
  window.removeEventListener('resize', updateInnerHeight)
})
const EffectiveHeight = computed(() => {
  if (topNavRef.value == undefined) {
    return ''
  }
  return 'height:' + (innerHeight.value - topNavRef.value.clientHeight) + 'px'
})
</script>

<style scoped></style>