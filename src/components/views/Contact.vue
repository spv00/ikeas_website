<script setup lang="tsx">
import { useSlots } from '@vue/runtime-core';
import { Icon } from '@iconify/vue';

const contacts = {
    "Email": { icon: "material-symbols:alternate-email", name: "email" },
    "Phone": { icon: "mdi:phone", name: "phone" },
}

const Contact = (props: { icon: string }) => {
    const { default: defaultSlot } = useSlots();
    return <div flex flex-row>
        {defaultSlot?.()}
        <Icon icon={props.icon} />
    </div>
}

</script>

<template>
    <div flex flex-col>
        Text me uwu
    </div>
</template>