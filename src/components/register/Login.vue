<template>
    <div>
        <br />
        <h2 v-if="user.id === null">Fazendo login</h2>
        <h2 v-else>Logado como {{ user.first_name }} {{ user.last_name }}</h2>
        <span>{{ response }}</span>

        <br />
        <input v-model="email" type="text" placeholder="E-mail" autofocus required />
        <br />
        <input v-model="password" type="password" placeholder="Senha" required />
        <br />
        <button v-on:click="login()" class="btn-large disabled">Login</button>
    </div>
</template>


<script>
import { mapGetters } from 'vuex'
import { apiLogin } from "../././../services/user"

export default {
    name: 'Login',

    data: function () {
        return {
            email: null,
            password: null,
            info: null
        }
    },

    computed: {
        ...mapGetters([
            'user'
        ])
    },

    methods: {
        login: function () {

            apiLogin(this.email, this.password).then(response => {
                this.response = response.data
                this.$store.commit("addUser", {
                    id: response.data.id,
                    first_name: response.data.first_name,
                    last_name: response.data.last_name
                });
            });

            this.$router.push({ path: '/' });
        }

    }
}
</script>

