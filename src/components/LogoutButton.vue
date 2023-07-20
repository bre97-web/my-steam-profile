<template>
    <md-text-button @click="clearAccount">
        <md-icon slot="icon">logout</md-icon>
        Logout
    </md-text-button>
</template>

<script setup lang="ts">

const clearAccount = () => {
    localStorage.removeItem('account')
    location.reload()
}
</script>

<style scoped>

</style>