<template>
    <div class="Centre">
        <div class="random" v-if="dailyRecipe.data">
            <img class="image" :src="dailyRecipe.data.thumbnail" alt="Meal Thumbnail">
            <div class="box-content">
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

.random {
    background: #FFF6DB;
    color: #19191F;
    display: flex;
    width: 100%;
    min-width: 353px;
    max-width: 723px;
    height: auto;
    padding: 10px;
    border-radius: 16px;
    padding: 32px;
    margin-top: 16px;
}

p {
    font-family: 'Roboto';
    font-size: 16px;
}

.box-content{
    display: flex;
}

.image {
    height: 120px;
    width: 120px;
    border-radius: 50%;
    margin-right: 22px;    
}

h3{
    font-size: 24;
    font-family: 'Roboto';
}

@media (max-width: 500px)  {
    .random {
        flex-direction: column;
        align-items: center;
        width: 90.5%;
        margin-inline: 17.5px;
    }

    .image{
        align-items: center;
        margin-bottom: 18px;
    }

    .box-content {
        text-align: center;
        flex-direction: column;
        gap: 9px;
    }
}

</style>