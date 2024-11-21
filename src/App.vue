<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="imagen">
      <img src="/src/assets/imgs/imagenStarWars.png" alt="Descripción de la imagen" />
    </div>
    <div class="desplegable">
        
    </div>
  </header>
  <RouterView />
</template>

<style>
@import "assets/styles.scss";
</style>