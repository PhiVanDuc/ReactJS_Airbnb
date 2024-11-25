import { useState } from "react";

export default function useLocalstorage() {
    const [error, setError] = useState({
        status: false,
        message: ""
    });

    const resetError = () => {
        setError({
            status: false,
            message: ""
        });
    };

    const get = (key) => {
        resetError();

        if (!key) {
            setError({
                status: true,
                message: "Missing key"
            });
            return null;
        }

        const value = localStorage.getItem(key);

        if (!value) return null;

        try {
            return JSON.parse(value);
        } catch (error) {
            setError({
                status: true,
                message: "Error parsing JSON"
            });
        }
    };

    const set = (key, value) => {
        resetError();

        if (!key || value === undefined) {
            setError({
                status: true,
                message: "Missing key or value"
            });
            return;
        }

        try {
            localStorage.setItem(key, JSON.stringify(value));
            return get(key);
        } catch (error) {
            setError({
                status: true,
                message: "Error setting item in localStorage"
            });
        }
    };

    const remove = (key) => {
        resetError();

        if (!key) {
            setError({
                status: true,
                message: "Missing key"
            });
            return;
        }

        localStorage.removeItem(key);
    };

    return { error, get, set, remove };
}