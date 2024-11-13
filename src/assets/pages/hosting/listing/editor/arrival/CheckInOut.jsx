import { useForm } from "react-hook-form";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import {
    Form,
    FormField,
    FormItem,
    FormControl,
} from "@/components/ui/form";

export default function CheckInOut() {
    const form = useForm({
        defaultValues: {
            start_check_in: "3:00 PM",
            end_check_in: "Flexible",
            checkout: ""
        }
    });

    const onSubmit = (values) => {

    }

    return (
        <div className="w-full max-w-[800px] mx-auto">
            <h2 className='text-[30px] font-semibold mb-[50px]'>Check-in & checkout times</h2>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <h3 className="text-[15px] font-semibold mb-[10px]">Check-in window</h3>

                    <FormField
                        control={form.control}
                        name="start_check_in"
                        render={({ field }) => {
                            return (
                                <FormItem>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger className="text-[15px] py-[26px]">
                                                <SelectValue placeholder="Start time" />
                                            </SelectTrigger>
                                        </FormControl>

                                        <SelectContent>
                                            <SelectItem className="text-[16px]" key="Flexible" value="Flexible">Flexible</SelectItem>

                                            {Array.from({ length: 16 }, (_, index) => {
                                                const hour = index + 8;
                                                const period = hour < 12 ? "AM" : "PM";
                                                const formattedHour = hour <= 12 ? hour : hour - 12;
                                                const time = `${formattedHour}:00 ${period}`;
                                                
                                                return (
                                                    <SelectItem className="text-[16px]" key={time} value={time}>
                                                        {time}
                                                    </SelectItem>
                                                );
                                            })}
                                        </SelectContent>
                                    </Select>
                                </FormItem>
                            )
                        }}
                    />

                    <FormField
                        control={form.control}
                        name="end_check_in"
                        render={({ field }) => {
                            return (
                                <FormItem className="mb-[40px]">
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger className="text-[15px] py-[26px]">
                                                <SelectValue placeholder="End time" />
                                            </SelectTrigger>
                                        </FormControl>

                                        <SelectContent>
                                            <SelectItem className="text-[16px]" key="Flexible" value="Flexible">Flexible</SelectItem>

                                            {Array.from({ length: 10 }, (_, index) => {
                                                const hour = (index + 17) % 24;
                                                const period = hour < 12 || hour === 24 ? "AM" : "PM";
                                                const formattedHour = hour % 12 === 0 ? 12 : hour % 12;
                                                let time = `${formattedHour}:00 ${period}`;
                                                
                                                if (hour < 3) {
                                                    time += " (next day)";
                                                }
                                                
                                                return (
                                                    <SelectItem className="text-[16px]" key={time} value={time}>
                                                        {time}
                                                    </SelectItem>
                                                );
                                            })}
                                        </SelectContent>
                                    </Select>
                                </FormItem>
                            )
                        }}
                    />

                    <h3 className="text-[15px] font-semibold mb-[10px]">Checkout time</h3>

                    <FormField
                        control={form.control}
                        name="checkout"
                        render={({ field }) => {
                            return (
                                <FormItem className="mb-[40px]">
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger className="text-[15px] py-[26px]">
                                                <SelectValue placeholder="Select time" />
                                            </SelectTrigger>
                                        </FormControl>

                                        <SelectContent>
                                            {Array.from({ length: 24 }, (_, index) => {
                                                const hour = index;
                                                const period = hour < 12 ? "AM" : "PM";
                                                const formattedHour = hour % 12 === 0 ? 12 : hour % 12;
                                                const time = `${formattedHour}:00 ${period}`;
                                                
                                                return (
                                                    <SelectItem className="text-[16px]" key={time} value={time}>
                                                        {time}
                                                    </SelectItem>
                                                );
                                            })}
                                        </SelectContent>
                                    </Select>
                                </FormItem>
                            );
                        }}
                    />
                </form>
            </Form>
        </div>
    )
}