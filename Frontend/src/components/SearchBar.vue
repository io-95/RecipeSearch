<template>
    <div 
        class="searchBarDiv" 
        :style="{
            width: searchBarWidth ? searchBarWidth + 'px' : '100%',
            maxWidth: '100%',
            minWidth: '353px'
        }"
    >
        <input class="searchInput" placeholder="search for recipe..."></input>
        <v-btn class="searchButton" density="compact" icon="mdi-magnify" @click="switchToSearchResult"></v-btn>
    </div>
</template>

<script>

export default {
    name: "SearchBar",
        props: {
        searchBarWidth: {
            type: Number,
        }
    },
    data() {
        return {

        };
    },
    methods: {
        switchToSearchResult(){
            this.$router.push('/searchResults');
        }  
    },
    mounted(){     
    }
};
</script>

<style scoped>
    .searchBarDiv{
        width: 100%;
        min-width: 353px;
        max-width: 500px;
        background: #FFF6DB;
        height: 40px;
        border-radius: 9999px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-sizing: border-box;
    }

    .searchInput{
        display: flex; 
        justify-content: center;
        width: 95%;
        height: 70%;
        margin-left: 10px;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        outline: none;
        box-shadow: none;
        border: none;
        border-radius: 9999px;
        padding: 10px;
        box-sizing: border-box;
    }

    .searchButton{
        background-color: #8B3C3C;
        color: white;
        margin-right: 5px;
    }
</style>