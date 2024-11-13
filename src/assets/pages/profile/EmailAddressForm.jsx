import { useForm } from "react-hook-form";

import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from "@/components/ui/button";

export default function EmailAddressForm() {
    const form = useForm({
        defaultValue: {
            email_address: "",
        }
    });

    const onSubmit = (value) => {

    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="mt-[20px] space-y-[20px]"
            >
                <FormField
                    className="w-full"
                    control={form.control}
                    name="email_address"
                    render={({field}) => {
                        return (
                            <FormItem className="w-full">
                                <FormLabel>Email address</FormLabel>
                                <FormControl>
                                    <Input
                                        className="w-full py-[25px]"
                                        placeholder="Email address"
                                        {...field}
                                    />
                                </FormControl>
                            </FormItem>
                        )
                    }}
                />

                <Button className="w-[100px]">Save</Button>
            </form>
        </Form>
    )
}
