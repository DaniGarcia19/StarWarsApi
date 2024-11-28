<template>
    <div class="vehículos-container">
        <RouterLink :to="{ name: 'VehículosPage'}">
        <div class="vehículos">
            <h2 class="vehículos-name">{{ name }}</h2>
    
            <div class="vehículos-details">
            <div class="vehículos-info">
                <span class="label">Modelo:</span>
                <span class="value">{{ model }} cm</span>
            </div>
            <div class="vehículos-info">
                <span class="label">Creador:</span>
                <span class="value">{{ manufacturer }} kg</span>
            </div>
            <div class="vehículos-info">
                <span class="label">Precio en créditos:</span>
                <span class="value">{{ cost_in_credits }}</span>
            </div>
            <div class="vehículos-info">
                <span class="label">Longitud:</span>
                <span class="value">{{ length }}</span>
            </div>
            <div class="vehículos-info">
                <span class="label">Crew:</span>
                <span class="value">{{ crew }}</span>
            </div>
            <div class="vehículos-info">
                <span class="label">Pasajeros:</span>
                <span class="value">{{ passengers }}</span>
            </div>
            <div class="vehículos-info">
                <span class="label">Capacidad:</span>
                <span class="value">{{ cargo_capacity }}</span>
            </div>
            <div class="vehículos-info">
                <span class="label">Consumibles:</span>
                <span class="value">{{ consumables }}</span>
            </div>
            <div class="vehículos-info">
                <span class="label">Tipo de cehículo:</span>
                <span class="value">{{ vehicle_class }}</span>
            </div>
            </div>
        </div>
        </RouterLink>
    </div>
</template>
    
<script setup>
    const props = defineProps({
    name: String,
    model: Number,
    manufacturer: Number,
    cost_in_credits: Number,
    length: Number,
    max_atmosphering_speed: Number,
    crew: Number,
    passengers: Number,
    cargo_capacity: Number,
    consumables: String,
    vehicle_class: String
    });
</script>
    