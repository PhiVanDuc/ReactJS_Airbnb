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

import ISO6391 from 'iso-639-1';
import { getCode, getNames } from "country-list";

export default function EmergencyContactForm() {
    const form = useForm({
        defaultValues: {
            name: "",
            relationship: "",
            preferred_lang: "",
            email: "",
            country_code: "",
            phone_number: "",
        }
    });

    const languages = ISO6391.getAllNames();
    const countryNames = getNames();

    const onSubmit = (value) => {

    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="mt-[20px] space-y-[20px]"
            >
                <div className="space-y-[15px]">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({field}) => {
                            return (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            className="py-[25px]"
                                            placeholder="Ex: Phi Van Duc..."
                                            {...field}
                                        />
                                    </FormControl>
                                </FormItem>
                            )
                        }}
                    />

                    <FormField
                        control={form.control}
                        name="relationship"
                        render={({field}) => {
                            return (
                                <FormItem>
                                    <FormLabel>Relationship</FormLabel>
                                    <FormControl>
                                        <Input
                                            className="py-[25px]"
                                            placeholder="Ex: parent, child, ..."
                                            {...field}
                                        />
                                    </FormControl>
                                </FormItem>
                            )
                        }}
                    />

                    <FormField
                        control={form.control}
                        name="preferred_lang"
                        render={({field}) => {
                            return (
                                <FormItem>
                                    <FormLabel>Preferred language</FormLabel>

                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger  className="py-[25px]">
                                                <SelectValue placeholder="Choose your prefer language." />
                                            </SelectTrigger>
                                        </FormControl>

                                        <SelectContent position="popper" sideOffset={10}>
                                            {languages.map(language => (
                                                <SelectItem key={language} value={ISO6391.getCode(language)}>
                                                    {language}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </FormItem>
                            )
                        }}
                    />

                    <FormField
                        control={form.control}
                        name="email"
                        render={({field}) => {
                            return (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            className="py-[25px]"
                                            placeholder="Ex: example@gmail.com"
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
                            name="country_code"
                            render={({ field }) => {
                                return (
                                    <FormItem className="w-full">
                                        <FormLabel>Country code</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger className="py-[25px] w-full">
                                                    <SelectValue placeholder="Choose your country code." />
                                                </SelectTrigger>
                                            </FormControl>

                                            <SelectContent position="popper" sideOffset={10}>
                                                {countryNames.map((country, index) => {
                                                    const code = getCode(country);
                                                    return (
                                                        <SelectItem key={code} value={code}>
                                                            ({code}) {country}
                                                        </SelectItem>
                                                    );
                                                })}
                                            </SelectContent>
                                        </Select>
                                    </FormItem>
                                );
                            }}
                        />

                        <FormField
                            control={form.control}
                            name="phone_number"
                            render={({field}) => {
                                return (
                                    <FormItem className="w-full">
                                        <FormLabel>Phone number</FormLabel>
                                        <FormControl>
                                            <Input
                                                className="py-[25px] w-full"
                                                placeholder="Ex: 0328xxxxxx..."
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