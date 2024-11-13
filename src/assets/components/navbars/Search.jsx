import { useState } from "react";
import { useForm } from "react-hook-form";
import { DateRangePicker } from "react-date-range";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
    Form,
    FormField,
    FormItem
} from "@/components/ui/form";

import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { cn } from "@/lib/utils";

import 'react-date-range/dist/styles.css'; // Style cho component
import 'react-date-range/dist/theme/default.css'; // Chủ đề mặc định

export default function Search({ showSearch, setShowSearch }) {
    const [option, setOption] = useState("calendar");
    const [selectionRange, setSelectionRange] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    });

    const form = useForm({
        defaultValues: {
            country: "",
            selectionRange: selectionRange,
            guests: 1,
            bedrooms: 1,
            beds: 1,
            bathrooms: 1,
            properties: 1,
        }
    });

    const [counts, setCounts] = useState({
        guests: 1,
        bedrooms: 1,
        beds: 1,
        bathrooms: 1,
        properties: 1,
    });

    const handleIncrease = (name, count) => {
        setCounts(old => {
            const newOne = {...old}; 
            newOne[name] = count + 1;

            return newOne;
        });

        form.setValue(name, count + 1);
    }

    const handleDecrease = (name, count) => {
        if (count <= 1) return;

        setCounts(old => {
            const newOne = {...old}; 
            newOne[name] = count - 1;

            return newOne;
        });

        form.setValue(name, count - 1);
    }

    const handleChangeOption = (option) => {
        setOption(option);
    }

    const handleSelect = (ranges) => {
        setSelectionRange(ranges.selection);
    };

    const onSubmit = (values) => {
        console.log(values);
    }

    return (
        <div className={cn(
            "fixed inset-0 transition duration-500 invisible",
            showSearch ? "visible" : ""
        )}>
            <div className={cn(
                "absolute inset-0 bg-black/30 cursor-pointer opacity-0 transition duration-500 z-40",
                showSearch ? "opacity-100" : ""
            )}></div>

            <div
                className={cn(
                    "absolute left-0 right-0 top-0 p-[30px] rounded-br-[20px] rounded-bl-[20px] bg-white max-h-[100vh] overflow-y-auto space-y-[20px] translate-y-[-100%] transition duration-500 z-50",
                    showSearch ? "translate-y-0" : ""
                )}
            >
                <div className="text-center">
                    <img src="/images/airbnb.png" className="inline h-[30px] object-cover object-center" />
                </div>

                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-[20px]"
                    >
                        <FormField
                            control={form.control}
                            name="country"
                            render={({ field }) => {
                                return (
                                    <Input
                                        placeholder="Search country..."
                                        { ...field }
                                    />  
                                );
                            }}
                        />

                        <div className="flex items-start gap-x-[5px]">
                            <Button
                                type="button"
                                className={cn(
                                    "hover:bg-root font-semibold",
                                    option === "calendar" ? "bg-root" : ""
                                )}
                                onClick={() => { handleChangeOption("calendar") }}
                            >
                                Calendar
                            </Button>

                            <Button
                                type="button"
                                className={cn(
                                    "hover:bg-root font-semibold",
                                    option === "quantity" ? "bg-root" : ""
                                )}
                                onClick={() => { handleChangeOption("quantity") }}
                            >
                                Quantity
                            </Button>
                        </div>

                        {
                            option === "calendar" ?
                            (
                                <DateRangePicker
                                    rangeColors={['rgb(255,56,92)']}
                                    ranges={[selectionRange]}
                                    onChange={handleSelect}
                                    minDate={new Date()}
                                    showMonthAndYearPickers={false}
                                    showDateDisplay={false}
                                    staticRanges={[]}
                                    inputRanges={[]}
                                />
                            ) :
                            (
                                <>
                                    {
                                        Object.entries(counts).map((count, index) => (
                                            <FormField
                                                key={count[0]}
                                                control={form.control}
                                                name={count[0]}
                                                render={({ field }) => {
                                                    return (
                                                        <FormItem
                                                            className={cn(
                                                                "py-[20px] flex items-center justify-between border-b border-b-slate-200",
                                                                index === Object.entries(counts)?.length - 1 && "border-none"
                                                            )}
                                                        >
                                                            <h3 className="text-[16px]">
                                                                {count[0].charAt(0).toUpperCase() + count[0].slice(1)}
                                                            </h3>

                                                            <div className="flex items-center gap-x-[10px]">
                                                                <span 
                                                                    className={cn(
                                                                        "group flex items-center justify-center w-[30px] h-[30px] rounded-full border border-slate-500 cursor-pointer hover:border-black",
                                                                        count[1] <= 1 && "border-slate-200 hover:border-slate-200 cursor-not-allowed"
                                                                    )}
                                                                    onClick={() => {handleDecrease(count[0], count[1])}}
                                                                >
                                                                    <FaMinus size={15} className="text-slate-500 group-hover:text-black" />
                                                                </span>

                                                                <p className="w-[20px] text-center">{count[1]}</p>

                                                                <span 
                                                                    className="group flex items-center justify-center w-[30px] h-[30px] rounded-full border border-slate-500 cursor-pointer hover:border-black"
                                                                    onClick={() => {handleIncrease(count[0], count[1])}}
                                                                >
                                                                    <FaPlus size={15} className="text-slate-500 group-hover:text-black" />
                                                                </span>
                                                            </div>
                                                        </FormItem>
                                                    )
                                                }}
                                            />
                                        ))
                                    }
                                </>
                            )
                        }

                        <div className="flex items-start justify-between">
                            <Button
                                type="button"
                                variant="outline"
                                onClick={(event) => {
                                    event.stopPropagation();
                                    setShowSearch(false);
                                }}
                            >
                                Close
                            </Button>

                            <div className="flex items-start gap-x-[5px]">
                                <Button
                                    type="button"
                                    variant="ghost"
                                    onClick={() => {
                                        const defaultValues = {
                                            country: "",
                                            selectionRange: {
                                                startDate: new Date(),
                                                endDate: new Date(),
                                                key: 'selection',
                                            },
                                            guests: 1,
                                            bedrooms: 1,
                                            beds: 1,
                                            bathrooms: 1,
                                            properties: 1,
                                        };
                                
                                        setSelectionRange(defaultValues.selectionRange);
                                        setCounts({
                                            guests: 1,
                                            bedrooms: 1,
                                            beds: 1,
                                            bathrooms: 1,
                                            properties: 1,
                                        });
                                        form.reset(defaultValues);
                                    }}
                                >
                                    Clear
                                </Button>

                                <Button className="bg-root hover:bg-root w-[100px]">Search</Button>
                            </div>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    )
}