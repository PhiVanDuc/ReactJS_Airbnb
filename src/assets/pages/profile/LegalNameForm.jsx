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

export default function LegalNameForm() {
    const form = useForm({
        defaultValue: {
            first_name: "",
            last_name: ""
        }
    });

    const onSubmit = (value) => {

    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="mt-[20px]"
            >
                <div className="flex items-center gap-x-[10px] mb-[20px]">
                    <FormField
                        className="w-full"
                        control={form.control}
                        name="first_name"
                        render={({field}) => {
                            return (
                                <FormItem className="w-full">
                                    <FormLabel>First name on ID</FormLabel>
                                    <FormControl>
                                        <Input
                                            className="w-full py-[25px]"
                                            placeholder="First name on Id"
                                            {...field}
                                        />
                                    </FormControl>
                                </FormItem>
                            )
                        }}
                    />

                    <FormField
                        className="w-full"
                        control={form.control}
                        name="last_name"
                        render={({field}) => {
                            return (
                                <FormItem className="w-full">
                                    <FormLabel>Last name on ID</FormLabel>
                                    <FormControl>
                                        <Input
                                            className="w-full py-[25px]"
                                            placeholder="Last name on Id"
                                            {...field}
                                        />
                                    </FormControl>
                                </FormItem>
                            )
                        }}
                    />
                </div>

                <Button className="w-[100px]">Save</Button>
            </form>
        </Form>
    )
}