<template>
    <RouterLink :to="{name: 'PeliculasPage', params: {episode_id: episode_id} }">
      <div class="peliculas">
        <span>{{ title + " " + director + " " + producer + " " + release_date }}</span>
      </div>
    </RouterLink>
  </template>
  
  <script setup>
  const props = defineProps({
    episode_id: Number,
    director: String,
    title: String,
    producer: String,
    release_date: Date
  });
  </script>