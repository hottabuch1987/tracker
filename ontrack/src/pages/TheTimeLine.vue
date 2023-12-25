<script setup>
import { generateTimeLineItems } from '../functions'
import TimeLineItem from '@/components/TimeLineItem.vue'


const timeLineItems = generateTimeLineItems()

</script>
<template>
    <div class="mt-7">
        <ul>
            <TimeLineItem 
                v-for="timeLineItem in timeLineItems" 
                :key="timeLineItem.hour" :timeLineItem="timeLineItem"
            />
        </ul>
    </div>
</template>