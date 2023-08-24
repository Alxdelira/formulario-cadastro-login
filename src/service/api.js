import axios from "axios";

export function setupAPIClient(ctx) {
    const api = axios.create({
        baseURL: 'http://localhost:3030',
        headers: {
            Accept: "application/json"
        }
    });

    return api;
}