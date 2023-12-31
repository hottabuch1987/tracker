<script setup>
import TimeLineItem from '@/components/TimeLineItem.vue'
import { isTimeLineValid } from '../validators'


defineProps({
    timelineItems: {
        required: true,
        type: Array,
        validator(timelineItems) {
            return timelineItems.every(isTimeLineValid)
        }
    }

})


</script>
<template>
    <div class="mt-7">
        <ul>
            <TimeLineItem 
                v-for="timelineItem in timelineItems" 
                :key="timelineItem.hour"
                :timeline-item="timelineItem"
            />
        </ul>
    </div>
</template>