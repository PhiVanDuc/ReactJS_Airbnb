import { useForm } from "react-hook-form";

import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl
} from '@/components/ui/form';

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
  
import { Input } from '@/components/ui/input';
import { Button } from "@/components/ui/button";

import { getNames } from "country-list";

export default function AddressForm() {
    const form = useForm({
        defaultValue: {
            country: "",
            city: "",
            street_address: "",
            detail: ""
        }
    });
    const countries = getNames();

    const onSubmit = (value) => {

    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="mt-[20px] space-y-[20px]"
            >
                <div className="space-y-[10px]">
                    <FormField
                        control={form.control}
                        name="country"
                        render={({ field }) => {
                            return (
                                <FormItem>
                                    <FormLabel>Country</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger className="py-[25px]">
                                                <SelectValue placeholder="Select country" />
                                            </SelectTrigger>
                                        </FormControl>

                                        <SelectContent>
                                            {
                                                countries.map((country) => {
                                                    return (
                                                        <SelectItem key={country} value={country}>{country}</SelectItem>
                                                    )
                                                })
                                            }
                                        </SelectContent>
                                    </Select>
                                </FormItem>
                            )
                        }}
                    />

                    <FormField
                        control={form.control}
                        name="city"
                        render={({ field }) => {
                            return (
                                <FormItem>
                                    <FormLabel>City</FormLabel>
                                    <FormControl>
                                        <Input
                                            className="py-[25px]"
                                            placeholder="Ex: Ha Noi..."
                                            {...field}
                                        />
                                    </FormControl>
                                </FormItem>
                            )
                        }}
                    />

                    <div className="flex items-center gap-x-[10px]">
                        <FormField
                            control={form.control}
                            name="street_address"
                            render={({ field }) => {
                                return (
                                    <FormItem className="w-full">
                                        <FormLabel>Street address</FormLabel>
                                        <FormControl>
                                            <Input
                                                className="py-[25px] w-full"
                                                placeholder="Street address..."
                                                {...field}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )
                            }}
                        />

                        <FormField
                            control={form.control}
                            name="detail"
                            render={({ field }) => {
                                return (
                                    <FormItem className="w-full">
                                        <FormLabel>Detail</FormLabel>
                                        <FormControl>
                                            <Input
                                                className="py-[25px] w-full"
                                                placeholder="Others detail"
                                                {...field}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )
                            }}
                        />
                    </div>
                </div>

                <Button className="w-[100px]">Save</Button>
            </form>
        </Form>
    )
}
