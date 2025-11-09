<template>
    <div id="Centre">
        <div id="random" v-if="dailyRecipe.length > 0">
            <img id="image" :src="dailyRecipe[0].strMealThumb" alt="Meal Thumbnail">
            <div>
                <h3>{{dailyRecipe[0].strMeal}}</h3>
                <p>{{dailyRecipe[0].strInstructions.substring(0, 200) + "..."}}</p>
            </div>
        </div>

        <div id="search">
            <input v-model="input" type="text" name="searchInput" placeholder="Type a Keyword">
            <button v-if="input != null" v-on:click="search()" id="searchButton" >search</button>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import { getRecipeOfTheDay } from "../services/recipeService";

export default {
    name: "Center",
    data() {
        return {
            input: "",
            dailyRecipe: []
        };
    },
    methods: {
        search() {
            if(this.input.length > 0){
                axios
                    .get(
                        'https://www.themealdb.com/api/json/v1/1/search.php?s=' + this.input
                    ).then(response => this.$emit('search', response.data.meals));
            }
        }
    },
    mounted(){
        axios
            .get(
                'https://www.themealdb.com/api/json/v1/1/random.php'
            )
            .then(response => (this.dailyRecipe = response.data.meals));
        
        getRecipeOfTheDay();
    }
};
</script>

<style scoped>
#random {
    background: #FFF6DB;
    color: #19191F;
    display: flex;
    width: 723px;
    height: auto;
    padding: 10px;
    border-radius: 16px;
    padding: 32px;
    margin-top: 16px;
    margin-bottom: 79px;
}

p {
    text-align: left;
}

#image {
    width: 120px;
    border-radius: 50%;
    padding-right: 22px;
}

input {
    margin: 15px;
    width: 250px;
    padding-top: 10px;
    padding-bottom: 10px;
    border-color: gray;
}

button {
    padding: 9px;
    color: white;
    background-color: #c17171;
}
</style>