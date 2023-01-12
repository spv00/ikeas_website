<script setup lang="tsx">
import { Icon } from '@iconify/vue';
import VueMarkdown from 'vue-markdown-render';
</script>

<template>
    <div rounded-4 bg-black bg-op-10 p-4>
        <div flex flex-row>
            <Icon icon="mdi:github" width="56" height="56" />
            <div text-6xl>Github Project</div>
        </div>
        <div flex flex-row>
            <div p-4 text-2xl flex-1>Github project description</div>
        </div>
    </div>

</template>