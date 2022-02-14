<template>
    <div>
        <v-container fluid>
            <v-row cols="12" md="4" lg="3">
                <v-col>
                    <h6 class="display-1 text-uppercase">Estantes</h6>
                </v-col>
            </v-row>

            <library-list />
        </v-container>
    </div>
</template>

<script>
    import LibraryList from './LibraryList.vue';

    export default {
       name: 'LibraryListPage', 
       components: { LibraryList }
    }
</script>

<style scoped>

</style>