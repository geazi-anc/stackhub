import api from "./api.js";


export function apiGetQuestions() {
    return api.get("/question")
}


export function apiAskAQuestion(title, body, published_by) {
    const headers = {
        "Content-Type": "application/json"
    }

    const data = {
        title: title,
        body: body,
        published_by: published_by
    }


    return api.post("/question", data, { headers })
}