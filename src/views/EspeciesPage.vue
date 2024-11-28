<template>
<body>
    <div class="Especies">
    <EspeciesComponent 
        v-for="(especie, index) in especies" 
        :key="index"
        :name="especie.name"
        :classification="especie.classification"
        :designation="especie.designation"
        :average_height="especie.average_height"
        :skin_colors="especie.skin_colors"
        :hair_colors="especie.hair_colors"
        :eye_colors="especie.eye_colors"
        :average_lifespan="especie.average_lifespan"
        :homeworld="especie.homeworld_name"
        :language="especie.language"
    />
    </div>

    <div class="boton-especies">
    <button v-if="nextPageUrl" @click="loadMore" class="ver-mas-btn">
        Ver más Planetas
    </button>
    </div>
</body>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import EspeciesComponent from '@/components/EspeciesComponent.vue';

const especies = ref([]);
const nextPageUrl = ref(null);

// Función para obtener el nombre del homeworld
const fetchHomeworld = async (url) => {
try {
    const response = await fetch(url);
    const data = await response.json();
    return data.name;
} catch (error) {
    console.error("Error al cargar el homeworld:", error);
    return "Desconocido";
}
};

//Cargar todos los datos con el homeworld hecho.
const loadEspecies = async (url) => {
try {
    const response = await fetch(url);
    const data = await response.json();

    const especiesConHomeworld = await Promise.all(
    data.results.map(async (especie) => {
        if (especie.homeworld) {
        especie.homeworld_name = await fetchHomeworld(especie.homeworld);
        } else {
        especie.homeworld_name = "Desconocido"; 
        }
        return especie;
    })
    );

    especies.value = [...especies.value, ...especiesConHomeworld];
    nextPageUrl.value = data.next;
} catch (error) {
    console.error("Error al cargar las especies:", error);
}
};

onMounted(() => {
loadEspecies("https://swapi.dev/api/species/"); 
});

const loadMore = () => {
if (nextPageUrl.value) {
    loadEspecies(nextPageUrl.value);
}
};
</script>
