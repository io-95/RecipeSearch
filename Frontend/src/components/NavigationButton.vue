<template>
    <v-btn rounded="xl" color="primary" height="40" width=auto>
        <slot />
    </v-btn>
</template>

<script>
    export default {
        name: "NavigationButton",
    }
</script>