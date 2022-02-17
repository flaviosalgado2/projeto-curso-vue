<template>
    <v-container fluid>

        <back-button />

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
    import BackButton from '../navigation/BackButton.vue';

    export default {
        components: { BackButton },
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
        }
    };
</script>

<style scoped>

</style>