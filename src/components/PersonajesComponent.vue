<template>
<div class="personajes-container">
    <RouterLink :to="{ name: 'PeliculasPage'}">
    <div class="personajes">
        <h2 class="personaje-name">{{ name }}</h2>

        <div class="personaje-details">
        <div class="personaje-info">
            <span class="label">{{ $t('attributes1.height') }}:</span>
            <span class="value">{{ height }} cm</span>
        </div>
        <div class="personaje-info">
            <span class="label">{{ $t('attributes1.mass') }}:</span>
            <span class="value">{{ mass }} kg</span>
        </div>
        <div class="personaje-info">
            <span class="label">{{ $t('attributes1.hair_color') }}:</span>
            <span class="value">{{ hair_color }}</span>
        </div>
        <div class="personaje-info">
            <span class="label">{{ $t('attributes1.skin_color') }}:</span>
            <span class="value">{{ skin_color }}</span>
        </div>
        <div class="personaje-info">
            <span class="label">{{ $t('attributes1.eye_color') }}:</span>
            <span class="value">{{ eye_color }}</span>
        </div>
        <div class="personaje-info">
            <span class="label">{{ $t('attributes1.birth_year') }}:</span>
            <span class="value">{{ birth_year }}</span>
        </div>
        <div class="personaje-info">
            <span class="label">{{ $t('attributes1.gender') }}:</span>
            <span class="value">{{ gender }}</span>
        </div>
        </div>
    </div>
    </RouterLink>
</div>
</template>

<script setup>
const props = defineProps({
name: String,
height: Number,
mass: Number,
hair_color: String,
skin_color: String,
eye_color: String,
birth_year: Date,
gender: String
});
</script>
