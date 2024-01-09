<script setup>

import TheActivityForm from '@/components/TheActivityForm.vue';
import ActivityItem from '../components/ActivityItem.vue';
import { isActivityValid, validateActivities } from '../validators'
import TheActivitesEmptyState from '../components/TheActivitesEmptyState.vue'

defineProps({
    activities: {
        required: true,
        type: Array,
        validator: validateActivities
    }
})
const emit = defineEmits({
    deleteActivity: isActivityValid,
    createActivity: isActivityValid
})


</script>

<template>
    <div class="flex flex-col grow">
        <ul v-if="activities.length" class="divide-y grow">
            <ActivityItem v-for="activity in activities" 
                :key="activity.id" 
                :activity="activity" 
                @delete="emit('deleteActivity', activity)"
            />
        </ul>

        <TheActivitesEmptyState v-else/>
        <TheActivityForm  @submit="emit('createActivity', $event)"/>

    </div>
</template>