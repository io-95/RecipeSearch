<template>
    <v-app-bar class="header" color="tertiary" :elevation="0">
        <img class="logo" :src="logo" alt="logo" @click="returnToLandingPage"></img>
        <template v-slot:append>
            <v-app-bar-nav-icon class="burger-menu" @click="drawer = !drawer"></v-app-bar-nav-icon>
        </template>
    </v-app-bar>

  <div v-if="drawer" class="overlay">
    <div class="button">
      <navigation-button :color="$route.name === 'LandingPage' ? 'primary' : 'secondary'">Search Page</navigation-button>
      <navigation-button :color="$route.name === 'IngridientsPage' ? 'primary' : 'secondary'" targetPage="ingridients">Ingredient List</navigation-button>
    </div>
  </div>
</template>

<script>
import logo from '../assets/logo.png';
import NavigationButton from './NavigationButton.vue';

export default {
  name: "MobileHeader",
  components: { NavigationButton },
  data() {
    return {
      drawer: false,
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
.overlay {
  position: fixed;
  top: 64px;
  left: 0;
  width: 100%;
  height: calc(100vh - 64px);
  background-color: #8c2222;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 998;
}

.overlay-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

  .burger-menu{
    margin-right: 10px;
  }

  .logo{
    height: 100%;
    width: auto;
    margin-left: 13px;
  }
</style>