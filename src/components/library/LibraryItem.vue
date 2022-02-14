<template>   
    <v-card class="mx-auto book-card">
        <v-card-title>
            <span>{{ shelf.title }}</span>
        </v-card-title>
    </v-card>
</template>

<script>
    export default {        
        name: 'LibraryItem',
        props: {
            shelf: { type: Object, required: true },
        },       
    }
</script>

<style scoped>

</style>