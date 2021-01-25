<template>
  <div id="app">
    <Header v-on:category = emitResult($event) />
    <Centre v-on:search = emitResult($event) />
    <List :list = elements v-on:popup = emitId($event) />
    <Popup :recipe = searchResult />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Centre from './components/Centre.vue'
import List from './components/List.vue'
import Popup from './components/Popup.vue'

export default {
  name: 'App',
  components: {
    Header,
    Centre,
    List,
    Popup
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
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
}
</style>
