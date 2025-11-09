<template>
  <div id="app">
    <Header v-on:category = emitResult($event) />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import router from './router/index'
import { getHealth } from './services/healthService'

export default {
  name: 'App',
  components: {
    Header,
    router
  },
  data() {
    return {
      elements: [],
      searchResult: []
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background-color: #8c2222;
  min-height: 100vh;
}
</style>
