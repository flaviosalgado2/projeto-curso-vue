<template>
    <v-container fluid>
        <v-row justify="end">
            <v-col cols="12" md="2">
                <v-btn text block @click="goBack">
                    Voltar
                </v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <h4 class="display-1">{{ shelf.title }}</h4>
                <span class="overline ml-2">{{ shelf.volumeCount }} livros</span>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import api from '../api/api';

    export default {
        name: 'LibraryEntryPage',
        mixins: [api],
        data() {
            return {
                shelf: {},
            };

        },
        created() {
            this.get(`/users/101081075395919501212/bookshelves/${this.$route.params.id}`).then((response) => {
                this.shelf = response.data;
            });
        },
        methods: {
            goBack() {
                this.$router.push('/library');
            },
        },
    };
</script>

<style scoped>

</style>