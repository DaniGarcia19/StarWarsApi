<template>
    <body>
        <div class="Planetas">
            <PlanetasComponent 
                v-for="(planeta, index) in planetas" 
                :key="index"
                :name="planeta.name"
                :rotation_period="planeta.rotation_period"
                :orbital_period="planeta.orbital_period"
                :diameter="planeta.diameter"
                :climate="planeta.climate"
                :gravity="planeta.gravity"
                :terrain="planeta.terrain"
                :surface_water="planeta.surface_water"
                :population="planeta.population"
            />        
        </div>
        
        <!-- el botón llama a la funcion loadmore que se encarga de volver a llamar loadpersonaje scon una nueva url -->
        <div class="boton-planetas">
            <button v-if="nextPageUrl" @click="loadMore" class="ver-mas-btn">
            Ver más Planetas
        </button>
        </div>
    </body>
    </template>
    
    <script setup>
    import { onMounted, ref } from 'vue';
    import PlanetasComponent from '@/components/PlanetasComponent.vue';
    
    const planetas = ref([]);
    const nextPageUrl = ref(null);
    
    const loadPlanetas = async (url) => {
    try {
    const response = await fetch(url);
    const data = await response.json();
    
    planetas.value = [...planetas.value, ...data.results]; //Con esto se combinan los viejos con los nuevos y asi poder mostrar todos y que no se vayan los viejos.
    
    nextPageUrl.value = data.next; //te quedas con el dato de la url siguiente
    } catch (error) {
    console.error("Error al cargar los planetas:", error);
    }
    };
    
    onMounted(() => {
    loadPlanetas("https://swapi.dev/api/planets/"); //aqui cargas los primeros
    });
    
    const loadMore = () => { //funcion que llama el botón, la cual llama otra vez a lo de ante spero con la nueva url.
    if (nextPageUrl.value) {
    loadPlanetas(nextPageUrl.value);
    }
    };
    </script>
    