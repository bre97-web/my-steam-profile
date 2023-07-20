<template>
    <div class="space-y-4">
        <div v-if="props.platform.windows && props.requirements[0] != null" class="border p-2 rounded-md relative">
            <md-icon class="icon-filled absolute mx-2 right-0">grid_view</md-icon>
            <p v-html="props.requirements[0]"></p>
        </div>

        <div v-if="props.platform.mac && props.requirements[1] != null" class="border p-2 rounded-md relative">
            <md-icon class="icon-filled absolute mx-2 right-0">desktop_mac</md-icon>
            <p v-html="props.requirements[1]"></p>
        </div>

        <div v-if="props.platform.linux && props.requirements[2] != null" class="border p-2 rounded-md relative">
            <md-icon class="icon-filled absolute mx-2 right-0">bug_report</md-icon>
            <p v-html="props.requirements[2]"></p>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
    platform: {
        windows: boolean,
        mac: boolean,
        linux: boolean,
    },
    requirements: (string | undefined)[]
}>(), {
    platform: () => ({
        windows: false,
        mac: false,
        linux: false,
    })
})
</script>

<style scoped></style>