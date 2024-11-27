<template>
    <body>
        <div class="Peliculas">
                <PeliculasComponent 
                    v-for="(Pelicula, index) in Peliculas" 
                    :key="Pelicula.uid"
                    :title="Pelicula.title"
                    :episode_id="Pelicula.episode_id"
                    :opening_crawl="Pelicula.opening_crawl"
                    :director="Pelicula.director"
                    :producer="Pelicula.producer"
                    :release_date="Pelicula.release_date"
        />        
        </div>
    </body>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import PeliculasComponent from '@/components/PeliculasComponent.vue'

const Peliculas=ref([]);

onMounted(()=>{
    console.log("hola1");
    fetch("https://swapi.dev/api/films")
        .then((response)=>response.json())
        .then((data)=>{
            Peliculas.value=data.results;
            console.log(data);
        })
        .catch((error)=>{
            console.error("Error",error)
            console.log("holaerror");
        });
    });
</script>
