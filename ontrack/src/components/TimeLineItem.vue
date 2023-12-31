<script setup>
import { ref } from 'vue'
import { isTimeLineItemValid } from '../validators'
import BaseSelect from './BaseSelect.vue';
import TimeLineHour from './TimeLineHour.vue';

defineProps({
    timelineItem: {
        required: true,
        type: Object,
        validator: isTimeLineItemValid
    }

})



const options = [
    {value: 1, label: 'Работа'},
    {value: 2, label: 'Отдых'},
    {value: 3, label: 'Тренировки'},
]

const selectedActivityId = ref(2)

</script>

<template>
<li class="relative flex flex-col gap-2 border-t border-gray-300 py-10 px-4">
    
    <TimeLineHour :hour="timelineItem.hour"/>
    <BaseSelect 
        :selected="selectedActivityId" 
        :options="options" 
        placeholder="Не выбранно"
        @select="selectedActivityId = $event"
    />
    <!-- <div class="flex gap-2">
        
        <select name="" id="" class="w-full truncate rounded bg-gray-100 py-1 px-2 text-2xl">
            <option selected disabled value="">Rest</option>
            <option v-for="{value, label} in options" :key="value" :value="value">
                {{ label }}
            </option>
        </select>
    </div> -->
    
</li>
        
</template>