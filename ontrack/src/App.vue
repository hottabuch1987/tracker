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

const curentPage = ref(normalizePageHash())

const timelineItems = generateTimeLineItems()

function goTo(page) {
    curentPage.value = page
}
</script>

<template>

 <TheHeader 
    @go-to-timiline="goTo(PAGE_TIMELINE)"
    @go-to-proges="goTo(PAGE_ACTIVITIES)"
 />
 <main class="flex flex-grow flex-col">
    <TheActivites v-show="curentPage === PAGE_ACTIVITIES"/>
    <TheProgres v-show="curentPage === PAGE_PROGRESS"/>
    <TheTimeLine v-show="curentPage === PAGE_TIMELINE" :timeline-items="timelineItems"/>
</main>
  
<TheNav
    :curent-page="curentPage"
    @navigate="goTo($event)"
/>
</template>

