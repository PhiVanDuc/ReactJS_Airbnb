import { axiosInstance } from "../utils/axiousFetch";

export const callApiSendOtpCode = async (data) => {
    await axiosInstance.post("/auth/send_otp_code", { ...data });
}

export const callApiSignOut = async () => {
    await axiosInstance.delete("/auth/sign_out");
    localStorage.removeItem("info_user");
}