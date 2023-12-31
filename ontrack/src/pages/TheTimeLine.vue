<script setup>
import TimeLineItem from '@/components/TimeLineItem.vue'
import { HOURS_IN_DAY } from '../constants';

defineProps({
    timelineItems: {
        required: true,
        type: Array,
        validator(timelineItems) {
            return timelineItems.every(
            ({ hour }) => typeof hour === 'number' && hour >= 0 && hour < HOURS_IN_DAY
            )
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