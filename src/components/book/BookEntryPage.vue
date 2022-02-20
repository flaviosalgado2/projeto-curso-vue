<template>
    <v-container fluid>
        
        <back-button />

        <v-row v-if="book && book.volumeInfo">
            
            <!-- <v-col v-if="(book.volumeInfo.imageLinks) && (book.volume.imageLinks.smallThumbnail)" cols="12" md="3" class="text-center">
                <img :src="book.volumeInfo.imageLinks.smallThumbnail" />
            </v-col> -->
            <book-entry-image :book="book" />
            
            <v-col cols="12" md="9">

                <book-entry-data :book="book" />

                <book-entry-autors :book="book" />

                <book-entry-categories :book="book" />

                <book-entry-actions :book="book" />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    
    import api from '../api/api';
    import BackButton from '../navigation/BackButton.vue';
    import bookService from './bookService';
    import BookEntryImage from './BookEntryImage.vue';
    import BookEntryData from './BookEntryData.vue';
    import BookEntryAutors from './BookEntryAutors.vue';
    import BookEntryCategories from './BookEntryCategories.vue';
    import BookEntryActions from './BookEntryActions.vue';

    export default {
        components: { BackButton, BookEntryImage, BookEntryData, BookEntryAutors, BookEntryCategories, BookEntryActions },
        name: 'BookEntryPage',
        mixins: [api, bookService],
        data(){
            return {
                book: {},
            };
        },
        created() {
            //console.log(this.$route.params.id);
            this.get(`/volumes/${this.$route.params.id}`).then((response) => {
                this.book = response.data;

                console.log("page: ")
                console.log(this.book);
            });
        },  
        methods: {
            goBack(){
                this.$router.push('/book');
            }
        },
    };
</script>

<style scoped>

</style>