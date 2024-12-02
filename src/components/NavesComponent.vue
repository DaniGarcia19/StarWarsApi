<template>
    <div class="naves-container">
        <RouterLink :to="{ name: 'NavesPage'}">
        <div class="naves">
            <h2 class="naves-name">{{ name }}</h2>
    
            <div class="naves-details">
            <div class="naves-info">
                <span class="label">{{ $t('attributes6.model') }}:</span>
                <span class="value">{{ model }} cm</span>
            </div>
            <div class="naves-info">
                <span class="label">{{ $t('attributes6.manufacturer') }}:</span>
                <span class="value">{{ manufacturer }} kg</span>
            </div>
            <div class="naves-info">
                <span class="label">{{ $t('attributes6.cost_in_credits') }}::</span>
                <span class="value">{{ cost_in_credits }}</span>
            </div>
            <div class="naves-info">
                <span class="label">{{ $t('attributes6.length') }}:</span>
                <span class="value">{{ length }}</span>
            </div>
            <div class="naves-info">
                <span class="label">{{ $t('attributes6.crew') }}:</span>
                <span class="value">{{ crew }}</span>
            </div>
            <div class="naves-info">
                <span class="label">{{ $t('attributes6.passengers') }}:</span>
                <span class="value">{{ passengers }}</span>
            </div>
            <div class="naves-info">
                <span class="label">{{ $t('attributes6.cargo_capacity') }}:</span>
                <span class="value">{{ cargo_capacity }}</span>
            </div>
            <div class="naves-info">
                <span class="label">{{ $t('attributes6.consumables') }}:</span>
                <span class="value">{{ consumables }}</span>
            </div>
            <div class="naves-info">
                <span class="label">{{ $t('attributes6.hyperdrive_rating') }}:</span>
                <span class="value">{{ hyperdrive_rating }}</span>
            </div>
            <div class="naves-info">
                <span class="label">{{ $t('attributes6.MGLT') }}:</span>
                <span class="value">{{ MGLT }}</span>
            </div>
            <div class="naves-info">
                <span class="label">{{ $t('attributes6.starship_class') }}:</span>
                <span class="value">{{ starship_class }}</span>
            </div>
            </div>
        </div>
        </RouterLink>
    </div>
</template>
    
<script setup>
    const props = defineProps({
    name: String,
    model: String,
    manufacturer: String,
    cost_in_credits: String,
    length: String,
    max_atmosphering_speed: String,
    crew: String,
    passengers: String,
    cargo_capacity: String,
    consumables: String,
    hyperdrive_rating: String,
    MGLT: String,
    starship_class: String
    });
</script>
    