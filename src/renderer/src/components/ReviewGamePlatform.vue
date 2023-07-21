<template>
    <div class="flex flex-col gap-2">
        <div v-if="props.platform.windows" class="flex items-end gap-1">
            <md-icon v-if="props.platform.windows" class="icon-filled">grid_view</md-icon>
            <p class="">Windows</p>
        </div>
        <div v-if="props.platform.mac" class="flex items-end gap-1">
            <md-icon v-if="props.platform.windows" class="icon-filled">desktop_mac</md-icon>
            <p class="">Apple Mac</p>
        </div>
        <div v-if="props.platform.linux" class="flex items-end gap-1">
            <md-icon v-if="props.platform.windows" class="icon-filled">bug_report</md-icon>
            <p class="">Linux</p>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
    platform: {
        windows: boolean,
        mac: boolean,
        linux: boolean,
    }
}>(), {
    platform: () => ({
        windows: false,
        mac: false,
        linux: false,
    })
})
</script>

<style scoped></style>