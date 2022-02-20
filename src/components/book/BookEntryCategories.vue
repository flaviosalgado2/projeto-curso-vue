<template>
    <div>
        <div class="mt-4" v-if="book.volumeInfo.categories">
            <v-subheader>Categorias</v-subheader>
            <v-divider class="mb-2" />
            <v-chip v-for="(category, i) in book.volumeInfo.categories" :key="i" class="mr-3">
                {{ category }}
            </v-chip>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'BookEntryCategories.vue',
        props: {
            book: { type: Object, required: true }
        }
    }
</script>

<style lang="scss" scoped>

</style>