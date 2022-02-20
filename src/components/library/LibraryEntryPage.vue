<template>
    <v-container fluid>
        <back-button />
        <v-row>
            <v-col cols="12">
                <h4 class="display-1">{{ shelf.title }}</h4>
                <span class="overline ml-2">{{ shelf.volumeCount }} livros</span>
            </v-col>
        </v-row>
        <v-row>            
            <v-col v-for="(book, i) in bookList" :key="i" cols="12" md="3" lg="2">                
                <book-item :book="book"/>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import api from '../api/api';
    import BackButton from '../navigation/BackButton.vue';
    import BookItem from '../book/BookItem.vue';

    export default {
        components: { BackButton, BookItem },
        name: 'LibraryEntryPage',
        mixins: [api],
        data() {
            return {
                shelf: {},
                bookList: []
            };

        },
        created() {
            this.get(`/users/101081075395919501212/bookshelves/${this.$route.params.id}`).then((response) => {
                this.shelf = response.data;
            });

            this.get(`/users/101081075395919501212/bookshelves/${this.$route.params.id}/volumes`).then((response) => {
                this.bookList = response.data.items;
            });
        }
    };
</script>

<style scoped>

</style>