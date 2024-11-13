export const response_message = async (response) => {
    if (response.status === 401) {
        window.location.href = "/";
    }
    return await response.json();
}

export const response_error = (method, error, data) => {
    console.log(`Error at ${method} function`);
    console.log(error);

    return {
        ...data,
        message: `Error at ${method} function`
    };
}