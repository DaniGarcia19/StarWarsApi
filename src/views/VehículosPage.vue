<template>
    <body>
        <div class="Vehículos">
            <VehículosComponent 
                v-for="(vehículo, index) in vehículos" 
                :key="index"
                :name="vehículo.name"
                :model="vehículo.model"
                :manufacturer="vehículo.manufacturer"
                :cost_in_credits="vehículo.cost_in_credits"
                :length="vehículo.length"
                :max_atmosphering_speed="vehículo.max_atmosphering_speed"
                :crew="vehículo.crew"
                :passengers="vehículo.passengers"
                :cargo_capacity="vehículo.cargo_capacity"
                :consumables="vehículo.consumables"   
                :vehicle_class="vehículo.vehicle_class"
            />        
        </div>
        
        <!-- el botón llama a la funcion loadmore que se encarga de volver a llamar loadpersonaje scon una nueva url -->
        <div class="boton-vehículo">
            <button v-if="nextPageUrl" @click="loadMore" class="ver-mas-btn">
                {{ $t('boton.text') }}
        </button>
        </div>
    </body>
    </template>
    
    <script setup>
    import { onMounted, ref } from 'vue';
    import VehículosComponent from '@/components/VehículosComponent.vue';
    
    const vehículos = ref([]);
    const nextPageUrl = ref(null);
    
    const loadVehículos= async (url) => {
    try {
    const response = await fetch(url);
    const data = await response.json();
    
    vehículos.value = [...vehículos.value, ...data.results]; //Con esto se combinan los viejos con los nuevos y asi poder mostrar todos y que no se vayan los viejos.
    
    nextPageUrl.value = data.next; //te quedas con el dato de la url siguiente
    } catch (error) {
    console.error("Error al cargar los vehículos:", error);
    }
    };
    
    onMounted(() => {
        loadVehículos("https://swapi.py4e.com/api/vehicles/"); //aqui cargas los primeros
    });
    
    const loadMore = () => { //funcion que llama el botón, la cual llama otra vez a lo de ante spero con la nueva url.
    if (nextPageUrl.value) {
        loadVehículos(nextPageUrl.value);
    }
    };
    </script>
    