<template>
    <div>
        <h1>Registrar-se</h1>
        <span>{{ response }}</span>

        <br />
        <input v-model="first_name" placeholder="Nome" type="text" required />
        <br />
        <input v-model="last_name" placeholder="Sobrenome" type="text" required />
        <br />
        <input v-model="email" placeholder="E-mail" type="email" required />
        <br />
        <input v-model="password" placeholder="Senha" type="password" required />
        <br />
        <button v-on:click="userSignUp()" type="submit">Registrar</button>
    </div>
</template>


<script>
import { mapGetters } from 'vuex'
import { apiSignUp } from "../../services/user"


export default {
    name: 'SignUp',

    data: function () {
        return {
            first_name: null,
            last_name: null,
            email: null,
            password: null,
            response: null
        }
    },

    computed: {
        ...mapGetters([
            'user',
        ])
    },

    methods: {
        userSignUp: function () {

            apiSignUp(this.first_name, this.last_name, this.email, this.password).then(response => {
                this.response = response.data;
            });

            this.$router.push({ path: '/' });
        }

    }
}
</script>

