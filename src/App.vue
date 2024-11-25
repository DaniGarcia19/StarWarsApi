<template>

  <Splide :options="options" aria-label="Background Carousel">
    <SplideSlide>
      <img src="https://images5.alphacoders.com/111/1113894.jpg" alt="Background 1" />
    </SplideSlide>
    <SplideSlide>
      <img src="https://wallpapers.com/images/featured/star-wars-plzcoaffexgf4h81.jpg" alt="Background 2" />
    </SplideSlide>
    <SplideSlide>
      <img src="https://wallpapers.com/images/hd/4k-star-wars-bb-8-1asl0uvl1jfqcsxq.jpg" alt="Background 3" />
    </SplideSlide>
    <SplideSlide>
      <img src="https://wallpapers.com/images/hd/4k-star-wars-battlefront-gameplay-9e7drd32m028m295.jpg" alt="Background 4" />
    </SplideSlide>
    <SplideSlide>
      <img src="https://images4.alphacoders.com/131/1313954.jpeg" alt="Background 5" />
    </SplideSlide>

  </Splide>

  <header class="header-container">
    <div class="imagen">
      <img src="/src/assets/imgs/imagenStarWars.png" alt="Descripción de la imagen" />
    </div>
    <div class="desplegable">
      <div class="dropdown">
        <button
          class="btn btn-custom dropdown-toggle w-100"
          type="button"
          id="dropdownMenuButton"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          ACCEDE A LOS DATOS
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <li>
            <RouterLink to="/" class="dropdown-item">Inicio</RouterLink>
          </li>
          <li>
            <RouterLink to="/about" class="dropdown-item">Acerca de</RouterLink>
          </li>
          <li>
            <RouterLink to="/contact" class="dropdown-item">Contacto</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </header>
  <RouterView />
</template>

<script setup>
import { RouterView } from 'vue-router';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/splide.min.css';

// Opciones de configuración para el carrusel
const options = {
  type: 'fade',
  rewind: true,
  autoplay: true,
  interval: 2900,
  arrows: false,
  pagination: false,
};
</script>
<style scoped>
@import "assets/styles.scss";
</style>