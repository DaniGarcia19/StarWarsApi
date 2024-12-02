<template>
    <div class="vehículos-container">
        <RouterLink :to="{ name: 'VehículosPage'}">
        <div class="vehículos">
            <h2 class="vehículos-name">{{ name }}</h2>
    
            <div class="vehículos-details">
            <div class="vehículos-info">
                <span class="label">{{ $t('attributes5.model') }}:</span>
                <span class="value">{{ model }} cm</span>
            </div>
            <div class="vehículos-info">
                <span class="label">{{ $t('attributes5.manufacturer') }}:</span>
                <span class="value">{{ manufacturer }} kg</span>
            </div>
            <div class="vehículos-info">
                <span class="label">{{ $t('attributes5.cost_in_credits') }}:</span>
                <span class="value">{{ cost_in_credits }}</span>
            </div>
            <div class="vehículos-info">
                <span class="label">{{ $t('attributes5.length') }}:</span>
                <span class="value">{{ length }}</span>
            </div>
            <div class="vehículos-info">
                <span class="label">{{ $t('attributes5.crew') }}:</span>
                <span class="value">{{ crew }}</span>
            </div>
            <div class="vehículos-info">
                <span class="label">{{ $t('attributes5.passengers') }}:</span>
                <span class="value">{{ passengers }}</span>
            </div>
            <div class="vehículos-info">
                <span class="label">{{ $t('attributes5.cargo_capacity') }}:</span>
                <span class="value">{{ cargo_capacity }}</span>
            </div>
            <div class="vehículos-info">
                <span class="label">{{ $t('attributes5.consumables') }}:</span>
                <span class="value">{{ consumables }}</span>
            </div>
            <div class="vehículos-info">
                <span class="label">{{ $t('attributes5.vehicle_class') }}:</span>
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
    