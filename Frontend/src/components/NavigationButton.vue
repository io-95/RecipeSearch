<template>
    <v-btn rounded="xl" :color="color" height="40" width=auto>
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