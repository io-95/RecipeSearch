<template>
    <div class="Center">
        <h1 class="Title">What Ingredients Do You Have?</h1>

        <div class="SearchSection">
            <input class="searchInput" placeholder="Enter an ingredient (e.g., chicken, basil, tomatoes)"></input>
            <v-btn rounded="xl" color="tertiary" height="40" width="90">Add</v-btn>
        </div>
    </div>
</template>

<script>
    export default{
        name: "SearchByIngredients"
    }
</script>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Lora&display=swap");

    .Center{
        width: 1086px;
        height: auto;
        background-color: #FFF6DB;
        border-radius: 16px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .Title{
        font-family: 'Lora';
        font-size: 36px;
        margin-top: 90px;
    }
</style>