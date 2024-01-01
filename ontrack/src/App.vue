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
import { normalizePageHash, generateTimeLineItems } from '@/functions'

const currentPage = ref(normalizePageHash())

const timelineItems = generateTimeLineItems()

const activities = ['Работа', 'Отдых', 'Тренировки' ]


function goTo(page) {
    currentPage.value = page
}
</script>

<template>

 <TheHeader 
    @navigate="goTo($event)"
 />
 <main class="flex flex-grow flex-col">
    <TheActivites v-show="currentPage === PAGE_ACTIVITIES" :activities="activities"/>
    <TheProgres v-show="currentPage === PAGE_PROGRESS"/>
    <TheTimeLine v-show="currentPage === PAGE_TIMELINE" :timeline-items="timelineItems"/>
</main>
  
<TheNav
    :current-page="currentPage"
    @navigate="goTo($event)"
/>
</template>

