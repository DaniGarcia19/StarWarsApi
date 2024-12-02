import { createI18n } from 'vue-i18n';

const messages = {
en: {
navigation: {
    home: 'Home',
    characters: 'Characters',
    planets: 'Planets',
    movies: 'Movies',
    species: 'Species',
    vehicles: 'Vehicles',
    spaceships: 'Spaceships',
},
footer: {
    rights: 'All rights reserved.',
    contact: 'Contact',
    privacyPolicy: 'Privacy Policy',
    terms: 'Terms and Conditions',
},
attributes1: {
    height: 'Height',
    mass: 'Mass',
    hair_color: 'Hair Color',
    skin_color: 'Skin Color',
    eye_color: 'Eye Color',
    birth_year: 'Birth Year',
    gender: 'Gender',
},
attributes2: {
    name: 'Name',
    rotation_period: 'Rotation period',
    orbital_period: 'Orbital Period',
    diameter: 'Diameter',
    climate: 'Climate',
    gravity: 'Gravity',
    terrain: 'Terrain',
    surface_water: 'Surface Water',
    population: 'Population'
},
attributes3: {
    director: 'Director',
    producer: 'Producer',
    release_date: 'Release Date',
},
attributes4: {
    classification: 'Classification',
    designation: 'designation',
    average_height: 'average_height',
    skin_colors: 'skin_colors',
    hair_colors: 'hair_colors',
    average_lifespan: 'average_lifespan',
    homeworld: 'homeworld',
    language: 'language',
},
attributes5: {
    model: 'model',
    manufacturer: 'manufacturer',
    cost_in_credits: 'cost in credits',
    length: 'length',
    crew: 'crew',
    passengers: 'passengers',
    cargo_capacity: 'cargo capacity',
    consumables: 'consumables',
    vehicle_class: 'vehicle class',
},
attributes6: {
    model: 'model',
    manufacturer: 'manufacturer',
    cost_in_credits: 'cost in credits',
    length: 'length',
    crew: 'crew',
    passengers: 'passengers',
    cargo_capacity: 'cargo capacity',
    consumables: 'consumables',
    hyperdrive_rating: 'hyperdrive rating',
    MGLT: 'MGLT',
    starship_class: 'vehicle class',
},
boton:{
    text: 'See more'
},
search:{
    text: "Search any character..."
}
},
es: {
navigation: {
    home: 'Inicio',
    characters: 'Personajes',
    planets: 'Planetas',
    movies: 'Películas',
    species: 'Especies',
    vehicles: 'Vehículos',
    spaceships: 'Naves Espaciales',
},
footer: {
    rights: 'Todos los derechos reservados.',
    contact: 'Contacto',
    privacyPolicy: 'Política de Privacidad',
    terms: 'Términos y Condiciones',
},
attributes1: {
    height: 'Altura',
    mass: 'Masa',
    hair_color: 'Color de Cabello',
    skin_color: 'Color de Piel',
    eye_color: 'Color de Ojos',
    birth_year: 'Año de Nacimiento',
    gender: 'Género',
},
attributes2: {
    name: 'Nombre',
    rotation_period: 'Periodo de rotación',
    orbital_period: 'Periodo de Órbita',
    diameter: 'Diámetro',
    climate: 'Clíma',
    gravity: 'Gravedad',
    terrain: 'Terreno',
    surface_water: 'Cantidad de agua',
    population: 'Población'
},
attributes3: {
    director: 'Director',
    producer: 'Productor',
    release_date: 'Fecha de Lanzamiento',
},
attributes4: {
    classification: 'clasificación',
    designation: 'designación',
    average_height: 'media de altura',
    skin_colors: 'colores de piel',
    hair_colors: 'colores de pelo',
    average_lifespan: 'esperanza de vida',
    homeworld: 'planeta',
    language: 'lenguaje',
},
attributes5: {
    model: 'Modelo',
    manufacturer: 'Creador',
    cost_in_credits: 'Precio en créditos',
    length: 'Longitud',
    crew: 'Tripulantes',
    passengers: 'Pasajeros',
    cargo_capacity: 'capacidad',
    consumables: 'consumibles',
    vehicle_class: 'tipo de vehículo',
},
attributes6: {
    model: 'Modelo',
    manufacturer: 'Creador',
    cost_in_credits: 'Precio en créditos',
    length: 'Longitud',
    crew: 'Tripulantes',
    passengers: 'Pasajeros',
    cargo_capacity: 'Capacidad',
    consumables: 'Consumibles',
    hyperdrive_rating: 'ïndice de hipervelocidad',
    MGLT: 'MGLT',
    starship_class: 'clase de nave',
},
boton:{
    text: 'Ver mas'
},
search:{
    text: "Buscar cualquier personaje..."
}
},
};

const i18n = createI18n({
locale: 'es',
fallbackLocale: 'en',
messages,
});

export default i18n;
