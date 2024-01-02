<script setup>
import { ref } from 'vue'
import { TrashIcon } from '@heroicons/vue/24/solid';
import {  PERIOD_SELECT_OPTIONS } from '../constants'
import {  BUTTON_TYPE_DANGER } from '../constants'
import { isActivityValid, isUndefined} from '../validators'
import BaseButton from './BaseButton.vue';
import BaseSelect from './BaseSelect.vue';


defineProps({
    activity: {
        required: true,
        type: String,
        validator: isActivityValid
    }
})

const secondsToComplete = ref(null)

const emit = defineEmits({

    delete: isUndefined
})
</script>
<template>
<li  class="flex flex-col gap-2 p-2">
    <div class="flex items-center gap-2">
        <BaseButton  :type="BUTTON_TYPE_DANGER" @click="emit('delete')">
            <TrashIcon class="h-8" />
        </BaseButton>
        <span class="truncate text-xl">{{ activity }}</span>

    </div>
    <div>
        <BaseSelect class="font-mono" placeholder="h:mm" 
            :selected="secondsToComplete" 
            :options="PERIOD_SELECT_OPTIONS"
            @select="secondsToComplete = $event"
        />
    </div>
</li>

</template>