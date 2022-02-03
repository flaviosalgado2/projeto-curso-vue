


<template>
    <div>
        <v-row>
            <v-col cols="12">
                <v-text-field v-model="textSearch" label="Pesquisa algo..." @input="doSearch"/>
            </v-col>
        </v-row>

        <v-row v-if="!textSearch" justify="center">
            <v-col cols="12" md="4" class="text-center">
                <p class="overline">Digite algo para iniciar a pesquisa.</p>
            </v-col>
        </v-row>

        <loading :condition="searchOnGoing">
            <v-row>            
                <v-col v-for="(book, i) in bookList" :key="i" cols="12" md="3" lg="2">
                    
                <book-item :book="book"/>

                </v-col>
            </v-row>
        </loading>
    </div>
</template>

<script>
    import Loading from '../loading/Loading.vue';
    import BookItem from '../book/BookItem.vue';

    const axios = require('axios');

    export default {
        components: { Loading, BookItem },
        name: 'BookList',
        data(){
            return{
                textSearch: '',
                bookList: [],
                searchOnGoing: false
            };
        },
        methods:{
            doSearch(){
                if(this.textSearch){
                    this.searchOnGoing = true;
                    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${this.textSearch}`).then((response) => {
                    //console.log(response);
                    
                    this.bookList = response.data.items;
                    this.searchOnGoing = false;
                    });
                }else{
                    this.bookList = [];
                }
            }
            
        }
        
    }
</script>

<style scoped>

</style>