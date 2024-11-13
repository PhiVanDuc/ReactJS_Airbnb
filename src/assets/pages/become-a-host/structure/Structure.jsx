import { useForm } from "react-hook-form";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
} from "@/components/ui/form";

import { GrHomeOption } from "react-icons/gr";

import { cn } from "@/lib/utils";

export default function Structure() {
    const form = useForm({
        defaultValues: {
            structure: ""
        }
    });

    return (
        <div className="flex items-center justify-center h-full">
            <div className="w-[640px] max-w-[640px] my-auto">
                <h2 className="text-[26px] lg:text-[30px] font-semibold mb-[30px] lg:text-center">Which of these best describes your place?</h2>

                <Form { ...form }>
                    <form className="w-full pb-[20px]">
                        <FormField
                            control={form.control}
                            name="structure"
                            render={({ field }) => {
                                return (
                                    <RadioGroup
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                        className="grid grid-cols-2 lg:grid-cols-3 grid-flow-row gap-[15px]"
                                    >
                                        <FormItem
                                            className={cn(
                                                "border-[1px] border-slate-300 rounded-[6px] outline-offset-[-2px] hover:outline hover:outline-[2px] hover:outline-black",
                                                // category?.id === field?.value && "outline outline-[2px] outline-offset-[-2px] outline-black bg-slate-50"
                                            )}
                                        >
                                            <FormLabel className="flex flex-col p-[20px] gap-y-[15px] cursor-pointer">
                                                <GrHomeOption className="text-[25px]" />
                                                <p className="text-[16px] font-normal">Home</p>
                                            </FormLabel>

                                            <FormControl
                                                style={{ margin: "0px" }}
                                            >
                                                <RadioGroupItem
                                                    value="home"
                                                    className="hidden"
                                                />
                                            </FormControl>
                                        </FormItem>

                                        <FormItem
                                            className={cn(
                                                "border-[1px] border-slate-300 rounded-[6px] outline-offset-[-2px] hover:outline hover:outline-[2px] hover:outline-black",
                                                // category?.id === field?.value && "outline outline-[2px] outline-offset-[-2px] outline-black bg-slate-50"
                                            )}
                                        >
                                            <FormLabel className="flex flex-col p-[20px] gap-y-[15px] cursor-pointer">
                                                <GrHomeOption className="text-[25px]" />
                                                <p className="text-[16px] font-normal">Home</p>
                                            </FormLabel>

                                            <FormControl
                                                style={{ margin: "0px" }}
                                            >
                                                <RadioGroupItem
                                                    value="home"
                                                    className="hidden"
                                                />
                                            </FormControl>
                                        </FormItem>

                                        <FormItem
                                            className={cn(
                                                "border-[1px] border-slate-300 rounded-[6px] outline-offset-[-2px] hover:outline hover:outline-[2px] hover:outline-black",
                                                // category?.id === field?.value && "outline outline-[2px] outline-offset-[-2px] outline-black bg-slate-50"
                                            )}
                                        >
                                            <FormLabel className="flex flex-col p-[20px] gap-y-[15px] cursor-pointer">
                                                <GrHomeOption className="text-[25px]" />
                                                <p className="text-[16px] font-normal">Home</p>
                                            </FormLabel>

                                            <FormControl
                                                style={{ margin: "0px" }}
                                            >
                                                <RadioGroupItem
                                                    value="home"
                                                    className="hidden"
                                                />
                                            </FormControl>
                                        </FormItem>

                                        <FormItem
                                            className={cn(
                                                "border-[1px] border-slate-300 rounded-[6px] outline-offset-[-2px] hover:outline hover:outline-[2px] hover:outline-black",
                                                // category?.id === field?.value && "outline outline-[2px] outline-offset-[-2px] outline-black bg-slate-50"
                                            )}
                                        >
                                            <FormLabel className="flex flex-col p-[20px] gap-y-[15px] cursor-pointer">
                                                <GrHomeOption className="text-[25px]" />
                                                <p className="text-[16px] font-normal">Home</p>
                                            </FormLabel>

                                            <FormControl
                                                style={{ margin: "0px" }}
                                            >
                                                <RadioGroupItem
                                                    value="home"
                                                    className="hidden"
                                                />
                                            </FormControl>
                                        </FormItem>
                                    </RadioGroup>
                                )
                            }}
                        />
                    </form>
                </Form>
            </div>
        </div>
    );
}
