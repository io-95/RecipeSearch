<template>
  <v-app id="app">
    <Header v-if="isDesktop"></Header> 
    <MobileHeader v-else></MobileHeader>
    <router-view></router-view>
  </v-app>
</template>

<script>
import Header from './components/Header.vue'
import router from './router/index'
import { getHealth } from './services/healthService'
import MobileHeader from './components/MobileHeader.vue'
import { useDisplay } from 'vuetify'
import { computed } from 'vue'


export default {
  name: 'App',
  components: {
    Header,
    MobileHeader,
    router
  },
  setup(){
    const isMobile = computed(() => display.xs.value)
    const isDesktop = computed(() => display.lgAndUp.value)

    const display = useDisplay()
    return { display, isDesktop, isMobile }
  },
  data() {
    return {
      elements: [],
      searchResult: [],
    };
  },
  methods: {
    emitResult: function(result) {
      this.elements = result;
    },
    emitId(meal){
      this.searchResult = meal;
    }
  },
  mounted(){
    getHealth();
  }
}
</script>

<style>
html, body, #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background-color: #8c2222;
  min-height: 100%;
}
</style>
