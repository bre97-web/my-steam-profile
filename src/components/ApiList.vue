<template>
    <ul v-if="!pending" class="space-y-16">
        <li v-for="(interfaces, index) in list?.interfaces" :key="index" class="rounded-xl p-4 bg-[var(--md-sys-color-surface-container-lowest)]">
            <h1 class="font-bold text-2xl mb-8">
                {{ interfaces.name }}
            </h1>
            
            <div v-for="(methods, index) in interfaces.methods" :key="index" class="p-2 rounded-xl bg-[var(--md-sys-color-surface-container-low)] mb-4 space-y-2">
                <section class="flex">
                    <h1 class="flex-grow">{{ methods.name }}</h1>
                    <p class="flex-none w-12">{{ methods.httpmethod }}</p>
                    <p class="flex-none w-8 rounded-full ">v{{ methods.version }}</p>
                </section>
                <div>
                    <table v-if="methods.parameters.length !== 0" class="rounded-md border overflow-clip w-full">
                        <thead>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Optional</th>
                            <th>Description</th>
                        </thead>
                        <tbody>
                            <tr v-for="(param, index) in methods.parameters" :key="index">
                                <td>{{ param.name }}</td>
                                <td>{{ param.type }}</td>
                                <td>{{ param.optional }}</td>
                                <td>{{ param.description }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </li>
    </ul>
    <div v-else class="w-full flex items-center justify-center">
        <md-circular-progress indeterminate></md-circular-progress>
    </div>
</template>

<script setup lang="ts">
import { SteamApiList, useSteamGet } from '@/hooks/useSteam';
import { onMounted, ref } from 'vue';

const pending = ref(true)

const list = ref<SteamApiList>()

onMounted(() => {
    useSteamGet({
        interfaceName: '/api/ISteamWebAPIUtil',
        methodName: 'GetSupportedAPIList',
        steamid: '76561198298936075'
    }).then(res => {
        console.log(res.data);
        list.value = res.data.apilist
        pending.value = false
    })
})
</script>

<style scoped></style>@/hooks/useSteamGet