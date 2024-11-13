import { useForm } from "react-hook-form";

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";

export default function Pricing() {
    const form = useForm({
        defaultValues: {
            price: "",
            weekly: "",
            monthly: ""
        }
    });

    return (
        <div className="h-full flex items-center justify-center">
            <div className="my-auto w-full max-w-[800px]">
                <div>
                    <Form {...form}>
                        <form className="space-y-[40px]">
                            <div className="space-y-[20px]">
                                <h2 className="text-[24px] font-semibold">Pricing</h2>

                                <FormField
                                    control={form.control}
                                    name="price"
                                    render={({ field }) => {
                                        return (
                                            <FormItem>
                                                <FormLabel className="text-[15px] font-medium">Night pricing</FormLabel>

                                                <FormControl>
                                                    <div className="relative">
                                                        <Input
                                                            placeholder="Night price..."
                                                            className="pe-[30px] py-[25px]"
                                                            {...field}
                                                        />

                                                        <span className="absolute text-[14px] font-semibold top-[50%] translate-y-[-50%] right-[12px]">$</span>
                                                    </div>
                                                </FormControl>

                                                <FormDescription className="text-[14px]">Guest price before taxes $31</FormDescription>
                                            </FormItem>
                                        )
                                    }}
                                />
                            </div>

                            <div className="space-y-[20px]">
                                <h3 className="text-[24px] font-semibold">Discounts</h3>

                                <FormField
                                    control={form.control}
                                    name="weekly"
                                    render={({ field }) => {
                                        return (
                                            <FormItem>
                                                <FormLabel className="text-[15px] font-medium">Weekly <span className="font-normal text-neutral-400 text-[14px]">(For 7 nights or more)</span></FormLabel>

                                                <FormControl>
                                                    <div className="relative">
                                                        <Input
                                                            placeholder="Weekly discount percent..."
                                                            className="pe-[30px] py-[25px]"
                                                            {...field}
                                                        />

                                                        <span className="absolute text-[14px] font-semibold top-[50%] translate-y-[-50%] right-[12px]">%</span>
                                                    </div>
                                                </FormControl>
                                            </FormItem>
                                        )
                                    }}
                                />

                                <FormField
                                    control={form.control}
                                    name="monthly"
                                    render={({ field }) => {
                                        return (
                                            <FormItem>
                                                <FormLabel className="text-[15px] font-medium">Monthly <span className="font-normal text-neutral-400 text-[14px]">(For 28 nights or more)</span></FormLabel>

                                                <FormControl>
                                                    <div className="relative">
                                                        <Input
                                                            placeholder="Monthly discount percent..."
                                                            className="pe-[30px] py-[25px]"
                                                            {...field}
                                                        />

                                                        <span className="absolute text-[14px] font-semibold top-[50%] translate-y-[-50%] right-[12px]">%</span>
                                                    </div>
                                                </FormControl>
                                            </FormItem>
                                        )
                                    }}
                                />
                            </div>
                        </form>
                    </Form>
                </div>
            </div>
        </div>
    )
}
