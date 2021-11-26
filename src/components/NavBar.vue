<template>
    <div>
        <nav>
            <div class="nav-wrapper">
                <ul id="nav-mobile" class="left hide-on-med-and-down">
                    <li>
                        <router-link to="/account/signup">Registrar-se</router-link>
                    </li>
                    <li v-if="user.id == null">
                        <router-link to="/account/login">Fazer login</router-link>
                    </li>
                    <li v-else>
                        <router-link to="/account/login">{{ user.first_name }} {{user.last_name}}</router-link>
                    </li>
                    <li>
                        <router-link to="/questions">Perguntas</router-link>
                    </li>
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
            'user'
        ])
    }
}
</script>

