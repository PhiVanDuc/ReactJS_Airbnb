import { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema } from "@/schemas/auth";
import { axiosInstance } from "@/utils/axiousFetch";
import { callApiSendOtpCode } from "@/apis/auth";
import { toast } from "sonner";

import {
    Dialog,
    DialogContent,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp";

import { PhoneInput } from "../inputs/phone_numbers/PhoneInput";
import DialogFormHeader from "./DialogFormHeader";

export default function FormRegistor({ showFormRegistor, setShowFormRegistor }) {
    const [countdown, setCountdown] = useState(0);

    const form = useForm({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            fullname: "",
            phone_number: "",
            email: "",
            password: "",
            otp: ""
        }
    });

    useEffect(() => {
        let timer;

        if (countdown > 0) {
            timer = setInterval(() => {
                setCountdown(prev => prev - 1);
            }, 1000);
        }

        return () => clearInterval(timer); 
    }, [countdown]);

    const handleSendOtp = async () => {
        const email = form.getValues("email");

        if (!email) {
            toast.warning("Please type your email first!");
            return;
        }

        setCountdown(5);
        await callApiSendOtpCode({
            email,
            type: "sign up",
            desc_mail: "Your sign up otp code"
        });
    }

    const onSubmit = async (values) => {
        const data = {
            fullname: values.fullname,
            phone_number: values.phone_number,
            email: values.email,
            password: values.password,
            otp: values.otp,
        }

        await axiosInstance.post("/auth/sign_up", { ...data });
        setShowFormRegistor(false);
        form.reset();
    }

    return (
        <Dialog
            open={showFormRegistor}
            onOpenChange={() => {
                setShowFormRegistor(false);
                
                form.reset();
            }}
        >
            <DialogContent className="gap-y-[30px]">
                <DialogFormHeader header="Registor Airbnb" description="Welcome to Airbnb!" />

                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-[40px]"
                    >
                        <div className="space-y-[20px]">
                            <FormField
                                control={form.control}
                                name="fullname"
                                render={({ field }) => {
                                    return (
                                        <FormItem className="space-y-[5px]">
                                            <FormLabel className="text-[15px] font-semibold">Fullname</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Phi Van Duc"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage className="text-[14px] font-normal" />
                                        </FormItem>
                                    )
                                }}
                            />

                            <FormField
                                control={form.control}
                                name="phone_number"
                                render={({ field }) => (
                                    <FormItem className="space-y-[5px]">
                                        <FormLabel className="text-[15px] font-semibold">Phone Number</FormLabel>
                                        <FormControl>
                                            <PhoneInput
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage className="text-[14px] font-normal" />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => {
                                    return (
                                        <FormItem className="space-y-[5px]">
                                            <FormLabel className="text-[15px] font-semibold">Email</FormLabel>
                                            <div className="flex items-center gap-x-[5px]">
                                                <FormControl>
                                                    <Input
                                                        placeholder="example@gmail.com"
                                                        {...field}
                                                    />
                                                </FormControl>

                                                <Button
                                                    type="button"
                                                    className="shrink-0 bg-root text-[14px] font-semibold w-[100px]"
                                                    onClick={handleSendOtp}
                                                    disabled={countdown > 0}
                                                >
                                                    {
                                                        countdown > 0 ? countdown : "Send OTP"
                                                    }
                                                </Button>
                                            </div>
                                            <FormMessage className="text-[14px] font-normal" />
                                        </FormItem>
                                    )
                                }}
                            />

                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => {
                                    return (
                                        <FormItem className="space-y-[5px]">
                                            <FormLabel className="text-[15px] font-semibold">Password</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="******"
                                                    type="password"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage className="text-[14px] font-normal" />
                                        </FormItem>
                                    )
                                }}
                            />

                            <FormField
                                control={form.control}
                                name="otp"
                                render={({ field }) => {
                                    return (
                                        <FormItem className="space-y-[5px]">
                                            <FormLabel className="text-[15px] font-semibold">OTP code</FormLabel>
                                            <FormControl>
                                                <InputOTP
                                                    maxLength={6}
                                                    {...field}
                                                >
                                                    <InputOTPGroup>
                                                        <InputOTPSlot index={0} />
                                                        <InputOTPSlot index={1} />
                                                        <InputOTPSlot index={2} />
                                                    </InputOTPGroup>

                                                    <InputOTPSeparator />

                                                    <InputOTPGroup>
                                                        <InputOTPSlot index={3} />
                                                        <InputOTPSlot index={4} />
                                                        <InputOTPSlot index={5} />
                                                    </InputOTPGroup>
                                                </InputOTP>
                                            </FormControl>
                                            <FormMessage className="text-[14px] font-normal" />
                                        </FormItem>
                                    )
                                }}
                            />
                        </div>

                        <Button className="w-full bg-root">Registor</Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}