<script setup lang="tsx">import { useSlots } from '@vue/runtime-core';


const Feature = (props: { col: String, bounce?: Boolean }, context: any) => {
    const { default: defaultSlot } = useSlots();

    var col = props.col.trim();
    const workaroundPlaceholders = "hidden bg-green-3 bg-blue-3 bg-orange-3 text-blue-2 text-orange-2 text-green-2";
    var styles = `select-none bg-${col}-3 w-30 h-9 rounded-full flex justify-center items-center text-${col}-2 text-[16px] font-mono font-900 bg-op-20 hover:drop-shadow-2xl hover:drop-shadow-color-black hover:-translate-x-1 hover:-translate-y-1 hover:skew-y-2 transition-duration-0.3s`;
    if (props.bounce) {
        styles += ` reduced-animate-bounce`;
    }
    return <div class={styles}>{defaultSlot?.()}</div>
}
</script>


<template>
    <div flex flex-row>
        <div flex flex-col>
            <img src="../../assets/img/ikea.jpg" rounded-full w-50>
            <div text-4xl>About me</div>
        </div>
        <div flex-1 p-4 flex flex-col>
            <div m-4 text-xl>
                A programmer with a burning passion for data structures, security and efficiency. This personal site was
                designed entirely using Yew. I love most kinds of music, but I prefer rock, bossa nova or EDM. I strive
                to leave people happier than when I met them. (Yeah my fucking ass you do lmao)
            </div>
            <div>
                <div grid grid-flow-col-dense gap-4 grid-rows-4>
                    <Feature col="blue">English</Feature>
                    <Feature col="blue">Swedish</Feature>
                    <Feature col="blue">French</Feature>
                    <Feature col="blue">Dutch</Feature>
                    <Feature col="orange">C</Feature>
                    <Feature col="orange">Rust</Feature>
                    <Feature col="orange">C++</Feature>
                    <Feature col="orange">TypeScript</Feature>
                    <Feature col="orange">JavaScript</Feature>
                    <Feature col="orange">HTML</Feature>
                    <Feature col="orange">Java</Feature>
                    <Feature col="orange">Kotlin</Feature>
                    <Feature col="orange">Lua</Feature>
                    <Feature col="orange">System</Feature>
                    <Feature col="orange">C#</Feature>
                    <Feature col="orange">Objective-C</Feature>
                    <Feature col="orange">Python</Feature>
                    <Feature col="green">Data</Feature>
                    <Feature col="green">Cryptography</Feature>
                    <Feature col="green">Hardware</Feature>
                    <Feature col="green">Fullstack</Feature>
                    <Feature col="green">Embedded</Feature>
                    <Feature col="green">Web</Feature>
                    <Feature col="green">Android</Feature>
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