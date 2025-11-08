<template>
  <div id="app">
    <Header v-on:category = emitResult($event) />

  </div>
</template>

<script>
import Header from './components/Header.vue'
import { getHealth } from './services/healthService'

export default {
  name: 'App',
  components: {
    Header,
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
  
}
</style>
