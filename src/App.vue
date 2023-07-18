<template>
  <div class="relative flex flex-col bg-[var(--md-sys-color-background)] h-screen w-full">
    <nav ref="topNavRef" class="sticky top-0 right-0 w-full z-30 bg-[var(--md-sys-color-background)]">
      <NavigationTopBar>
        <div class="flex items-center justify-between">
          <div>
            <router-link to="/">
              Overview
            </router-link>
            <router-link to="/friends">
              Friends
            </router-link>
            <router-link to="/api-list">
              Apis
            </router-link>
          </div>
          <div>
            <md-standard-icon-button @click="isOpenAside = !isOpenAside">
              <md-icon>settings</md-icon>
            </md-standard-icon-button>
          </div>
        </div>
      </NavigationTopBar>
    </nav>

    <div class="flex flx-grow">
      <main
        class="w-full bg-[var(--md-sys-color-surface-container-lowest)] rounded-none md:rounded-3xl md:mx-4 flex">
        <div class="w-full overflow-scroll" :style="EffectiveHeight">
          <router-view></router-view>
        </div>
      </main>

      <AsideWindow :is-open="isOpenAside" :set-is-open="(e: boolean) => isOpenAside = e" class="overflow-scroll" :style="EffectiveHeight">
        <DarkSwitch></DarkSwitch>
      </AsideWindow>
    </div>
  </div>
</template>

<script setup lang="ts">
import NavigationTopBar from '@/components/NavigationTopBar.vue'
import { computed, onMounted, onUnmounted, ref } from 'vue';
import AsideWindow from './components/AsideWindow.vue';
import DarkSwitch from './components/DarkSwitch.vue';

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