<script setup>
import TimeLineItem from '@/components/TimeLineItem.vue'
import { validateTimeLineItems, validateSelectOptions } from '../validators'


defineProps({
    timelineItems: {
        required: true,
        type: Array,
        validator: validateTimeLineItems
    },
    activitySelectOptions: {
        required: true,
        type: Array,
        validator: validateSelectOptions
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
                :activity-select-options="activitySelectOptions"
            />
        </ul>
    </div>
</template>