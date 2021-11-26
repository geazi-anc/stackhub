import api from "./api.js";

export function apiSignUp(first_name, last_name, email, password) {
    const headers = {
        "Content-Type": "application/x-www-form-urlencoded",
    }

    const data = {
        email: email,
        password: password,
        first_name: first_name,
        last_name: last_name
    }

    return api.post("/user", new URLSearchParams(data), { headers });
}


export function apiLogin(email, password){
    const headers = {
        "Content-Type": "application/x-www-form-urlencoded"
    }

    const data = {
        email: email,
        password: password
    }

    return api.post("/login", new URLSearchParams(data), { headers })
}