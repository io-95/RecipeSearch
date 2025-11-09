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
import { getRecipeOfTheDay } from "../services/recipeService";

export default {
    name: "Center",
    data() {
        return {
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
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

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
    font-family: 'Roboto';
    font-size: 16px;
    text-align: left;
}

#image {
    width: 120px;
    border-radius: 50%;
    padding-right: 22px;
}

h3{
    font-size: 24;
    font-family: 'Roboto';
}
</style>