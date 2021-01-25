<template>
    <div id="list" v-if="list != null">
        <div id="listElement"  v-for="(lists, i) in list" :key="lists">
            <h4 v-on:click="popup(list[i].idMeal)">{{ lists.strMeal }}</h4>
        </div>
    </div>
</template>

<script>
export default {
    name: 'list',
    methods: {
            popup(id){
                this.$emit('popup', id)
            }
    },
    props: {
        list: {
            type: Array
        }
   }
}
</script>

<style scoped>
    #listElement {
        background: beige;
        margin-left: 15%;
        margin-right: 15%;
        border-bottom-style: solid;
        border-bottom-color: rgb(128, 0, 0);
    }

    #listElement:hover {
        background: #e4d5b7;
    }
</style>