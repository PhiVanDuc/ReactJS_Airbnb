import { useForm } from "react-hook-form";

import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";

import { PiSwimmingPool } from "react-icons/pi";

import { cn } from "@/lib/utils";

export default function Utilities() {
    const form = useForm({
        defaultValues: {
            favorite: [],
            standout: [],
            safety: [],
        }
    });

    return (
        <div className="flex items-center justify-center h-full">
            <div className="w-[640px] max-w-[640px] space-y-[40px] my-auto">
                <div className="space-y-[5px]">
                    <h2 className="text-[26px] lg:text-[30px] font-semibold">Tell guests what your place has to offer.</h2>
                    <p className="text-[14px] md:text-[16px] lg:text-[18px] text-slate-400">You can add more utilities after you publish your listing.</p>
                </div>

                <Form {...form}>
                    <form className="space-y-[40px]">
                        <div className="space-y-[15px]">
                            <h3 className="text-[16px] lg:text-[18px] font-medium">What about these guest favorites?</h3>

                            <div className="grid lg:grid-cols-3 gap-[15px]">
                                <FormField
                                    control={form.control}
                                    name="favorite"
                                    render={({ field }) => (
                                        <FormItem
                                            className={cn(
                                                "border border-slate-300 rounded-[6px] outline-offset-[-2px] hover:outline hover:outline-[2px] hover:outline-black",
                                                // field.value.includes(utility?.id) && "outline outline-[2px] outline-offset-[-2px] outline-black bg-slate-50"
                                            )}
                                        >
                                            <FormLabel className="flex flex-col p-[16px] gap-y-[15px] cursor-pointer">
                                                <PiSwimmingPool className="text-[30px]" />
                                                <p className="font-normal">Pool</p>
                                            </FormLabel>
                                            
                                            <FormControl style={{ margin: "0px" }}>
                                                <Checkbox
                                                    // checked={field.value.includes(utility?.id)}
                                                    // onCheckedChange={(checked) => {
                                                    //     field.onChange(
                                                    //         checked
                                                    //             ? [...field.value, utility?.id]
                                                    //             : field.value.filter(value => value !== utility?.id)
                                                    //     );
                                                    // }}
                                                    className="hidden"
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>

                        <div className="space-y-[15px]">
                            <h3 className="text-[16px] lg:text-[18px] font-medium">Do you have any standout utilities?</h3>

                            <div className="grid lg:grid-cols-3 gap-[15px]">
                                <FormField
                                    control={form.control}
                                    name="favorite"
                                    render={({ field }) => (
                                        <FormItem
                                            className={cn(
                                                "border border-slate-300 rounded-[6px] outline-offset-[-2px] hover:outline hover:outline-[2px] hover:outline-black",
                                                // field.value.includes(utility?.id) && "outline outline-[2px] outline-offset-[-2px] outline-black bg-slate-50"
                                            )}
                                        >
                                            <FormLabel className="flex flex-col p-[16px] gap-y-[15px] cursor-pointer">
                                                <PiSwimmingPool className="text-[30px]" />
                                                <p className="font-normal">Pool</p>
                                            </FormLabel>
                                            
                                            <FormControl style={{ margin: "0px" }}>
                                                <Checkbox
                                                    // checked={field.value.includes(utility?.id)}
                                                    // onCheckedChange={(checked) => {
                                                    //     field.onChange(
                                                    //         checked
                                                    //             ? [...field.value, utility?.id]
                                                    //             : field.value.filter(value => value !== utility?.id)
                                                    //     );
                                                    // }}
                                                    className="hidden"
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>

                        <div className="space-y-[15px]">
                            <h3 className="text-[16px] lg:text-[18px] font-medium">Do you have any of these safety items?</h3>

                            <div className="grid lg:grid-cols-3 gap-[15px]">
                                <FormField
                                    control={form.control}
                                    name="favorite"
                                    render={({ field }) => (
                                        <FormItem
                                            className={cn(
                                                "border border-slate-300 rounded-[6px] outline-offset-[-2px] hover:outline hover:outline-[2px] hover:outline-black",
                                                // field.value.includes(utility?.id) && "outline outline-[2px] outline-offset-[-2px] outline-black bg-slate-50"
                                            )}
                                        >
                                            <FormLabel className="flex flex-col p-[16px] gap-y-[15px] cursor-pointer">
                                                <PiSwimmingPool className="text-[30px]" />
                                                <p className="font-normal">Pool</p>
                                            </FormLabel>
                                            
                                            <FormControl style={{ margin: "0px" }}>
                                                <Checkbox
                                                    // checked={field.value.includes(utility?.id)}
                                                    // onCheckedChange={(checked) => {
                                                    //     field.onChange(
                                                    //         checked
                                                    //             ? [...field.value, utility?.id]
                                                    //             : field.value.filter(value => value !== utility?.id)
                                                    //     );
                                                    // }}
                                                    className="hidden"
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    )
}
