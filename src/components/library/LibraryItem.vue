<template>   
    <v-card class="mx-auto book-card">
        <v-card-title class="pb-3">
            <span>{{ shelf.title }}</span>
        </v-card-title>

        <v-card-text>
            <span>
                Número de Livros:
                <span class="font-weight-medium ml-1">{{ shelf.volumeCount }}</span>
            </span>
        </v-card-text>

        <v-card-actions>
            <v-btn text small color="primary" @click="goToDetails">Ver Detalhes</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    export default {        
        name: 'LibraryItem',
        props: {
            shelf: { type: Object, required: true },
        },
        methods: {
            goToDetails() {
                this.$router.push(`/library/${this.shelf.id}`);
            }
        }       
    }
</script>

<style scoped>

</style>