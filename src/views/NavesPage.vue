<template>
    <body>
        <div class="Naves">
            <NavesComponent 
                v-for="(nave, index) in naves" 
                :key="index"
                :name="nave.name"
                :model="nave.model"
                :manufacturer="nave.manufacturer"
                :cost_in_credits="nave.cost_in_credits"
                :length="nave.length"
                :max_atmosphering_speed="nave.max_atmosphering_speed"
                :crew="nave.crew"
                :passengers="nave.passengers"
                :cargo_capacity="nave.cargo_capacity"
                :consumables="nave.consumables"   
                :hyperdrive_rating="nave.hyperdrive_rating"
                :MGLT="nave.MGLT"
                :starship_class="nave.starship_class"
            />        
        </div>
        
        <!-- el botón llama a la funcion loadmore que se encarga de volver a llamar loadpersonaje scon una nueva url -->
        <div class="boton-nave">
            <button v-if="nextPageUrl" @click="loadMore" class="ver-mas-btn">
                {{ $t('boton.text') }}
        </button>
        </div>
    </body>
    </template>
    
    <script setup>
    import { onMounted, ref } from 'vue';
    import NavesComponent from '@/components/NavesComponent.vue';
    
    const naves = ref([]);
    const nextPageUrl = ref(null);
    
    const loadNaves= async (url) => {
    try {
    const response = await fetch(url);
    const data = await response.json();
    
    naves.value = [...naves.value, ...data.results]; //Con esto se combinan los viejos con los nuevos y asi poder mostrar todos y que no se vayan los viejos.
    console.log(naves.value);
    nextPageUrl.value = data.next; //te quedas con el dato de la url siguiente
    } catch (error) {
    console.error("Error al cargar las naves:", error);
    }
    };
    
    onMounted(() => {
        loadNaves("https://swapi.py4e.com/api/starships/"); //aqui cargas los primeros
    });
    
    const loadMore = () => { //funcion que llama el botón, la cual llama otra vez a lo de ante spero con la nueva url.
    if (nextPageUrl.value) {
        loadNaves(nextPageUrl.value);
    }
    };
    </script>