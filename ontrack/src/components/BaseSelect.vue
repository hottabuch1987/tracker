<script setup>
import { BUTTON_TYPE_NEUTRAL } from '../constants'
import { XMarkIcon } from '@heroicons/vue/24/outline';
import BaseButton from './BaseButton.vue'
import { validateSelectOptions, isUndefineOrNull, isNumberOrNull } from '../validators'
import { computed } from 'vue';


const props = defineProps({
    selected: Number,

    placeholder: {
        required: true,
        type: String
    },
    options: {
        required: true,
        type: Array,
        validator: validateSelectOptions
        
    },
})

const emit = defineEmits({
    select: isNumberOrNull
    
})
const isNotSelected = computed(() => isUndefineOrNull(props.selected))
</script>
<template>
 <div class="flex gap-2">
        <BaseButton :type="BUTTON_TYPE_NEUTRAL" @click="emit('select', null)">
            <XMarkIcon class="h-8" />
        </BaseButton>
        
            
            <select class="w-full truncate rounded bg-gray-100 py-1 px-2 text-2xl"
                @change="emit('select', +$event.target.value)"
            >
                <option :selected="isNotSelected" disabled value=""
                >   {{ placeholder }}
                </option>
                <option v-for="{value, label} in options" 
                    :key="value" 
                    :value="value" 
                    :selected="value === selected"
                >
                    {{ label }}
                </option>

            </select>
            
        </div>

</template>