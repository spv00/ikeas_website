<script setup lang="tsx">
import { Icon } from '@iconify/vue';
import { VueElement } from 'vue';
import axios from 'axios';

// Define props
const props = defineProps<{ gitLink?: string }>();
class GithubProject {
    name: String;
    description: String;
    //html_url: String;
    stars: number;
    watchers: number;
    forks: number;
    language: String;
    constructor(
        name: String,
        description: String,
        //html_url: String,
        stars: number,
        watchers: number,
        forks: number,
        language: String,) {
        this.name = name;
        this.description = description;
        //this.html_url = html_url;
        this.stars = stars;
        this.watchers = watchers;
        this.forks = forks;
        this.language = language;
    }
}
var p = new GithubProject("A github Project", "A github project description", 1257, 200, 56, "Rust");

function setGhProject(prj: GithubProject) {
    p = prj;
}
function fmtK(num: number): string {
    if (num < 1000) {
        return num.toString();
    }
    return (Math.abs(num) > 999 ? Math.sign(num) * (Math.abs(num) / 1000) : Math.sign(num) * Math.abs(num)).toFixed(1) + 'k'
}

function getGithubProject() {
    const url = props.gitLink || "https://raw.githubusercontent.com/Unity-Technologies/com.unity.netcode.gameobjects/develop/README.md";
    const response = axios.get(url, {
        headers: {
            'Content-Type': 'text/html',
            'Access-Control-Allow-Origin': '*'
        }
    });
    response.then((resp) => {

    })
}
</script>

<template>
    <div rounded-4 bg-black bg-op-10 p-4 m-4>
        <div flex flex-row>
            <a href="https://github.com/Unity-Technologies/com.unity.netcode.gameobjects">
                <Icon icon="mdi:github" width="56" height="56" op-50 hover:op-100 text-white transition-duration-0.3s />
            </a>
            <div text-6xl>{{ p.name }}</div>
            <div w-5> </div>
            <div flex flex-row>
                <div flex flex-row m-1 rounded-full bg-red-4 bg-op-20 h-7 w-16 justify-center items-center
                    hover:bg-op-40 transition-duration-0.3s select-none>
                    <div align-text-top>{{ fmtK(p.stars) }}</div>
                    <Icon icon="material-symbols:star-rounded" width="26" height="26" />
                </div>
                <div flex flex-row m-1 rounded-full bg-yellow-4 bg-op-20 h-7 w-16 justify-center items-center
                    hover:bg-op-40 transition-duration-0.3s select-none>
                    <div align-text-top>{{ fmtK(p.watchers) }}</div>
                    <Icon icon="ic:outline-remove-red-eye" width="26" height="26" />
                </div>
                <div flex flex-row m-1 rounded-full bg-green-4 bg-op-20 h-7 w-16 justify-center items-center
                    hover:bg-op-40 transition-duration-0.3s select-none>
                    <div align-text-top>{{ fmtK(p.forks) }}</div>
                    <Icon icon="material-symbols:fork-left-rounded" width="26" height="26" />
                </div>
            </div>
        </div>
        <div flex flex-row>
            <div p-4 text-2xl>{{ p.description }}</div>
            <!--<div v-html="toMarkdown()" overflow-y-auto h-200 break-all></div>-->
        </div>
    </div>
</template>