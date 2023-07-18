<template>
  <div class="bg-[var(--md-sys-color-background)]">
    <NavigationTopBar></NavigationTopBar>
    <main class="container mx-auto pt-16 min-h-screen">
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup lang="ts">
import NavigationTopBar from '@/components/NavigationTopBar.vue'
</script>

<style scoped>

</style>