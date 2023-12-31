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

function goTo(page) {
    currentPage.value = page
}
</script>

<template>

 <TheHeader 
    @go-to-timiline="goTo(PAGE_TIMELINE)"
    @go-to-proges="goTo(PAGE_ACTIVITIES)"
 />
 <main class="flex flex-grow flex-col">
    <TheActivites v-show="currentPage === PAGE_ACTIVITIES"/>
    <TheProgres v-show="currentPage === PAGE_PROGRESS"/>
    <TheTimeLine v-show="currentPage === PAGE_TIMELINE" :timeline-items="timelineItems"/>
</main>
  
<TheNav
    :current-page="currentPage"
    @navigate="goTo($event)"
/>
</template>

