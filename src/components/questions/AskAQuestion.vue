<template>
    <div>

        <br>
        <h2>Faça uma pergunta</h2>
        <br>
        <p>{{teste}}</p>

        <input v-model="title" type="text" placeholder="Título" autofocus required/>
        <br><input v-model="text" type="textarea" placeholder="Texto" required/>
        <br><button v-on:click="askAQuestion()" class="btn waves-effect waves-light" type="submit">Enviar</button>

    </div>
</template>



<script>
    import api from '../../services/api.js'
    import { mapGetters } from 'vuex'

    export default {
        name: 'AskAQuestion',

        data: function () {
            return {
                title: null,
                text: null,
                category: 3,
                teste: null,
            }
        },

        computed: {
            ...mapGetters([
                'user',
                'token'
            ])
        },

        methods: {
            askAQuestion: function () {
                const access = "Bearer " + this.token.access;

                //add access token and json format in header
                const headers = {
                    "content-type": "application/json",
                    "Authorization": access
                };

                //add the data
                const data = {
                    question_title: this.title,
                    question_text: this.text,
                    category: this.category,
                    published_by: this.user.userId,
                    pub_date: new Date()
                };

                api
                    .post("apiquestions/ask/", data, { headers });

                this.$router.push({ path: '/questions/' });
            }


        }
    }
</script>