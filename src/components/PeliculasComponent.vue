<template>
  <RouterLink :to="{ name: 'PeliculasPage', params: { episode_id: episode_id } }">
    <div class="peliculas">
      
      <h2 class="peliculas-title">{{ title }}</h2>

      <div class="peliculas-details">
        <span class="director">{{ $t('attributes3.director') }}:{{ director }}</span>
        <br>
        <span class="producer">{{ $t('attributes3.producer') }}: {{ producer }}</span>
      </div>

      <p class="peliculas-opening">{{ opening_crawl }}</p>

      <span class="peliculas-date">{{ $t('attributes3.release_date') }}:{{ release_date }}</span>
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