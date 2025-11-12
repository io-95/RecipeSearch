<template>
    <v-app-bar class="header" color="tertiary" :elevation="0">
        <img class="logo" :src="logo" alt="logo" @click="returnToLandingPage"></img>
        <template v-slot:append>
            <v-app-bar-nav-icon class="burger-menu"></v-app-bar-nav-icon>
        </template>
    </v-app-bar>
</template>

<script>
import logo from '../assets/logo.png';

export default {
  name: "MobileHeader",
  components: {},
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
  .burger-menu{
    margin-right: 10px;
  }

  .logo{
    height: 104px;
    width: auto;
    margin-left: 13px;
  }
</style>