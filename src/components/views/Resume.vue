<script setup lang="tsx">
import { Icon } from '@iconify/vue';
import { useSlots } from '@vue/runtime-core';

const Project = (props: { name: String, icons: Array<String> }) => {
    const { default: defaultSlot } = useSlots();

    return <div class="my-2"><h4 class="flex flex-row items-center">{props.name}
        {props.icons.map((icon) => {
            return <Icon icon={icon} class="mx-2" />
        })}
    </h4>
        {defaultSlot?.()}
    </div>
}

</script>

<template>
    <div flex flex-col>
        <div flex flex-col font-mono text-center divide-y divide-bluegray divide-opacity-50>
            <h1 text-6xl>Gabriel Tofvesson</h1>
            <h4>Software Developer and Security Professional</h4>
        </div>
        <div flex flex-row>
            <div flex flex-col flex-1>
                <h2>Projects</h2>
                <Project name="Bank Project" :icons="['vscode-icons:file-type-csharp2']">
                    Client-server project simulating a simple banking system with hand-written
                    cryptographic and graphics implementations.
                </Project>
                <Project name="Bluetooth Password Manager"
                    :icons="['vscode-icons:file-type-kotlin', 'mdi:sql-query', 'vscode-icons:file-type-cpp3']">
                    Ongoing project developing a password manager with a hardware component
                    for logging in to insecure devices.
                </Project>
                <Project name="ASMThread" :icons="['vscode-icons:file-type-assembly']">
                    A simple project in ARM assembly implementing virtual threads and malloc.
                </Project>
                <Project name="framebuffer_graphics" :icons="['vscode-icons:file-type-c3']">
                    A little project I created one sleepless night for drawing items to a Linux frame-
                    buffer device. It implements double-buffering, simple shapes and a custom
                    file format for defining blit masks/shapes. Additionally, it adds a simple char-
                    acter mapping system on top of the blit system for rudimentary character out-
                    put.
                </Project>
                <h2>Certifications</h2>
                <div flex flex-row items-center>
                    <Icon icon="vscode-icons:file-type-csharp2" width="30" mr-2 /> Certified Developer
                    <a href="https://www.credly.com/badges/987ea172-0fc8-4de7-96fe-ca4e2fced5bf">
                        <Icon icon="mdi:link-variant" />
                    </a>
                </div>
            </div>
            <div flex flex-col class="w-25%" ml-10>
                <h3>Skills</h3>
                <l pl-10>
                    <li>Software Development</li>
                    <li>Security</li>
                    <li>DevOps</li>
                    <li>Cloud</li>
                </l>
            </div>
        </div>
    </div>
</template>