<template>
<body>
    <div class="Personajes">
        <PersonajesComponent 
            v-for="(personaje, index) in personajes" 
            :key="index"
            :name="personaje.name"
            :height="personaje.height"
            :mass="personaje.mass"
            :hair_color="personaje.hair_color"
            :skin_color="personaje.skin_color"
            :eye_color="personaje.eye_color"
            :birth_year="personaje.birth_year"
            :gender="personaje.gender"
        />        
    </div>
    
    <!-- el botón llama a la funcion loadmore que se encarga de volver a llamar loadpersonaje scon una nueva url -->
    <div class="boton-personajes">
        <button v-if="nextPageUrl" @click="loadMore" class="ver-mas-btn">
        Ver más personajes
    </button>
    </div>
</body>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import PersonajesComponent from '@/components/PersonajesComponent.vue';

const personajes = ref([]);
const nextPageUrl = ref(null);

const loadPersonajes = async (url) => {
try {
const response = await fetch(url);
const data = await response.json();

personajes.value = [...personajes.value, ...data.results]; //Con esto se combinan los viejos con los nuevos y asi poder mostrar todos y que no se vayan los viejos.

nextPageUrl.value = data.next; //te quedas con el dato de la url siguiente
} catch (error) {
console.error("Error al cargar los personajes:", error);
}
};

onMounted(() => {
loadPersonajes("https://swapi.dev/api/people/"); //aqui cargas los primeros
});

const loadMore = () => { //funcion que llama el botón, la cual llama otra vez a lo de ante spero con la nueva url.
if (nextPageUrl.value) {
loadPersonajes(nextPageUrl.value);
}
};
</script>
