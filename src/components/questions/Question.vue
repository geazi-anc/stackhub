<template>
    <div id="single_question">

        <br>
        <h3 v-on:click="description=!description">{{question.question_title}}</h3>
        <span>Publicado por {{question.published_by.first_name}} {{question.published_by.last_name}} em {{formatDate(question.pub_date)}}.</span>
        
        <div class="description-question"
             v-show="description">

            <br><span v-show="user.username === question.published_by.username" v-on:click="collapsibled=!collapsibled" class="waves-effect waves-light">Mais opções</span>

            <div v-show="collapsibled">

                <button v-on:click="deleteAQuestion()" class="waves-effect waves-light btn-large">Remover</button>
            </div>

            <br><br>
            <h4>Pergunta</h4>
            <p>{{question.question_text}}</p>

        </div>

    </div>
</template>

<script>
    import {parseISO} from 'date-fns';
    import { format} from 'date-fns-tz';
    import { ptBR} from 'date-fns/locale';
    import { mapGetters } from 'vuex'
    import api from '../../services/api.js'


export default {
        name: 'single-question',

        data: function () {
            return {
                apiResponse: null,
                collapsibled: false,
                description: false
            }
        },

        props: [
            'question'
        ],

        computed: {
            ...mapGetters([
                'user',
            ])
        },

        methods: {
            formatDate: function (myDate) {
                var finalDate = parseISO(myDate);
                finalDate = format(finalDate, "d 'de' MMMM 'de' yyyy 'às' HH:mm", {locale: ptBR});

                return finalDate;
            },

            deleteAQuestion: function () {
                const headers = { "Content-Type": "application/json" };
                const data = {
                    question_id: this.question.id,
                    user_id: this.user.userId
                };
                const myconfig = {
                    headers: headers,
                    data: data
                };

                api
                    .delete('api/question/delete/', myconfig)
                    .then(response => (this.apiResponse = response.data.msg));

            }

        }
}
</script>


