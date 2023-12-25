<script setup>
const props = defineProps(['timeLineItem'])

const hourLinkClasess = [
    `absolute -top-4 left-1/2 -translate-x-1/2 rounded  px-2 font-mono text-lg`,
    props.timeLineItem.hour === new Date().getHours()
    ? 'bg-purple-900 font-black text-white'
    : 'bg-gray-100 text-gray-500'
]
</script>

<template>
<li class="relative flex flex-col gap-2 border-t border-gray-300 py-10 px-4">
    <a href="#" :class="hourLinkClasess"
                    >
        {{ timeLineItem.hour }}:00
    </a>
</li>
        
</template>