import axios from "axios";
import { toast } from "sonner";

export const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_SERVER,
    withCredentials: true,
    timeout: 1000 * 60 * 10
});

axiosInstance.interceptors.request.use(
    function (request) {
        return request;
    },
    function (error) {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    function (response) {
        console.log("Success response:");
        console.log(response);

        toast.success(response?.data?.message);
        
        return response;
    },
    function (error) {
        toast.error(error.response.data.message);

        return Promise.reject(error);
    }
);