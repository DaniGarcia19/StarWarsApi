<template>
  <RouterLink :to="{ name: 'PeliculasPage', params: { episode_id: episode_id } }">
    <div class="peliculas">
      
      <h2 class="peliculas-title">{{ title }}</h2>

      <div class="peliculas-details">
        <span class="director">Director: {{ director }}</span>
        <br>
        <span class="producer">Productor: {{ producer }}</span>
      </div>

      <p class="peliculas-opening">{{ opening_crawl }}</p>

      <span class="peliculas-date">Fecha de lanzamiento: {{ release_date }}</span>
    </div>
  </RouterLink>
</template>
  
  <script setup>
  const props = defineProps({
    title: String,
    episode_id: Number,
    opening_crawl: String,
    director: String,
    producer: String,
    release_date: Date
  });
  </script>