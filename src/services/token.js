import api from './api.js'
import { store } from '../store/index'

export function getToken(username, password) {
    const data = {
        username: username,
        password: password
    };

    const headers = {
        "Content-Type": "application/json"
    };

    return api.post("api/token/", data, { headers });
}

export async function checkIfTokenIsValid() {

    const headers = { "content-type": "application/json" }
    const data = { "token": store.getters.token.access }

    try {
        await api.post("api/token/verify/", data, { headers })
    }

    catch (error) {
        const data2 = { refresh: store.getters.token.refresh };

        const response = await api.post("api/token/refresh/", data2, { headers });

                 store.commit("addToken", {
                    access: response.data.access,
                    refresh: store.getters.token.refresh
                });
    }


}