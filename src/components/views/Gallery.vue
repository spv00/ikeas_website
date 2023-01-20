<script setup lang="tsx">import { useSlots } from '@vue/runtime-core';

const Pic = (props: { name: string, image: string }) => {
    const { default: defaultSlot } = useSlots();
    return <div class="transition-duration-0.3s w-100 h-200" >
        <img src={props.image} class="peer rounded-4 hover:blur transition-inherit object-cover w-full h-full" />
        <div class="absolute py-2.5 bottom-0 inset-x-0 text-3xl text-center leading-4 op-0 peer-hover:op-100 transition-inherit font-mono select-none">
            {defaultSlot?.()}
        </div>
    </div >
}
</script>

<template>
    <div grid grid-flow-col-dense h-full>
        <Pic name="Ikea" image="./../../src/assets/img/ikea.jpg">Me at an art exhibit</Pic>
        <Pic name="Ikea" image="./../../src/assets/img/awyep.jpg">Austria</Pic>
        <Pic name="Ikea" image="./../../src/assets/img/boat.jpg">Boat.</Pic>
        <Pic name="Ikea" image="./../../src/assets/img/christmas.jpg">Christmas with my dog</Pic>
        <Pic name="Ikea" image="./../../src/assets/img/hedgehog.jpg">Hemdgehong</Pic>
        <Pic name="Ikea" image="./../../src/assets/img/ribbit.jpg">Tofu</Pic>
        <Pic name="Ikea" image="./../../src/assets/img/water.jpg">mmm water mmmmmm want to drink mmmmmmmmmmmmmm</Pic>
        <Pic name="Ikea" image="./../../src/assets/img/wednesday.png">Calendar cosplay</Pic>
    </div>
</template>