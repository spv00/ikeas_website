<script setup lang="tsx">import { useSlots } from '@vue/runtime-core';
import { Icon } from '@iconify/vue';
import { ref } from 'vue';

var moreSkillsVisible = ref(false);


const Skill = (props: { col: String, icon: String, link?: string }, context: any) => {
    const { default: defaultSlot } = useSlots();

    var col = props.col.trim();
    const workaroundPlaceholders = "hidden bg-green-3 bg-blue-3 bg-orange-3 bg-indigo-3 text-indigo-2 text-blue-2 text-orange-2 text-green-2";
    var styles = `group select-none bg-${col}-3 w-30 h-9 rounded-full flex justify-center items-center text-${col}-2 text-[16px] font-mono font-900 bg-op-20 hover:drop-shadow-2xl hover:drop-shadow-color-black hover:-translate-x-1 hover:-translate-y-1 hover:skew-y-2 transition-duration-0.3s`;

    var main = <div class="flex flex-row justify-center items-center w-full h-full">
        <div class="group-hover:op-100 op-0 transition-duration-0.3s font-bold">{defaultSlot?.()}</div>
        <div class="absolute inset-0 flex justify-center items-center">
            <Icon icon={props.icon} width="32" height="32" class="group-hover:op-0 op-100 transition-duration-0.3s" />
        </div>
    </div>

    if (props.link) {
        return <div class={styles}>

            <a href={props.link} class="h-full w-full">
                {main}
            </a>
        </div>
    }
    return <div class={styles}>
        {main}
    </div >
}
</script>


