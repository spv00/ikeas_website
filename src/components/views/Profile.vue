<script setup lang="tsx">

const Feature = (props: { col: String, feat: String }, context: any) => {
    var col = props.col.trim();
    console.log(col);
    const workaroundPlaceholders = "hidden bg-green-3 bg-blue-3 bg-orange-3 text-blue-2 text-orange-2 text-green-2";
    var styles = `bg-${col}-3 w-30 h-9 rounded-full flex justify-center items-center text-${col}-2 text-[16px] font-mono font-900 bg-op-20 hover:drop-shadow-2xl hover:drop-shadow-color-black hover:-translate-x-1 hover:-translate-y-1 transition-duration-0.3s`;
    //return h('div', { class: `bg-${col}-3 w-25 h-6 rounded-full content-center text-center text-${col}-2 text-[14px] font-mono bg-op-20` }, `${props.feat}`)
    return <div class={styles}>{props.feat}</div>
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
                    <Feature feat="English" col="blue"></Feature>
                    <Feature feat="Swedish" col="blue"></Feature>
                    <Feature feat="French" col="blue"></Feature>
                    <Feature feat="Dutch" col="blue"></Feature>
                    <Feature feat="C" col="orange"></Feature>
                    <Feature feat="Rust" col="orange"></Feature>
                    <Feature feat="C++" col="orange"></Feature>
                    <Feature feat="TypeScript" col="orange"></Feature>
                    <Feature feat="JavaScript" col="orange"></Feature>
                    <Feature feat="HTML" col="orange"></Feature>
                    <Feature feat="Java" col="orange"></Feature>
                    <Feature feat="Kotlin" col="orange"></Feature>
                    <Feature feat="Lua" col="orange"></Feature>
                    <Feature feat="System" col="orange"></Feature>
                    <Feature feat="C#" col="orange"></Feature>
                    <Feature feat="Objective-C" col="orange"></Feature>
                    <Feature feat="Python" col="orange"></Feature>
                    <Feature feat="Data" col="green"></Feature>
                    <Feature feat="Cryptography" col="green"></Feature>
                    <Feature feat="Hardware" col="green"></Feature>
                    <Feature feat="Fullstack" col="green"></Feature>
                    <Feature feat="Embedded" col="green"></Feature>
                    <Feature feat="Web" col="green"></Feature>
                    <Feature feat="Android" col="green"></Feature>
                </div>
            </div>
        </div>
    </div>
</template>