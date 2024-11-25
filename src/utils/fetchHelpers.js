import { response_error, response_message } from "./response";

const API_SERVER = import.meta.env.VITE_API_SERVER;

const send = {
    public_get: async (pathname) => {
        try {
            const response = await fetch(`${API_SERVER}${pathname}`);
            return await response_message(response);
        }
        catch(error) {
            response_error("public get", error, { success: false });
        }
    },

    get: async (pathname) => {
        try {
            const refreshToken = localStorage.getItem(refreshToken);

            const response = await fetch(`${API_SERVER}${pathname}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${refreshToken}`
                }
            });
            return await response_message(response);
        }
        catch(error) {
            response_error("get", error, { success: false });
        }
    },

    public_post: async (data = {}, pathname) => {
        try {
            const response = await fetch(`${API_SERVER}${pathname}`, {
                method: "POST",
                credentials: 'include',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            });
            return await response_message(response);
        }
        catch(error) {
            response_error("public post", error, { success: false });
        }
    },

    post: async (data = {}, pathname) => {
        try {
            const refreshToken = localStorage.getItem(refreshToken);

            const response = await fetch(`${API_SERVER}${pathname}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${refreshToken}`
                },
                body: JSON.stringify(data)
            });
            return await response_message(response);
        }
        catch(error) {
            response_error("post", error, { success: false });
        }
    }
}

export default send;