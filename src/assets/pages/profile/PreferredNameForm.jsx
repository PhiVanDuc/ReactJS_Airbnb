import { useForm } from "react-hook-form";

import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

export default function PreferredNameForm() {
    const form = useForm({
        defaultValue: {
            preferred_name: ""
        }
    });

    const onSubmit = (value) => {

    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex items-center gap-x-[10px] mt-[20px]"
            >
                <FormField
                    className="w-full"
                    control={form.control}
                    name="preferred_name"
                    render={({field}) => {
                        return (
                            <FormItem className="w-full">
                                <FormLabel>Preferred name</FormLabel>
                                <FormControl>
                                    <Input
                                        className="w-full py-[25px]"
                                        placeholder="Preferred name (optional)"
                                        {...field}
                                    />
                                </FormControl>
                            </FormItem>
                        )
                    }}
                />
            </form>
        </Form>
    )
}