<template>
    <div flex lg:flex-row flex-col>
        <div flex lg:flex-col>
            <img src="../../assets/img/ikea.jpg" rounded-full w-30 h-30 lg="w-50 h-50" />
            <div m-4 lg:m-0>
                <div text-2xl>Gabriel Tofvesson</div>
                <div text-lg>Sometimes, I make things</div>
                <div flex flex-row>
                    <Icon icon="material-symbols:location-on" width="18" m-1 />
                    <div text-lg>Linköping, Sweden</div>
                </div>
                <div flex flex-row>
                    <Icon icon="mdi:email" width="18" m-1 />
                    <div text-lg><a href="mailto:[contact@w1zzrd.dev]">contact@w1zzrd.dev</a></div>
                </div>
                <div flex flex-row>
                    <a href="https://github.com/GabrielTofvesson/">
                        <Icon icon="line-md:github" width="24" m-0.3 />
                    </a>
                    <a href="#">
                        <Icon icon="line-md:linkedin" width="24" m-0.3 />
                    </a>
                    <a href="https://w1zzrd.dev">
                        <Icon icon="line-md:twitter" width="24" m-0.3 />
                    </a>
                    <a href="#">
                        <Icon icon="line-md:instagram" width="24" m-0.3 />
                    </a>
                    <a href="#">
                        <Icon icon="line-md:linkedin" width="24" m-0.3 />
                    </a>
                    <a href="#">
                        <Icon icon="line-md:reddit" width="24" m-0.3 />
                    </a>
                    <a href="#">
                        <Icon icon="line-md:facebook" width="24" m-0.3 />
                    </a>
                </div>
            </div>
        </div>
        <div flex-1 p-4 flex flex-col>
            <div m-4 text-xl>
                Hey there! My name is Gabriel Tofvesson and I'm a 23-year-old software developer based in Sweden. I've
                been passionate about technology since I was a kid and I've been coding since I was a teenager. I have a
                real love for low-level programming and understanding how computer systems work. When I'm not busy
                coding, I enjoy reading about the latest developments in the tech industry and experimenting with
                different programming languages. I also love travelling and trying out new foods. I'm always looking for
                new challenges and opportunities to grow as a developer, and I'm excited to see where my passion for
                technology will take me. Thanks for visiting my website!
            </div>
            <div>
                <!--grid grid-flow-col-dense gap-4 grid-rows-12 lg:grid-rows-6 xl:grid-rows-5-->
                <div grid grid-flow-col gap-2 grid-rows-4>
                    <Skill col="blue" icon="circle-flags:uk">English</Skill>
                    <Skill col="blue" icon="circle-flags:se">Swedish</Skill>
                    <Skill col="blue" icon="circle-flags:fr">French</Skill>
                    <Skill col="blue" icon="circle-flags:nl">Dutch</Skill>
                    <Skill col="orange" icon="vscode-icons:file-type-c3" link="#">C</Skill>
                    <Skill col="orange" icon="vscode-icons:file-type-rust">Rust</Skill>
                    <Skill col="orange" icon="vscode-icons:file-type-cpp3">C++</Skill>
                    <Skill col="orange" icon="vscode-icons:file-type-typescript-official">TypeScript</Skill>
                    <Skill col="orange" icon="vscode-icons:file-type-typescript-official">JavaScript</Skill>
                    <Skill col="orange" icon="vscode-icons:file-type-html">HTML</Skill>
                    <Skill col="orange" icon="vscode-icons:file-type-java">Java</Skill>
                    <Skill col="orange" icon="vscode-icons:file-type-kotlin">Kotlin</Skill>
                    <Skill col="orange" icon="vscode-icons:file-type-lua">Lua</Skill>
                    <Skill col="orange" icon="vscode-icons:file-type-light-systemverilog">System</Skill>
                    <Skill col="orange" icon="vscode-icons:file-type-csharp2">C#</Skill>
                    <Skill col="orange" icon="vscode-icons:file-type-objectivec">Objective-C</Skill>
                    <Skill col="orange" icon="vscode-icons:file-type-python">Python</Skill>
                    <Skill col="orange" icon="vscode-icons:file-type-assembly">ARM ASM</Skill>
                    <Skill col="green" icon="mdi:sql-query">Data</Skill>
                    <Skill col="green" icon="mdi:secure">Cryptography</Skill>
                    <Skill col="green" icon="ion:hardware-chip">Hardware</Skill>
                    <Skill col="green" icon="uim:layer-group">Fullstack</Skill>
                    <Skill col="green" icon="mdi:gear">Embedded</Skill>
                    <Skill col="green" icon="mdi:web">Web</Skill>
                    <Skill col="green" icon="mingcute:android-2-fill">Android</Skill>
                    <Skill col="indigo" icon="skill-icons:react-dark">React</Skill>
                    <Skill col="indigo" icon="skill-icons:css">CSS</Skill>
                    <Skill col="indigo" icon="skill-icons:bootstrap">Bootstrap</Skill>
                    <Skill col="indigo" icon="skill-icons:angular-dark">Angular</Skill>
                    <Skill col="indigo" icon="skill-icons:arduino">Aduino</Skill>
                    <Skill col="indigo" icon="skill-icons:aws-dark">AWS</Skill>
                    <Skill col="indigo" icon="skill-icons:git">Git</Skill>
                    <Skill col="indigo" icon="skill-icons:idea-dark">Idea</Skill>
                    <Skill col="indigo" icon="skill-icons:docker">Docker</Skill>
                    <Skill col="indigo" icon="skill-icons:mysql-dark">MySQL</Skill>
                    <Skill col="indigo" icon="skill-icons:unity-dark">Unity</Skill>
                    <Skill col="indigo" icon="skill-icons:bash-dark">Bash</Skill>
                    <Skill col="indigo" icon="skill-icons:linux-dark">Linux</Skill>
                    <Skill col="indigo" icon="skill-icons:vscode-dark">Vscode</Skill>
                    <Skill col="indigo" icon="skill-icons:regex-dark">Regex</Skill>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
@keyframes bounce {

    0%,
    100% {
        transform: translateY(-10%);
        animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }

    50% {
        transform: translateY(0);
        animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
}

.reduced-animate-bounce {
    animation: bounce 2s linear infinite;
}
</style>