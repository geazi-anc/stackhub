import Vue from 'vue'
import VueRouter from 'vue-router'
import QuestionsList from '../components/questions/QuestionsList.vue'
import AskAQuestion from '../components/questions/AskAQuestion.vue'
import Login from '../components/register/Login.vue'
import SignUp from '../components/register/SignUp.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/questions', name: 'questions-list', component: QuestionsList },
  { path: '/account/login', name: 'Login', component: Login },
  { path: '/account/signup', name: 'SignUp', component: SignUp },
    { path: '/questions/ask', name: 'AskAQuestion', component: AskAQuestion }
]

// eslint-disable-next-line no-new
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
