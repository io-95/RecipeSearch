<template>
    <div class="header">
        <img class="logo" :src="logo" alt="logo">
        <navigation-button class="button">Search Page</navigation-button>
        <navigation-button class="button">Ingredient List</navigation-button>
    </div>
</template>

<script>
import logo from '../assets/logo.png';
import NavigationButton from './NavigationButton.vue';
import axios from "axios";

export default {
  name: "Header",
  components: { NavigationButton },
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

  .header {
    width: 100%;
    background-color: #8c2222;
    color: white;
    display: flex;
    align-items: center;
  }

  .button{

  }
</style>