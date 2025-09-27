<template>
    <div id="Header">
        <h1>RecipeSearch</h1>
        <div id="menu" v-if="categories.length > 0">
            <a v-for="(category, i) in categories" :key="category.strCategory">
              <div v-on:click="listCategory(categories[i].strCategory)">{{categories[i].strCategory}}</div>
            </a>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Header",
  data() {
    return {
      categories: []
    };
  },
  methods:{
    listCategory(category){
      axios
        .get(
          'https://www.themealdb.com/api/json/v1/1/filter.php?c=' + category
        ).then(response => (this.$emit('category', response.data.meals)))
    }
  },
  mounted() {
    axios
      .get(
        'https://www.themealdb.com/api/json/v1/1/list.php?c=list'
      )
      .then(response => (this.categories = response.data.meals));
  }
};
</script>

<style scoped>
  h1{
    font-family: "Century Gothic";
  }
  div {
    background-color: rgb(128, 0, 0);
    color: white;
    padding-top: 0%;
    border-radius: 10px;
  }
  #menu {
    overflow: auto;
    white-space: nowrap;
  }
  a {
    display: inline-block;
    padding: 15px;
  }
  a:hover{
    background:  #a94c4c;
  }
  /* https://www.w3schools.com/howto/howto_css_menu_horizontal_scroll.asp */
</style>