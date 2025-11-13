<template>
    <div 
        class="searchBarDiv" 
        :class="{ mobile: isMobile }"
        :style="{
            width: !isMobile && searchBarWidth ? searchBarWidth + 'px' : '',
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
            isMobile: false
        };
    },
    methods: {
        switchToSearchResult(){
            this.$router.push('/searchResults');
        },
        checkViewport() {
            this.isMobile = window.innerWidth <= 500
        }
    },
    mounted() {
        this.checkViewport()
        window.addEventListener('resize', this.checkViewport)
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.checkViewport)
    },
};
</script>

<style scoped>
    .searchBarDiv {
        background: #FFF6DB;
        height: 40px;
        border-radius: 9999px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        min-width: 353px;
    }

    .searchBarDiv.mobile {
        margin: 0 18px;
        width: calc(100% - 36px);
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

    @media (max-width: 500px)  {
        .searchBarDiv{
            width: 90.5%;
            margin-inline: 17.5px;
        }
    }
</style>