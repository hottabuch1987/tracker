<script setup>
import { ref } from 'vue'
import { isTimeLineItemValid, validateSelectOptions } from '../validators'
import BaseSelect from './BaseSelect.vue';
import TimeLineHour from './TimeLineHour.vue';

defineProps({
    timelineItem: {
        required: true,
        type: Object,
        validator: isTimeLineItemValid
    },
    activitySelectOptions: {
        required: true,
        type: Array,
        validator: validateSelectOptions
    }

})





const selectedActivityId = ref(0)

</script>

<template>
<li class="relative flex flex-col gap-2 border-t border-gray-300 py-10 px-4">
    
    <TimeLineHour :hour="timelineItem.hour"/>
    <BaseSelect 
        :selected="selectedActivityId" 
        :options="activitySelectOptions" 
        placeholder="Не выбранно"
        @select="selectedActivityId = $event"
    />
 
</li>
        
</template>