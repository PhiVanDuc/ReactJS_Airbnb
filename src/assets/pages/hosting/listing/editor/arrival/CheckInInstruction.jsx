import { useForm } from "react-hook-form";

import {
    Form,
    FormField,
    FormItem,
    FormControl,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";

import { IoIosTime } from "react-icons/io";

export default function CheckInInstruction() {
    const form = useForm({
        defaultValues: {
            check_in_instruction: "",
        }
    })

    return (
        <div className='relative h-full w-full max-w-[800px] mx-auto'>
            <h2 className='text-[30px] font-semibold mb-[50px]'>Check-in instructions</h2>

            <Form {...form}>
                <form>
                    <FormField
                        control={form.control}
                        name="check_in_instruction"
                        render={({ field }) => {
                            return (
                                <FormItem>
                                    <FormControl>
                                    <Textarea
                                        {...field}
                                        placeholder="Let guests know how to check-in."
                                        className="p-0 text-[16px] resize-none border-none focus-visible:ring-offset-0 focus-visible:ring-0 h-[calc(100vh-150px)] max-h-[400px]"
                                    />

                                    </FormControl>
                                </FormItem>
                            )
                        }}
                    />
                </form>
            </Form>

            <div className="absolute bottom-0 left-0 flex items-center gap-x-[10px]">
                <IoIosTime size={20} className="text-neutral-600" />
                <p className="text-[15px] text-neutral-600">Shared once a booking is confirmed</p>
            </div>
        </div>
    )
}
