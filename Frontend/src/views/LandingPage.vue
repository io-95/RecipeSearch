<template>
    <div class="landing-page">
        <h1 class="daily-recipe-header">Recipe of the Day</h1>
        <Center></Center>
    </div>
</template>

<script>
    import Center from '../components/Center.vue'

    export default {
        name: "LandingPage",
        components: { Center }
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');

    .landing-page{
        min-height: 100vh;
        background-color: #8c2222;
        justify-content: flex-start;
        align-items: center; 
        padding-top: 234px;
    }

    .daily-recipe-header{
        text-align: center;
        color: white;
        font-family: 'Great Vibes', cursive;
        font-size: 48px;
    }
</style>