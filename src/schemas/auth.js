import { z } from "zod";

export const signupSchema = z.object({
    fullname: z.string()
    .min(6, { message: "Fullname must be at least 6 characters long." })
    .max(60, { message: "Fullname must not exceed 60 characters." }),

    phone_number: z.string()
        .regex(/^\+?\d{1,4}(?:\s?\d+)*$/, { message: "Invalid phone number format. Must be a valid phone number." }),


    email: z.string()
        .email({ message: "Invalid email address format." }),

    password: z.string()
        .min(8, { message: "Password must be at least 8 characters long." })
        .max(128, { message: "Password must not exceed 128 characters." })
        .regex(/(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/, { 
            message: "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character."
        }),

    otp: z.string()
        .regex(/^\d{6}$/, { message: "OTP must be exactly 6 digits." }),
});