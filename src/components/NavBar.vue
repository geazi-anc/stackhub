<template>
    <div>
        <nav>
            <div class="nav-wrapper">

                <ul id="nav-mobile" class="left hide-on-med-and-down">

                    <li v-if="token.access === null"><router-link to="/account/login">Fazer login</router-link></li>
                    <li v-else><router-link to="/account/login">{{user.username}}</router-link></li>
                    <li><router-link to="/questions">Perguntas</router-link></li>

                </ul>
            </div>
        </nav>

        <router-view></router-view>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

export default {
        name: 'nav-bar',
        computed: {
            ...mapGetters([
                'token',
                'user'
            ])
        }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>
