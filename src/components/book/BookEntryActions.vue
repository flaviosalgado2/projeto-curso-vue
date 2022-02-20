<template>
    <div>
        <div class="mt-4">
            <v-subheader>Ações</v-subheader>
            <v-divider class="mb-2" />
            <v-btn text color="primary" @click="goToPreview(book)">
                Ver Preview
            </v-btn>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'BookEntryActions.vue',
        props: {
            book: { type: Object, required: true }
        }
    }
</script>

<style lang="scss" scoped>

</style>