<script setup>
import { CheckCircleIcon } from '@heroicons/vue/24/solid'
import { ClockIcon, ListBulletIcon, ChartBarIcon} from '@heroicons/vue/24/outline'

const navItems = {
  время: ClockIcon, 
  активность: ListBulletIcon, 
  прогресс: ChartBarIcon,
}
</script>

<template>
 <header class="sticky top-0 z-20 flex items-center justify-between border-b bg-white p-3">
  <a href="#">
    <img src="./assets/home.svg" alt="логотип" class="h-9">
    <p>Главная</p>
    
  </a>
  <a href="#" class="text-sm">
    <div v-if="true" class="flex items-center gap-1">
      Рабочий день
      <CheckCircleIcon class="h-7 text-green-500"/>
    </div>
    <div v-else class="flex items-center gap-1">
      <div>Прогресс: <span class="font-mono">20%</span></div>
      <div class="h-3 w-3 rounded-full bg-red-500"></div>
    </div>
  </a>
  <!--  -->
  
 </header>
 <main class="flex flex-grow flex-col">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos veniam dicta vel nemo error deserunt nulla quo natus assumenda iste, inventore vero deleniti ipsa, optio harum voluptatem! Ipsa sequi laboriosam tempora officiis rerum laudantium earum modi. Deleniti sunt nemo odit minus? Repudiandae facere corporis, ex quos officia rem maxime quidem modi odio totam explicabo unde accusantium cum sed. Earum nobis nihil enim inventore velit exercitationem dolorum, laborum, provident error cumque cum animi vel praesentium odio, consequatur sint! Ipsum totam quae dolore dolorem, et voluptatum molestias explicabo, facilis ab dolores voluptas maiores tempore excepturi quibusdam culpa quam! Tenetur cupiditate quod odio? Corrupti accusamus repellendus eaque veritatis id tenetur ipsa at, quaerat fugit eos perspiciatis quibusdam aliquam quis. Adipisci, non. Mollitia delectus id atque voluptatum sed provident laudantium veritatis ducimus ab, eius dignissimos alias amet, cumque voluptates praesentium pariatur voluptate? Magnam, quae!
 </main>
  
<nav class="sticky bottom-0 z-10 bg-white">
  <ul class="flex items-center justify-around border-t">
    <li v-for="icon, page in navItems" :key="page" class="flex-1">
      <a :href="`#${page}`" class="flex flex-col items-center p-2 text-xs capitalize">
        <component :is="icon" class="h-6 w-6" />{{ page }}
      </a>
    </li>
  </ul>
</nav>
</template>

