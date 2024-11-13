import { useState } from "react";
import { useForm } from "react-hook-form";

import { Textarea } from "@/components/ui/textarea";
import {
    Form,
    FormField,
    FormItem,
    FormControl,
    FormLabel
} from "@/components/ui/form";

export default function Title() {
    const form = useForm({
        defaultValues: {
            title: "",
        }
    });
    const [count, setCount] = useState(0);

    const handleChangeTitle = (event, onChange) => {
        if (count >= 50) {
            const values = event.target.value;
            if (values?.length < form.getValues("title")?.length) {
                setCount(values?.length);
                return onChange(event);
            }

            return;
        };
        setCount(event.target.value.length);

        return onChange(event);
    }

    return (
        <div className="flex items-start justify-center h-full">
            <div className='my-auto w-full max-w-[800px]'>
                <Form {...form}>
                    <form>
                        <FormField
                            control={form.control}
                            name="title"
                            render={({field}) => {
                                return (
                                    <FormItem>
                                        <FormLabel className="text-[16px] font-medium">Title</FormLabel>

                                        <FormControl style={{ marginTop: "10px" }} >
                                            <Textarea
                                                className="resize-none h-[100px] text-[16px]"
                                                {...field}
                                                onChange={(event) => {handleChangeTitle(event, field.onChange)}}
                                            />
                                        </FormControl>

                                        <p
                                            style={{
                                                marginTop: "10px"
                                            }}
                                            className="text-[14px] font-bold text-slate-500"
                                        >{count} / 50</p>
                                    </FormItem>
                                )
                            }}
                        />
                    </form>
                </Form>
            </div>
        </div>
    )
}
