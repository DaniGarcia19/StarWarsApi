<template>
    <div class="planetas-container">
        <RouterLink :to="{ name: 'PeliculasPage'}">
        <div class="planetas">
            <h2 class="planeta-name">{{ name }}</h2>
    
            <div class="planeta-details">
            <div class="planeta-info">
                <span class="label">Perido de Rotación:</span>
                <span class="value">{{ rotation_period }} cm</span>
            </div>
            <div class="planeta-info">
                <span class="label">Perido de Órbita:</span>
                <span class="value">{{ orbital_period }} kg</span>
            </div>
            <div class="planeta-info">
                <span class="label">Diámetro:</span>
                <span class="value">{{ diameter }}</span>
            </div>
            <div class="planeta-info">
                <span class="label">Clima:</span>
                <span class="value">{{ climate }}</span>
            </div>
            <div class="planeta-info">
                <span class="label">Gravedad:</span>
                <span class="value">{{ gravity }}</span>
            </div>
            <div class="planeta-info">
                <span class="label">Terreno:</span>
                <span class="value">{{ terrain }}</span>
            </div>
            <div class="planeta-info">
                <span class="label">Superficies de agua:</span>
                <span class="value">{{ surface_water }}</span>
            </div>
            <div class="planeta-info">
                <span class="label">Población:</span>
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
    