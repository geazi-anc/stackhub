import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)



const store = new Vuex.Store({
    state: {
        user: {
            id: null,
            first_name: null,
            last_name: null
        }
    },

    mutations: {
        addUser(state, payload) {
            state.user.id = payload.id;
            state.user.first_name = payload.first_name;
            state.user.last_name = payload.last_name
        }
    },

    getters: {
        user: state => {
            return state.user;
        }

    }
})

export { store };