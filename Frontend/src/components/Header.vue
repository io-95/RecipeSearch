<template>
    <div class="header">
        <img class="logo" :src="logo" alt="logo" @click="returnToLandingPage">
        <div class="button">
          <navigation-button :color="$route.name === 'App' ? 'primary' : 'secondary'">Search Page</navigation-button>
          <navigation-button :color="$route.name === 'LandingPage' ? 'primary' : 'secondary'" targetPage="ingridients">Ingredient List</navigation-button>
        </div>
    </div>
</template>

<script>
import logo from '../assets/logo.png';
import NavigationButton from './NavigationButton.vue';

export default {
  name: "Header",
  components: { NavigationButton },
  data() {
    return {
      logo,
    };
  },
  methods:{
    returnToLandingPage(){
      this.$router.push('/');
    }
  },
  mounted() {}
}
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
    display: flex;
    gap: 16px;
    position: absolute;
    right: 143px;
  }
</style>