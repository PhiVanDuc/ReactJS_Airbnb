import { useForm } from "react-hook-form";

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

import { useEffect, useState } from "react";
import DialogFormHeader from "./DialogFormHeader";

export default function FormForgotPassword({ showFormForgotPassword, setShowFormForgotPassword }) {
    const [countdown, setCountdown] = useState(0);

    const form = useForm({
        defaultValues: {
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

    const handleSendOtp = () => {
        setCountdown(10);
    }

    const onSubmit = (values) => {}

    return (
        <Dialog
            open={showFormForgotPassword}
            onOpenChange={() => {
                setShowFormForgotPassword(false);
                form.reset();
            }}
        >
            <DialogContent>
                <DialogFormHeader header="Forgot password" description="Retrieve your password here!" />

                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-[40px]"
                    >
                        <div className="space-y-[20px]">
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
                                            <FormMessage />
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
                                            <FormMessage />
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
                                            <FormMessage />
                                        </FormItem>
                                    )
                                }}
                            />
                        </div>

                        <Button className="w-full bg-root">Change password</Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}