import { useForm } from "react-hook-form";

import {
    Dialog,
    DialogContent
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

import FormOAuth from "./FormOAuth";
import DialogFormHeader from "./DialogFormHeader";

export default function FormSignIn({ showFormSignIn, setShowFormSignIn }) {
    const form = useForm({
        defaultValues: {
            email: "",
            password: ""
        }
    });

    const onSubmit = (values) => {
        console.log(values);
    }

    return (
        <Dialog
            open={showFormSignIn}
            onOpenChange={() => {
                setShowFormSignIn(false);
                form.reset();
            }}
        >
            <DialogContent className="gap-y-[30px]">
                <DialogFormHeader header="Sign in Airbnb" description="Welcome to Airbnb!" />

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
                                            <FormControl>
                                                <Input
                                                    placeholder="example@gmail.com"
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
                                name="password"
                                render={({ field }) => {
                                    return (
                                        <FormItem className="space-y-[5px]">
                                            <FormLabel className="text-[15px] font-semibold">Password</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="******"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )
                                }}
                            />
                        </div>

                        <Button className="w-full bg-root">Sign in</Button>
                    </form>
                </Form>

                <span className="relative block w-full h-[1px] bg-slate-200">
                    <p className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] px-[15px] py-[5px] w-fit text-[12px] text-neutral-400 bg-white font-medium">Or sign in with</p>
                </span>

                <FormOAuth />
            </DialogContent>
        </Dialog>
    )
}
