<template>   
    <v-card class="mx-auto book-card">
        <div class="text-center pt-3">
            <img :src="book.volumeInfo.imageLinks.smallThumbnail" />
        </div>
        <v-card-title>
            <span>{{ book.volumeInfo.title.substring(0, maxTitleLenght) }}</span>
            <span v-if="book.volumeInfo.title.lenght > maxTitleLenght">...</span>
        </v-card-title>

        <v-card-text>
            {{ book.volumeInfo.subtitle || 'Sem descrição' }}
        </v-card-text>
        
        <v-card-actions>
            <v-btn text small color="primary" @click="goToDetails">Ver Detalhes</v-btn>
            <v-btn v-if="book.volumeInfo.previewLink" text small color="primary" @click="goToPreview">Ver Preview</v-btn>
        </v-card-actions>
    
    </v-card>           
</template>

<script>
    export default {        
        name: 'BookItem',
        props: {
            book: { type: Object, required: true },
        },
        created(){
            console.log("book item: ");
            console.log(this.book);
        },
        data(){
            return{
                maxTitleLenght: 20,
            };
        },
        methods: {
            goToDetails() {
                this.$router.push(`/book/${this.book.id}`);
            },
            goToPreview(){
                window.open(this.book.volumeInfo.previewLink, '_blank');
            }
        }
        
    }
</script>

<style scoped>
    .book-card {
        height: 100%;
    }
</style>