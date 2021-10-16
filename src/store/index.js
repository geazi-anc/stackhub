import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)



const store = new Vuex.Store({
    state: {
        user: {
            username: null,
            userId: -1
        },

        token: {
            access: null,
            refresh: null
        }
    },

    mutations: {
        addUser(state, payload) {
            state.user.username = payload.username;
            state.user.userId = payload.userId;
        },

        addToken(state, payload) {
            state.token.access = payload.access;
            state.token.refresh = payload.refresh;
        }
    },

    getters: {
        user: state => {
            return state.user;
        },
        token: state => {
            return state.token;
        }
    }
})

export { store };