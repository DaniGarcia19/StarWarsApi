<template>
    <div class="especies-container">
        <RouterLink :to="{ name: 'EspeciesPage'}">
        <div class="especies">
            <h2 class="especies-name">{{ name }}</h2>
    
            <div class="especies-details">
            <div class="especies-info">
                <span class="label">{{ $t('attributes4.classification') }}:</span>
                <span class="value">{{ classification }} cm</span>
            </div>
            <div class="especies-info">
                <span class="label">{{ $t('attributes4.designation') }}:</span>
                <span class="value">{{ designation }} kg</span>
            </div>
            <div class="especies-info">
                <span class="label">{{ $t('attributes4.average_height') }}:</span>
                <span class="value">{{ average_height }}</span>
            </div>
            <div class="especies-info">
                <span class="label">{{ $t('attributes4.skin_colors') }}:</span>
                <span class="value">{{ skin_colors }}</span>
            </div>
            <div class="especies-info">
                <span class="label">{{ $t('attributes4.hair_colors') }}:</span>
                <span class="value">{{ hair_colors }}</span>
            </div>
            <div class="especies-info">
                <span class="label">{{ $t('attributes4.average_lifespan') }}:</span>
                <span class="value">{{ average_lifespan }}</span>
            </div>
            <div class="especies-info">
                <span class="label">{{ $t('attributes4.homeworld') }}:</span>
                <span class="value">{{ homeworld }}</span>
            </div>
            <div class="especies-info">
                <span class="label">{{ $t('attributes4.language') }}:</span>
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
    