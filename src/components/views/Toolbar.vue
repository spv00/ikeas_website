<script setup lang="tsx">
import { Icon } from '@iconify/vue';
const routes = {
    "Profile": { path: "/", icon: "line-md:account" },
    "Github": { path: "/github", icon: "mdi:github" },
    "My Resume": { path: "/resume", icon: "mdi:file-document" },
    "Gallery": { path: "/gallery", icon: "mdi:camera" },

    //"Contact": { path: "/contact", icon: "mdi:email" },
}
</script>

<template>
    <div flex h-12 divide-x divide-gray divide-opacity-50>
        <button v-for="({ path, icon }, name) in routes" first="rounded-l-8 hover:rounded-l-4"
            last="rounded-r-8 hover:rounded-r-4" w-screen bg-blue-6 hover:bg-blue-5 ease-in-out duration-200 text-white
            text-xl hover:drop-shadow-2xl hover:drop-shadow-color-gray-8 class="group">
            <router-link :to="{ path }">
                <div group-hover="op-100 transition-duration-0.1s" op-70 text-2xl font-mono>
                    <div w-full justify-center items-center>
                        <div flex flex-row justify-center items-center>
                            <div group-hover:-translate-x-3 transition-duration-0.3s>{{ name }}</div>
                            <Icon :icon="icon" width="26" height="26" op-0
                                group-hover="op-100 animate-fade-in-right animate-duration-0.1s"
                                transition-duration-0.3s />
                        </div>

                    </div>
                </div>
            </router-link>
        </button>
    </div>

</template>