<script setup>

import { ClockIcon, ListBulletIcon, ChartBarIcon} from '@heroicons/vue/24/outline'
import NavItem from '@/components/NavItem.vue'
import { PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS } from '../constants.js'

defineProps(['currentPage'])
const emit = defineEmits(['navigate'])

const navItems = {
  [PAGE_TIMELINE]: ClockIcon, 
  [PAGE_ACTIVITIES]: ListBulletIcon, 
  [PAGE_PROGRESS]: ChartBarIcon,
}


</script>
<template>
    <nav class="sticky bottom-0 z-10 bg-white">
  <ul class="flex items-center justify-around border-t">
    <NavItem 
      v-for="icon, page in navItems" :key="page"
      :href="`#${page}`"
      :class="{'bg-gray-300 pointer-events-none': page === curentPage}"
      @click="emit('navigate', page)"
    >

      <component :is="icon" class="h-6 w-6" />{{ page }}
    </NavItem>
 
  </ul>
</nav>
</template>