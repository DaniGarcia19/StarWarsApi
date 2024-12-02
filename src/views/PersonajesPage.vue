<template>
<body>
    <div class="buscador">
        <input 
        type="text" 
        v-model="searchQuery" 
        :placeholder="$t('search.text')" 
        class="buscador-input" 
        />
    </div>

    <div class="Personajes">
        <PersonajesComponent 
        v-for="(personaje, index) in filteredPersonajes" 
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
    
    <div class="boton-personajes">
        <button v-if="nextPageUrl" @click="loadMore" class="ver-mas-btn">
        {{ $t('boton.text') }}
        </button>
    </div>
</body>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue';
import PersonajesComponent from '@/components/PersonajesComponent.vue';

const personajes = ref([]);
const nextPageUrl = ref(null);

const searchQuery = ref(""); 

// con esta funcion cargamos los personajes con la paginacion
const loadPersonajes = async (url) => {
    try {
    const response = await fetch(url);
    const data = await response.json();

    personajes.value = [...personajes.value, ...data.results];
    nextPageUrl.value = data.next;
    } catch (error) {
    console.error("Error al cargar los personajes:", error);
    }
};

// con esta funcion cargamos todos los personaje spara poder buscar incluso en lo sque no salen por la paginacion
const allPersonajes = ref([]);

const loadAllPersonajes = async (initialUrl) => {
    let url = initialUrl;

    try {
    while (url) {
        const response = await fetch(url);
        const data = await response.json();

        allPersonajes.value = [...allPersonajes.value, ...data.results];
        url = data.next;
    }
    } catch (error) {
    console.error("Error al cargar todos los personajes:", error);
    }
};

// cargamos todos los datos
onMounted(() => {
    loadPersonajes("https://swapi.dev/api/people/");
    loadAllPersonajes("https://swapi.dev/api/people/");
});
// aqui para cargar mas paginas haciendo que guardo lo antiguo con lo nuevo --- seguir el hilo de la ejecució para verlo
const loadMore = () => {
    if (nextPageUrl.value) {
    loadPersonajes(nextPageUrl.value);
    }
};
// esto se encarga de decidir si va  por paginación o no. si hay algo en la busqueda, carga lo que enceuntre por el nombre. si no va a la paginacion normal
const filteredPersonajes = computed(() => {
    if (!searchQuery.value) {
    return personajes.value; 
    }

    return allPersonajes.value.filter((personaje) => 
    personaje.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
});
</script>
