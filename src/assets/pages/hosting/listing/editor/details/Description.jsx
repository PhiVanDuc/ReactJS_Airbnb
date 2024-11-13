import { useState } from "react";
import { useForm } from "react-hook-form";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import { FiMinus } from "react-icons/fi";

export default function Description() {
    const form = useForm({
        defaultValues: {
            description: "You'll have a great time at this comfortable place to stay.",
            description_property: "You'll have a great time at this comfortable place to stay.",
            description_guest_access: "",
            description_interaction: "",
            description_other: "",
        }
    });

    const [showTextareas, setShowTextareas] = useState(() => {
        return {
            description: form.getValues("description") ? true : false,
            description_property: form.getValues("description_property") ? true : false,
            description_guest_access: form.getValues("description_guest_access") ? true : false,
            description_interaction: form.getValues("description_interaction") ? true : false,
            description_other: form.getValues("description_other") ? true : false,
        }
    });
    

    const handleClickAddDescription = (type) => {
        setShowTextareas((state) => {
            return {
                ...state,
                [type]: true,
            }
        })
    }

    const handleClickDeleteDescription = (type) => {
        form.setValue(type, "");
        setShowTextareas((state) => {
            return {
                ...state,
                [type]: false,
            }
        })
    }

    return (
        <div className="flex justify-center">
            <div className="w-full max-w-[800px]">
                <h2 className="text-[30px] font-semibold mb-[60px]">Description</h2>

                <Form {...form}>
                    <form className="space-y-[20px]">
                        <FormField
                            control={form.control}
                            name="description"
                            render={({field}) => {
                                return (
                                    <FormItem>
                                        <FormLabel className="text-[15px]">Lising description</FormLabel>

                                        <FormControl>
                                            <Textarea
                                                className="resize-none h-[100px] text-[16px] px-[20px] py-[15px]"
                                                placeholder="Description..."
                                                {...field}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )
                            }}
                        />

                        {
                            !showTextareas.description_property ?
                            <Button
                                type="button"
                                className="w-full py-[25px] bg-neutral-50 text-neutral-600 border-[1.5px] border-solid border-neutral-200 hover:bg-neutral-100 transition"
                                onClick={() => { handleClickAddDescription("description_property"); }}>Add description about your property</Button> :
                            (
                                <FormField
                                    control={form.control}
                                    name="description_property"
                                    render={({field}) => {
                                        return (
                                            <FormItem>
                                                <div className="flex items-center justify-between">
                                                    <FormLabel className="text-[15px]">Your property</FormLabel>
                                                    <div 
                                                        className="w-[35px] h-[35px] rounded-full flex items-center justify-center hover:bg-slate-100 transition cursor-pointer"
                                                        onClick={() => { handleClickDeleteDescription("description_property") }}
                                                    >
                                                        <FiMinus size={25} />
                                                    </div>
                                                </div>

                                                <FormControl>
                                                    <Textarea
                                                        className="resize-none h-[100px] text-[16px] px-[20px] py-[15px]"
                                                        placeholder="Describe your property..."
                                                        {...field}
                                                    />
                                                </FormControl>
                                            </FormItem>
                                        )
                                    }}
                                />
                            )
                        }
                        
                        {
                            !showTextareas.description_guest_access ?
                            <Button
                                type="button"
                                className="w-full py-[25px] bg-neutral-50 text-neutral-600 border-[1.5px] border-solid border-neutral-200 hover:bg-neutral-100 transition"
                                onClick={() => { handleClickAddDescription("description_guest_access") }}>Add description about guest access</Button> :
                            (
                                <FormField
                                    control={form.control}
                                    name="description_guest_access"
                                    render={({field}) => {
                                        return (
                                            <FormItem>
                                                <div className="flex items-center justify-between">
                                                    <FormLabel className="text-[15px]">Guest access</FormLabel>
                                                    <div 
                                                        className="w-[35px] h-[35px] rounded-full flex items-center justify-center hover:bg-slate-100 transition cursor-pointer"
                                                        onClick={() => { handleClickDeleteDescription("description_guest_access") }}
                                                    >
                                                        <FiMinus size={25} />
                                                    </div>
                                                </div>

                                                <FormControl>
                                                    <Textarea
                                                        className="resize-none h-[100px] text-[16px] px-[20px] py-[15px]"
                                                        placeholder="Describe guest access..."
                                                        {...field}
                                                    />
                                                </FormControl>
                                            </FormItem>
                                        )
                                    }}
                                />
                            )
                        }

                        {
                            !showTextareas.description_interaction ?
                            <Button
                                type="button"
                                className="w-full py-[25px] bg-neutral-50 text-neutral-600 border-[1.5px] border-solid border-neutral-200 hover:bg-neutral-100 transition"
                                onClick={() => { handleClickAddDescription("description_interaction") }}>Add description about interaction with guest</Button> :
                            (
                                <FormField
                                    control={form.control}
                                    name="description_interaction"
                                    render={({field}) => {
                                        return (
                                            <FormItem>
                                                <div className="flex items-center justify-between">
                                                    <FormLabel className="text-[15px]">Interaction with guests</FormLabel>
                                                    <div 
                                                        className="w-[35px] h-[35px] rounded-full flex items-center justify-center hover:bg-slate-100 transition cursor-pointer"
                                                        onClick={() => { handleClickDeleteDescription("description_interaction") }}
                                                    >
                                                        <FiMinus size={25} />
                                                    </div>
                                                </div>

                                                <FormControl>
                                                    <Textarea
                                                        className="resize-none h-[100px] text-[16px] px-[20px] py-[15px]"
                                                        placeholder="Describe interaction with guests..."
                                                        {...field}
                                                    />
                                                </FormControl>
                                            </FormItem>
                                        )
                                    }}
                                />
                            )
                        }

                        {
                            !showTextareas.description_other ?
                            <Button
                                type="button"
                                className="w-full py-[25px] bg-neutral-50 text-neutral-600 border-[1.5px] border-solid border-neutral-200 hover:bg-neutral-100 transition"
                                onClick={() => { handleClickAddDescription("description_other") }}>Add other description</Button> :
                            (
                                <FormField
                                    control={form.control}
                                    name="description_other"
                                    render={({field}) => {
                                        return (
                                            <FormItem>
                                                <div className="flex items-center justify-between">
                                                    <FormLabel className="text-[15px]">Other details to note</FormLabel>
                                                    <div 
                                                        className="w-[35px] h-[35px] rounded-full flex items-center justify-center hover:bg-slate-100 transition cursor-pointer"
                                                        onClick={() => { handleClickDeleteDescription("description_other") }}
                                                    >
                                                        <FiMinus size={25} />
                                                    </div>
                                                </div>

                                                <FormControl>
                                                    <Textarea
                                                        className="resize-none h-[100px] text-[16px] px-[20px] py-[15px]"
                                                        placeholder="Other details to note..."
                                                        {...field}
                                                    />
                                                </FormControl>
                                            </FormItem>
                                        )
                                    }}
                                />
                            )
                        }
                    </form>
                </Form> 
            </div>
        </div>
    )
}