<template>
    <div>
        <br />
        <h2>Faça uma pergunta</h2>
        <span>{{ response }}</span>

        <br />
        <input v-model="title" type="text" placeholder="Título" autofocus required />
        <br />
        <input v-model="body" type="textarea" placeholder="Corpo" required />
        <br />
        <button
            v-on:click="askAQuestion()"
            class="btn waves-effect waves-light"
            type="submit"
        >Enviar</button>
    </div>
</template>



<script>
import { mapGetters } from 'vuex'
import { apiAskAQuestion } from "../../services/question"

export default {
    name: 'AskAQuestion',

    data: function () {
        return {
            title: null,
            body: null,
            response: null,
        }
    },

    computed: {
        ...mapGetters([
            'user',
        ])
    },

    methods: {
        askAQuestion: function () {

            apiAskAQuestion(this.title, this.body, this.user.id).then(response => {
                this.response = response.data
            })

            this.$router.push({ path: '/questions/' });
        }


    }
}
</script>