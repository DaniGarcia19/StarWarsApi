<template>
    <div class="especies-container">
        <RouterLink :to="{ name: 'EspeciesPage'}">
        <div class="especies">
            <h2 class="especies-name">{{ name }}</h2>
    
            <div class="especies-details">
            <div class="especies-info">
                <span class="label">Clasificación:</span>
                <span class="value">{{ classification }} cm</span>
            </div>
            <div class="especies-info">
                <span class="label">Designation:</span>
                <span class="value">{{ designation }} kg</span>
            </div>
            <div class="especies-info">
                <span class="label">Media de Altura:</span>
                <span class="value">{{ average_height }}</span>
            </div>
            <div class="especies-info">
                <span class="label">Colores de Piel:</span>
                <span class="value">{{ skin_colors }}</span>
            </div>
            <div class="especies-info">
                <span class="label">Colores de Pelo:</span>
                <span class="value">{{ hair_colors }}</span>
            </div>
            <div class="especies-info">
                <span class="label">Media de vida:</span>
                <span class="value">{{ average_lifespan }}</span>
            </div>
            <div class="especies-info">
                <span class="label">Planeta:</span>
                <span class="value">{{ homeworld }}</span>
            </div>
            <div class="especies-info">
                <span class="label">Lenguaje:</span>
                <span class="value">{{ language }}</span>
            </div>
            </div>
        </div>
        </RouterLink>
    </div>
    </template>
    
    <script setup>
    const props = defineProps({
    name: String,
    classification: String,
    designation: String,
    average_height: Number,
    skin_colors: String,
    hair_colors: String,
    average_lifespan: Number,
    homeworld: String,
    language: String
    });
    </script>
    