<script setup>
import { ref } from 'vue'
import TheHeader from '@/components/TheHeader.vue'
import TheNav from '@/components/TheNav.vue'
import TheActivites from '@/pages/TheActivites.vue'
import TheProgres from '@/pages/TheProgres.vue'
import TheTimeLine from '@/pages/TheTimeLine.vue'
import {  PAGE_TIMELINE } from './constants'
import {  PAGE_PROGRESS } from './constants'
import {  PAGE_ACTIVITIES } from './constants'
import { normalizePageHash, generateTimeLineItems, genereteActivitySelectOptions, genereteActivities, id} from '@/functions'

const currentPage = ref(normalizePageHash())

const timelineItems = generateTimeLineItems()

const activities = ref(genereteActivities())
const activitySelectOptions = genereteActivitySelectOptions(activities.value)

function goTo(page) {
    currentPage.value = page
}
function deleteActivity(activity){
    activities.value.splice(activities.value.indexOf(activity), 1)
}
function createActivity(name) {
    activities.value.push({
        id: id(),
        name,
        seondsToComplete: 0

    })
}
</script>

<template>

 <TheHeader 
    @navigate="goTo($event)"
 />
 <main class="flex flex-grow flex-col">
    <TheActivites v-show="currentPage === PAGE_ACTIVITIES"  :activities="activities" @create-activity="createActivity" @delete-activity="deleteActivity"/>
    <TheProgres v-show="currentPage === PAGE_PROGRESS"/>
    <TheTimeLine v-show="currentPage === PAGE_TIMELINE" :timeline-items="timelineItems" :activity-select-options="activitySelectOptions" />
</main>
  
<TheNav
    :current-page="currentPage"
    @navigate="goTo($event)"
/>
</template>

