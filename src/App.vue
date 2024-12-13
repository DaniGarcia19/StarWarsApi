<template>
  <div class="app-container">
    <!-- Audio de fondo -->
    <audio id="background-audio" autoplay loop>
      <source src="/src/assets/audios/MarchaImperial.mp3" type="audio/mp3" />
    </audio>

    <Splide :options="options" aria-label="Background Carousel">
      <SplideSlide>
        <img src="https://images4.alphacoders.com/131/1313954.jpeg" alt="Background 1" />
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
    </Splide>

    <header class="header-container">
      <div class="video-background">
        <video autoplay loop muted playsinline>
          <source src="../src/assets/imgs/espacio2.mp4" type="video/mp4"/>
        </video>
      </div>

      <div class="imagen">
        <img src="/src/assets/imgs/imagenStarWars.png" alt="Descripción de la imagen" />
      </div>

      <nav class="header-links">
        <RouterLink to="/" class="header-link">{{ $t('navigation.home') }}</RouterLink>
        <RouterLink to="/people" class="header-link">{{ $t('navigation.characters') }}</RouterLink>
        <RouterLink to="/planets" class="header-link">{{ $t('navigation.planets') }}</RouterLink>
        <RouterLink to="/Peliculas" class="header-link">{{ $t('navigation.movies') }}</RouterLink>
        <RouterLink to="/Especies" class="header-link">{{ $t('navigation.species') }}</RouterLink>
        <RouterLink to="/Vehículos" class="header-link">{{ $t('navigation.vehicles') }}</RouterLink>
        <RouterLink to="/Naves" class="header-link">{{ $t('navigation.spaceships') }}</RouterLink>
      </nav>

      <div class="language-buttons">
        <button 
          class="btn-es" 
          @click="$i18n.locale = 'es'" 
          :class="{ active: $i18n.locale === 'es' }"
        >
          <img src="../src/assets/imgs/es.png" alt="Español" />
        </button>
        <button 
          class="btn-en" 
          @click="$i18n.locale = 'en'" 
          :class="{ active: $i18n.locale === 'en' }"
        >
          <img src="../src/assets/imgs/en.png" alt="English" />
        </button>
      </div>
    </header>

    <RouterView />

    <footer class="footer-container">
      <div class="footer-content">
        <p>&copy; 2024 Star Wars Universe. {{ $t('footer.rights') }}</p>
        <div class="footer-links">
          <a href="/contacto" class="footer-link">{{ $t('footer.contact') }}</a>
          <a href="/politica-privacidad" class="footer-link">{{ $t('footer.privacyPolicy') }}</a>
          <a href="/terminos" class="footer-link">{{ $t('footer.terms') }}</a>
        </div>
        <div class="footer-social">
          <a href="https://www.facebook.com/starwars.es/?locale=es_ES" class="footer-social-link" target="_blank">Facebook</a>
          <a href="https://x.com/starwars?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" class="footer-social-link" target="_blank">Twitter</a>
          <a href="https://instagram.com" class="footer-social-link" target="_blank">Instagram</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { RouterView, RouterLink } from 'vue-router';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/splide.min.css';

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
