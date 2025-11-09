<template>
    <v-btn class="navButton" rounded="xl" :color="color" height="40" width=auto :click="switchPage">
        <slot />
    </v-btn>
</template>

<script>
    export default {
        name: "NavigationButton",
        props: {
            color: {
                type: String,
                default: "primary"
            },
            targetPage: {
                type: String,
                default: ""
            }
        },
        methods: {
            switchPage(){
                this.$router.push('/' + this.targetPage);
            }
        }
    }
</script>

<style>
    .navButton:hover{
        --v-btn-overlay-color: transparent;
        background-color: #ffc311 !important;
    }
</style>