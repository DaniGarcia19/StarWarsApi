<template>
    <div class="planetas-container">
        <RouterLink :to="{ name: 'PeliculasPage'}">
        <div class="planetas">
            <h2 class="planeta-name">{{ name }}</h2>
    
            <div class="planeta-details">
            <div class="planeta-info">
                <span class="label">{{ $t('attributes2.rotation_period') }}:</span>
                <span class="value">{{ rotation_period }} cm</span>
            </div>
            <div class="planeta-info">
                <span class="label">{{ $t('attributes2.orbital_period') }}:</span>
                <span class="value">{{ orbital_period }} kg</span>
            </div>
            <div class="planeta-info">
                <span class="label">{{ $t('attributes2.diameter') }}:</span>
                <span class="value">{{ diameter }}</span>
            </div>
            <div class="planeta-info">
                <span class="label">{{ $t('attributes2.climate') }}:</span>
                <span class="value">{{ climate }}</span>
            </div>
            <div class="planeta-info">
                <span class="label">{{ $t('attributes2.gravity') }}:</span>
                <span class="value">{{ gravity }}</span>
            </div>
            <div class="planeta-info">
                <span class="label">{{ $t('attributes2.terrain') }}:</span>
                <span class="value">{{ terrain }}</span>
            </div>
            <div class="planeta-info">
                <span class="label">{{ $t('attributes2.surface_water') }}:</span>
                <span class="value">{{ surface_water }}</span>
            </div>
            <div class="planeta-info">
                <span class="label">{{ $t('attributes2.population') }}:</span>
                <span class="value">{{ population }}</span>
            </div>
            </div>
        </div>
        </RouterLink>
    </div>
    </template>
    
    <script setup>
    const props = defineProps({
    name: String,
    rotation_period: Number,
    orbital_period: Number,
    diameter: Number,
    climate: String,
    gravity: String,
    terrain: Date,
    surface_water: String,
    population: Number
    });
    </script>
    