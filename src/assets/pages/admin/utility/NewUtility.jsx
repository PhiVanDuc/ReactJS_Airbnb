import { useState } from "react";
import { useForm } from "react-hook-form";

import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
} from "@/components/ui/form";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import SearchIcons from "@/assets/components/inputs/search_icons/SearchIcons";
import RenderIcon from "@/assets/components/inputs/search_icons/RenderIcon";

const types = [
    {
        name: "All",
        desc: ""
    },
    {
        name: "Basics",
        desc: ""
    },
    {
        name: "Bathroom",
        desc: ""
    },
    {
        name: "Bedroom and laundary",
        desc: ""
    },
    {
        name: "Entertainment",
        desc: ""
    },
    {
        name: "Heating and cooling",
        desc: ""
    },
    {
        name: "Home safety",
        desc: ""
    },
    {
        name: "Internet and office",
        desc: ""
    },
    
    {
        name: "Kitchen and dining",
        desc: ""
    },
    {
        name: "Location features",
        desc: ""
    },
    {
        name: "Outdoor",
        desc: ""
    },
    {
        name: "Parking and facilities",
        desc: ""
    },
    {
        name: "Services",
        desc: ""
    }
];

export default function NewUtility() {
    const [selectedIcon, setSelectedIcon] = useState("");
    const form = useForm({
        defaultValues: {
            name: "",
            desc: "",
            type: "",
            icon: ""
        }
    });

    return (
        <div>
            <div className="pb-[30px] mb-[30px] border-b border-neutral-300">
                <div className="w-full max-w-[800px] mx-auto">
                    <h2 className="text-[26px] font-semibold mb-[20px] lg:mb-[40px]">Create utility</h2>

                    <Form {...form}>
                        <form
                            className="space-y-[15px]"
                        >
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Utility</FormLabel>
                                        <FormControl>
                                            <Input
                                                className="text-[13px] md:text-[14px]"
                                                placeholder="Type utility name..."
                                                {...field}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="desc"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Description</FormLabel>
                                        <FormControl>
                                            <Input
                                                className="text-[13px] md:text-[14px]"
                                                placeholder="Type utility description..."
                                                {...field}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            <div className="flex items-center gap-x-[10px]">
                                <FormField
                                    control={form.control}
                                    name="type"
                                    render={({ field }) => (
                                        <FormItem className="w-full">
                                            <FormLabel>Utility type</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select a utility type."  className="w-full" />
                                                    </SelectTrigger>
                                                </FormControl>

                                                <SelectContent>
                                                    {
                                                        types.map(type => (
                                                            <SelectItem
                                                                value={type.name.toLowerCase().replace(/-/g, " ")}
                                                                key={type.name}
                                                            >
                                                                {type.name.replace(/-/g, " ")}
                                                            </SelectItem>
                                                        ))
                                                    }
                                                </SelectContent>
                                            </Select>
                                        </FormItem>
                                    )}
                                />

                                <div className="shrink-0 flex items-center justify-center w-[80px] aspect-square bg-slate-200 rounded-[10px]">
                                    {
                                        selectedIcon && <RenderIcon nameIcon={selectedIcon} propsIcon={{ size: 30, className: "text-neutral-600" }} />
                                    }
                                </div>
                            </div>

                            <Button className="w-full bg-root">Create</Button>
                        </form>
                    </Form>
                </div>
            </div>

            <SearchIcons isForm={true} form={form} setSelectedIcon={setSelectedIcon} />
        </div>
    );
}
