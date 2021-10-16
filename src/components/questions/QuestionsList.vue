<template>
    <div id="questions-list">

        <br>
        <h2>Perguntas recentes</h2>
        <router-link to="/questions/ask" class="waves-effect waves-light btn">Faça uma pergunta</router-link>

        <div v-for="question in info" :key="question.id">
            <SingleQuestion v-bind:question="question"></SingleQuestion>
        </div>


        <router-view></router-view>
    </div>
</template>

<script>
    import SingleQuestion from './Question.vue'
    import api from '../../services/api.js'


export default {
        name: 'questions-list',
        data: function () {
            return {
                info: null,
            }
        },

        mounted() {
                    api
                .get('apiquestions/')
            .then(response => (this.info = response.data))
        },

        components: {
            SingleQuestion
        },

        computed: {
            user() {
                return this.$store.state.user
            }
        }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
