<template>
  <div id="questions-list">
    <br />
    <h2>Perguntas recentes</h2>
    <router-link to="/questions/ask" class="waves-effect waves-light btn">Faça uma pergunta</router-link>

    <br />
    <div v-for="question in questions" :key="question.id">
      <single-question v-bind:question="question" v-bind:published_by="question.published_by"></single-question>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SingleQuestion from "./Question.vue"
import { apiGetQuestions } from "../../services/question"


export default {
  name: 'questions-list',
  data: function () {
    return {
      questions: null,
    }
  },

  mounted() {
    apiGetQuestions().then(response => {
      this.questions = response.data
    })
  },

  components: {
    SingleQuestion
  },

  computed: {
    ...mapGetters([
      'user',
    ])
  },

  methods: {
    getQuestions: function () {

    }

  }
}
</script>

