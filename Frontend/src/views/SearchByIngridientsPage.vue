<template>
    <SearchByIngredients class="SearchByIngredients"></SearchByIngredients>
</template>

<script>
    import SearchByIngredients from '../components/SearchByIngredients.vue';

    export default{
        name: "SearchByIngridientsPage",
        components: { SearchByIngredients }
    }
</script>

<style>
    .SearchByIngredients{
        align-self: center;
        margin-top: 41px;
    }
</style>