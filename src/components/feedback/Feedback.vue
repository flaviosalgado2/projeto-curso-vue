<template>
    <div>
        <v-snackbar v-model="showMessage" multi-line :color="color">
                
                {{ message }}

            <template v-slot:action="{ attrs }">
                <v-btn
                color="white"
                text
                v-bind="attrs"
                @click="showMessage = false"
                >
                Close
                </v-btn>
            </template>
        </v-snackbar>
    </div>
</template>

<script>
    export default {
        name: 'Feedback',
        data(){
            return{
                message: '',
                color: '',
                showMessage: false,
            };
        },
        watch:{
            //quando houver alteracao da text na store, roda metodo setMessage aqui
            '$store.state.message.text' : 'setMessage',
        },
        methods:{
            setMessage(){
                this.message = this.$store.state.message.text;
                this.color = this.$store.state.message.type === 'ERROR' ? 'error' : 'success';
                this.showMessage = true;
            }
        },
    };
</script>

<style scoped>

</style>