<template>
    <div id="list" v-if="list != null">
        <div id="listElement"  v-for="(lists, i) in list" :key="lists">
            <h4 v-on:click="popup(list[i].idMeal)">{{ lists.strMeal }}</h4>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: 'list',
    methods: {
            popup(id){
                axios
                .get(
                    'https://www.themealdb.com/api/json/v1/1/lookup.php?i='+ id
                ).then(response => ( this.$emit('popup', response.data.meals)));
            }
    },
    props: {
        list: {
            type: Array
        }
   }
}
</script>

<style scoped>
    #listElement {
        background: beige;
        margin-left: 15%;
        margin-right: 15%;
        border-bottom-style: solid;
        border-bottom-color: rgb(128, 0, 0);
    }

    #listElement:hover {
        background: #e4d5b7;
    }
</style>