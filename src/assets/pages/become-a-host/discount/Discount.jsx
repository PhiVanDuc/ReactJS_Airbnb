import { useForm } from "react-hook-form";

import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";

import {
    RadioGroup,
    RadioGroupItem
} from "@/components/ui/radio-group";

import { HiOutlineHome } from "react-icons/hi2";
import { PiDoorOpenLight } from "react-icons/pi";
import { BsPeople } from "react-icons/bs";

import { cn } from "@/lib/utils";

export default function Discount() {
    const form = useForm({
        defaultValues: {

        }
    })

    return (
        <div className="flex items-center justify-center h-full">
            <div className="w-[640px] max-w-[640px] my-auto">
                <div className="space-y-[5px] mb-[30px]">
                    <h2 className="text-[26px] lg:text-[30px] font-semibold">What type of place will guests have?</h2>
                    <p className="text-[14px] md:text-[16px] lg:text-[18px] text-slate-400">
                        Help your place stand out to get booked faster and earn your first reviews.
                    </p>
                </div>

                <Form {...form}>
                    <form className="w-full space-y-[20px]">
                        <FormField 
                            control={form.control}
                            name="privacy_type"
                            render={({ field }) => {
                                return (
                                    <FormItem className="w-full">
                                        <FormLabel className="flex items-center justify-between w-full cursor-pointer px-[20px] py-[10px] hover:bg-slate-50 rounded-[10px] border border-neutral-300">
                                            <div className="flex items-center gap-x-[5px]">
                                                <div className="py-[15px] p w-[80px] rounded-[5px] border flex items-center justify-center">
                                                    <p className="text-[19px] font-bold text-neutral-500">20%</p>
                                                </div>

                                                <div className="space-y-[5px] p-[25px]">
                                                    <h3 className="text-[16px] font-medium">New listing promotion</h3>
                                                    <p className="text-[15px] text-slate-500 font-normal leading-5">Offer 20% off your first 3 bookings.</p>
                                                </div>
                                            </div>

                                            <FormControl style={{ margin: "0px" }}>
                                                <Checkbox
                                                    className="w-[20px] h-[20px]"
                                                />
                                            </FormControl>
                                        </FormLabel>
                                    </FormItem>
                                )
                            }}
                        />

                        <FormField 
                            control={form.control}
                            name="privacy_type"
                            render={({ field }) => {
                                return (
                                    <FormItem className="w-full">
                                        <FormLabel className="flex items-center justify-between w-full cursor-pointer px-[20px] py-[10px] hover:bg-slate-50 rounded-[10px] border border-neutral-300">
                                            <div className="flex items-center gap-x-[5px]">
                                                <div className="py-[15px] p w-[80px] rounded-[5px] border flex items-center justify-center">
                                                    <p className="text-[19px] font-bold text-neutral-500">0%</p>
                                                </div>

                                                <div className="space-y-[5px] p-[25px]">
                                                    <h3 className="text-[16px] font-medium">Weekly discount</h3>
                                                    <p className="text-[15px] text-slate-500 font-normal leading-5">For stays of 7 nights or more.</p>
                                                </div>
                                            </div>

                                            <FormControl style={{ margin: "0px" }}>
                                                <Checkbox
                                                    className="w-[20px] h-[20px]"
                                                />
                                            </FormControl>
                                        </FormLabel>
                                    </FormItem>
                                )
                            }}
                        />

                        <FormField 
                            control={form.control}
                            name="privacy_type"
                            render={({ field }) => {
                                return (
                                    <FormItem className="w-full">
                                        <FormLabel className="flex items-center justify-between w-full cursor-pointer px-[20px] py-[10px] hover:bg-slate-50 rounded-[10px] border border-neutral-300">
                                            <div className="flex items-center gap-x-[5px]">
                                                <div className="py-[15px] p w-[80px] rounded-[5px] border flex items-center justify-center">
                                                    <p className="text-[19px] font-bold text-neutral-500">15%</p>
                                                </div>

                                                <div className="space-y-[5px] p-[25px]">
                                                    <h3 className="text-[16px] font-medium">Monthly discount</h3>
                                                    <p className="text-[15px] text-slate-500 font-normal leading-5">For stays of 28 nights or more.</p>
                                                </div>
                                            </div>

                                            <FormControl style={{ margin: "0px" }}>
                                                <Checkbox
                                                    className="w-[20px] h-[20px]"
                                                />
                                            </FormControl>
                                        </FormLabel>
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
