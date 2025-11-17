<template>
    <div class="landing-page">
        <h1 class="daily-recipe-header">Recipe of the Day</h1>
        <RecipeOfTheDay></RecipeOfTheDay>
        <SearchBar class="search-bar" :search-bar-width="500"></SearchBar>
    </div>
</template>

<script>
    import RecipeOfTheDay from '../components/RecipeOfTheDay.vue'
    import SearchBar from '../components/SearchBar.vue';

    export default {
        name: "LandingPage",
        components: { RecipeOfTheDay, SearchBar }
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');

    .landing-page{
        justify-content: flex-start;
        display: flex;
        flex-direction: column;   
        align-items: center; 
        margin-top: 234px;
    }

    .daily-recipe-header{
        text-align: center;
        color: white;
        font-family: 'Great Vibes', cursive;
        font-size: 48px;
    }

    .search-bar{
        margin-top: 79px;
    }

    @media (max-width: 500px)  {
        .landing-page{
            margin-top: 170px;
        }

        .search-bar{
            margin-top: 76px;
        }
    }
</style>