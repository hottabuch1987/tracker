<script setup>
import { nextTick, ref } from 'vue'
import { PlusIcon} from '@heroicons/vue/24/outline'
import { isActivityValid } from '../validators';
import BaseButton from './BaseButton.vue';
import { id } from '@/functions'



const emit = defineEmits({
    submit: isActivityValid
})

const name = ref('')

async function submit() {
    emit('submit', {
   
        id: id(),
        name: name.value,
        seondsToComplete: 0
        
    })
    name.value = ''

    // прокуртка в низ
    await nextTick()
    
    window.scrollTo(0, document.body.scrollHeight)
   
}
</script>
<template>
    <form @submit.prevent="submit" class="sticky bottom-[57px] flex gap-2 border-t bg-white p-4">
            <input type="text" 

                v-model="name" 
                class="w-full rounded border px-4 text-xl" 
                placeholder="Активность"
            >
            <BaseButton :disabled="name.trim() === ''">
                <PlusIcon class="h-8"/>
            </BaseButton>
    </form>      

</template>