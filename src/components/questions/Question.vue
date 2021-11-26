<template>
    <div>
        <h3>{{ question.title }}</h3>
        <span>Publicado por {{ question.published_by.first_name }} {{ question.published_by.last_name }}</span>

        <h4>Pergunta</h4>
        <span>{{ question.body }}</span>
    </div>
</template>


<script>
import { mapGetters } from 'vuex'


export default {
    name: 'single-question',

    data: function () {
        return {
            response: null,
        }
    },

    props: {
        question: {
            _id: String,
            title: String,
            body: String,
            published_by: Object
        }
    },

    computed: {
        ...mapGetters([
            'user',
        ])
    },

}
</script>


