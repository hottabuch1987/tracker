<script setup>
import { ref } from 'vue'
import { ClockIcon, ListBulletIcon, ChartBarIcon} from '@heroicons/vue/24/outline'
import NavItem from '@/components/NavItem.vue'

const navItems = {
  время: ClockIcon, 
  активность: ListBulletIcon, 
  прогресс: ChartBarIcon,
}

const curentPage = ref('время')

</script>
<template>
    <nav class="sticky bottom-0 z-10 bg-white">
  <ul class="flex items-center justify-around border-t">
    <NavItem 
      v-for="icon, page in navItems" :key="page"
      :href="`#${page}`"
      :class="{'bg-gray-300 pointer-events-none': page === curentPage}"
      @click="curentPage = page"
    >

      <component :is="icon" class="h-6 w-6" />{{ page }}
    </NavItem>
 
  </ul>
</nav>
</template>