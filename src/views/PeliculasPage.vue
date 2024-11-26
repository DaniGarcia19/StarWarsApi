<template>
    <body>
        <div class="Peliculas">
                <PeliculasComponent 
                    v-for="(Pelicula, index) in Peliculas" 
                    :key="Pelicula.uid"
                    :episode_id="Pelicula.properties.episode_id"
                    :director="Pelicula.properties.director"
                    :title="Pelicula.properties.title"
                    :producer="Pelicula.properties.producer"
                    :release_data="Pelicula.properties.release_data"
        />        
        </div>
    </body>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import PeliculasComponent from '@/components/PEliculasComponent.vue'

const Peliculas=ref([]);

onMounted(()=>{
    console.log("hola");
    fetch("https://swapi.tech/api/films")
        .then((response)=>response.json())
        .then((data)=>{
            Peliculas.value=data.result;
            console.log("hola");
        })
        .catch((error)=>{
            console.error("Error",error)
        });
    });
</script>
