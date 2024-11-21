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

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import SearchIcons from "@/assets/components/inputs/search_icons/SearchIcons";
import RenderIcon from "@/assets/components/inputs/search_icons/RenderIcon";

const types = [
    {
        name: "All",
        desc: "All types of category."
    },
    {
        name: "Style-of-stay",
        desc: "Types of housing such as cottages, villas, cabins, etc."
    },
    {
        name: "Location-and-nature",
        desc: "Location types such as sea, mountain, lake, etc."
    },
    {
        name: "Experience-types",
        desc: "Types of experiences like skiing, surfing, camping, etc."
    },
    {
        name: "Unique-features",
        desc: "Special features like beautiful swimming pool, spa, etc."
    },
    {
        name: "Group-guests",
        desc: "Categories for guest groups such as families, large groups, pets."
    },
    {
        name: "Other",
        desc: "Other categories such as newly added, trending, etc."
    }
];

export default function EditCategory() {
    const [selectedIcon, setSelectedIcon] = useState("");
    const [openDialog, setOpenDialog] = useState(false);
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
                    <div className="flex items-center justify-between mb-[20px] lg:mb-[40px]">
                        <h2 className="text-[26px] font-semibold">Edit category</h2>

                        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
                            <DialogTrigger asChild>
                                <Button className="bg-root">Delete</Button>
                            </DialogTrigger>

                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Are you sure you want to delete name category?</DialogTitle>
                                </DialogHeader>

                                <div className="flex items-center gap-x-[10px] mt-[20px]">
                                    <Button className="w-full" onClick={() => { setOpenDialog(false); }}>No</Button>
                                    <Button variant="outline" className="w-full">Yes</Button>
                                </div>
                            </DialogContent>
                        </Dialog>
                    </div>

                    <Form {...form}>
                        <form
                            className="space-y-[15px]"
                        >
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Category</FormLabel>
                                        <FormControl>
                                            <Input
                                                className="text-[13px] md:text-[14px]"
                                                placeholder="Type category name..."
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
                                                placeholder="Type category description..."
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
                                            <FormLabel>Category type</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select a category type."  className="w-full" />
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

                            <Button className="w-full bg-root">Save</Button>
                        </form>
                    </Form>
                </div>
            </div>

            <SearchIcons isForm={true} form={form} setSelectedIcon={setSelectedIcon} />
        </div>
    );
}