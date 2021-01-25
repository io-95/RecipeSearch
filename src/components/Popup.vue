<template>
    <div id="Popup" v-if="recipe.length > 0">
        <button id="extit" v-on:click="close()">x</button>
        <div id="header">{{ recipe[0].strMeal }}</div>
        <img id="picture" :src="recipe[0].strMealThumb" />
        <div id="ingredient">
            <div v-if="recipe[0].strIngredient1.length > 0">{{recipe[0].strIngredient1}}: {{recipe[0].strMeasure1}}</div>
            <div v-if="recipe[0].strIngredient2.length > 0">{{recipe[0].strIngredient2}}: {{recipe[0].strMeasure2}}</div>
            <div v-if="recipe[0].strIngredient3.length > 0">{{recipe[0].strIngredient3}}: {{recipe[0].strMeasure3}}</div>
            <div v-if="recipe[0].strIngredient4.length > 0">{{recipe[0].strIngredient4}}: {{recipe[0].strMeasure4}}</div>
            <div v-if="recipe[0].strIngredient5.length > 0">{{recipe[0].strIngredient5}}: {{recipe[0].strMeasure5}}</div>
            <div v-if="recipe[0].strIngredient6.length > 0">{{recipe[0].strIngredient6}}: {{recipe[0].strMeasure6}}</div>
            <div v-if="recipe[0].strIngredient7.length > 0">{{recipe[0].strIngredient7}}: {{recipe[0].strMeasure7}}</div>
            <div v-if="recipe[0].strIngredient8.length > 0">{{recipe[0].strIngredient8}}: {{recipe[0].strMeasure8}}</div>
            <div v-if="recipe[0].strIngredient9.length > 0">{{recipe[0].strIngredient9}}: {{recipe[0].strMeasure9}}</div>
            <div v-if="recipe[0].strIngredient10.length > 0">{{recipe[0].strIngredient10}}: {{recipe[0].strMeasure10}}</div>
            <div v-if="recipe[0].strIngredient11.length > 0">{{recipe[0].strIngredient11}}: {{recipe[0].strMeasure11}}</div>
            <div v-if="recipe[0].strIngredient12.length > 0">{{recipe[0].strIngredient12}}: {{recipe[0].strMeasure12}}</div>
            <div v-if="recipe[0].strIngredient13.length > 0">{{recipe[0].strIngredient13}}: {{recipe[0].strMeasure13}}</div>
            <div v-if="recipe[0].strIngredient14.length > 0">{{recipe[0].strIngredient14}}: {{recipe[0].strMeasure14}}</div>
            <div v-if="recipe[0].strIngredient15.length > 0">{{recipe[0].strIngredient15}}: {{recipe[0].strMeasure15}}</div>
            <div v-if="recipe[0].strIngredient16.length > 0">{{recipe[0].strIngredient16}}: {{recipe[0].strMeasure16}}</div>
            <div v-if="recipe[0].strIngredient17.length > 0">{{recipe[0].strIngredient17}}: {{recipe[0].strMeasure17}}</div>
            <div v-if="recipe[0].strIngredient18.length > 0">{{recipe[0].strIngredient18}}: {{recipe[0].strMeasure18}}</div>
            <div v-if="recipe[0].strIngredient19.length > 0">{{recipe[0].strIngredient19}}: {{recipe[0].strMeasure19}}</div>
            <div v-if="recipe[0].strIngredient20.length > 0">{{recipe[0].strIngredient20}}: {{recipe[0].strMeasure20}}</div>
        </div>
        <p id="instruction">{{recipe[0].strInstructions}}</p>
    </div>
</template>

<script>

export default {
    name: 'Popup',
    props: {
        recipe: {
            type: Array
        }
    },
    methods: {
        close(){
            this.recipe = []
        }
    }
}
</script>

<style scoped>
#Popup{
    padding: 2%;
    margin-left: 30%;
    margin-right: 30%;
    border-style: solid;
    border-color: white;
    text-align: left;
    z-index: 1;
    position: absolute;
    top: 50%;
    background: beige;
}
#extit{
    float: right;
    color: #a94c4c;
    background: white;
    font-size: 12pt;
    font-weight: bold;
}
#picture{
    width: 35%;
    float: right;
}
#header{
    font-size: 23pt;
    margin-bottom: 2%;
}
#ingredient div{
    font-size: 11pt;
    font-weight: bold;
}
#instruction{
    font-size: 13pt;
}
</style>