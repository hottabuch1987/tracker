<script setup>

import TheLogo from '@/components/TheLogo.vue'
import TheHeaderProgress from '@/components/TheHeaderProgress.vue'

const emit = defineEmits(['goToTimiline', 'goToProges'])
</script>

<template>
<header class="sticky top-0 z-20 flex items-center justify-between border-b bg-white p-3">
  <TheLogo @click="emit('goToTimiline')"/>
  <TheHeaderProgress @click="emit('goToProges')"/> 
 </header>
</template>