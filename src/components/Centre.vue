<template>
    <div id="Centre">
        <div id="random" v-if="random.length > 0">
            <h3>{{random[0].strMeal}}</h3>
            <img id="image" :src="random[0].strMealThumb" alt="Meal Thumbnail">
            <p>{{random[0].strInstructions.substring(0, 500) + "..."}} <a :href="random[0].strYoutube" target="_blank">Zum Video</a></p>
        </div>

        <div id="search">
            <input v-model="input" type="text" name="searchInput">
            <button v-if="input != null" v-on:click="search()" id="searchButton" >search</button>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "Centre",
    data() {
        return {
            input: "",
            random: []
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
            .then(response => (this.random = response.data.meals));       
    }
};
</script>

<style scoped>
#random {
    background: #a94c4c;
    color: white;
    margin-top: 2%;
    margin-left: 25%;
    margin-right: 25%;
    padding: 10px;
    border-radius: 7px;
}

p {
    text-align: left;
    
}

#image {
    max-width: 40%;
    border-radius: 50%;
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