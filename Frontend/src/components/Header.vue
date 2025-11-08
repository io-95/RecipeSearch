<template>
    <div id="Header">
        <img class="logo" :src="logo" alt="logo">
        <div id="menu" v-if="categories.length > 0">
            <a v-for="(category, i) in categories" :key="category.strCategory">
              <div v-on:click="listCategory(categories[i].strCategory)">{{categories[i].strCategory}}</div>
            </a>
        </div>
    </div>
</template>

<script>
import logo from '../assets/logo.png';
import axios from "axios";

export default {
  name: "Header",
  data() {
    return {
      logo,
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
  .logo{
    height: 104px;
    width: auto;
    margin-left: 35px;
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
</style>