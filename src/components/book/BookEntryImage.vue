<template>
    <div>
        <div>
            <v-col v-if="book.volumeInfo.imageLinks && book.volume.imageLinks.smallThumbnail" cols="12" md="3" class="text-center">
                <img :src="book.volumeInfo.imageLinks.smallThumbnail" />
            </v-col>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'BookEntryImage',
        props: {
            book: { type: Object, required: true }
        }
    }
</script>

<style scoped>

</style>