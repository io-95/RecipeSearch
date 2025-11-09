<template>
    <div id="Centre">
        <div id="random" v-if="dailyRecipe.data">
            <img id="image" :src="dailyRecipe.data.thumbnail" alt="Meal Thumbnail">
            <div>
                <h3>{{dailyRecipe.data.mealName}}</h3>
                <p>{{dailyRecipe.data.instructions.substring(0, 200) + "..."}}</p>
            </div>
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
        async fetchDailyRecipe() {
            try {
                this.dailyRecipe = await getRecipeOfTheDay();
                console.log(this.dailyRecipe.data.mealName);
            } catch (err) {
                console.error("Can not load recipe of the day: ", err);
            }
        }    
    },
    mounted(){     
        this.fetchDailyRecipe();
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