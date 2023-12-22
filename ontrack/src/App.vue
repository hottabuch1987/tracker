<script setup>
import { ref } from 'vue'
import TheHeader from '@/components/TheHeader.vue'
import TheNav from '@/components/TheNav.vue'
import TheActivites from '@/pages/TheActivites.vue'
import TheProgres from '@/pages/TheProgres.vue'
import TheTimeLine from '@/pages/TheTimeLine.vue'
import { PAGE_PROGRESS, PAGE_TIMELINE, PAGE_ACTIVITIES } from './constants'

const curentPage = ref(normalizePageHash())
function normalizePageHash() {
  const hash = window.location.hash.slice(1)

  if ([].includes(hash)){
    return hash
  }
  window.location.hash = PAGE_TIMELINE
  return PAGE_TIMELINE
}
</script>

<template>

 <TheHeader />
 <main class="flex flex-grow flex-col">
    <TheActivites v-show="curentPage === PAGE_ACTIVITIES"/>
    <TheProgres v-show="curentPage === PAGE_PROGRESS"/>
    <TheTimeLine v-show="curentPage === PAGE_TIMELINE"/>
</main>
  
<TheNav 
    :current-page="curentPage"
    @navigate="curentPage = $event"
/>
</template>

