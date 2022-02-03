<template>   
    <v-card class="mx-auto book-card">
    <v-card-title>
        <span>{{ book.volumeInfo.title.substring(0, maxTitleLenght) }}</span>
        <span v-if="book.volumeInfo.title.lenght > maxTitleLenght">...</span>
    </v-card-title>

    <v-card-text>
        {{ book.volumeInfo.subtitle || 'Sem descrição' }}
    </v-card-text>
    
    <v-card-actions>
        <v-btn text small color="primary">Ver Detalhes</v-btn>
    </v-card-actions>
    </v-card>           
</template>

<script>

    export default {
        
        name: 'BookList',
        props: {
            book: { type: Object, required: true },
        },
        data(){
            return{
                maxTitleLenght: 20
            };
        }
        
    }
</script>



<style scoped>
    .book-card {
        height: 100%;
    }
</style>