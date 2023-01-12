<script setup lang="tsx">

enum routes {
    Me = "Me",
    Projects = "Projects",
    Social = "Social",
    Contact = "Maid Outfit",
    Other = "Other",
}
</script>

<template>
    <div flex h-12 m-t-4 divide-x divide-gray divide-opacity-50>
        <button v-for="button in routes" first="rounded-l-8 hover:rounded-l-2" last="rounded-r-8 hover:rounded-r-2"
            w-screen bg-blue-6 hover:bg-blue-5 ease-in-out duration-200 text-white text-xl hover:drop-shadow-2xl
            hover:drop-shadow-color-gray-8 class="group">
            <div group-hover="op-100 transition-duration-0.1s" op-80>{{ button }}
            </div>
        </button>
    </div>

</template>