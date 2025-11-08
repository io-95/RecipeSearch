<template>
    <v-btn class="navButton" rounded="xl" :color="color" height="40" width=auto>
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