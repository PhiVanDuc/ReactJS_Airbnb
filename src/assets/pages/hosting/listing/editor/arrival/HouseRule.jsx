import { useState } from "react";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

import { MdDone } from "react-icons/md";
import { GoPlus } from "react-icons/go";
import { LuMinus } from "react-icons/lu";

import { cn } from "@/lib/utils";

export default function HouseRule() {
    const [pet, setPet] = useState({
        petAllow: false,
        petCount: 1,
    });

    const [eventAllow, setEventAllow] = useState(false);
    const [smokeAllow, setSmokeAllow] = useState(false);
    const [filmAllow, setFilmAllow] = useState(false);

    const [quietHour, setQuietHour] = useState({
        quietHourAllow: false,
        startQuietHour: "",
        endQuietHour: ""
    });

    const [additionalRules, setAdditionalRules] = useState("");
    const [textareaHeight, setTextareaHeight] = useState("auto");

    const handleTextareaInput = (e) => {
        const textarea = e.target;
        setAdditionalRules(textarea.value);
        
        if (textarea.value === "") {
            setTextareaHeight('auto');
            return;
        }

        setTextareaHeight(`${textarea.scrollHeight}px`);
    };

    const handleAllow = (section, isAllow) => {
        switch(section) {
            case "pet":
                setPet(() => {
                    return {
                        petCount: isAllow ? 1 : 0,
                        petAllow: isAllow
                    };
                })
                break;
            case "event":
                setEventAllow(isAllow);
                break;
            case "smoke":
                setSmokeAllow(isAllow);
                break;
            case "quietHour":
                setQuietHour(() => {
                    return {
                        quietHourAllow: isAllow,
                        startQuietHour: isAllow ? "11:00 PM" : "",
                        endQuietHour: isAllow ? "7:00 AM" : "",
                    }
                });
                break;
            case "film":
                setFilmAllow(isAllow);
                break;
        }
    }

    return (
        <div className='w-full max-w-[800px] mx-auto'>
            <div className='space-y-[8px] mb-[50px]'>
                <h2 className='text-[30px] font-semibold'>House rules</h2>
                <p className='text-[16px] text-neutral-500'>Guests are expected to follow your rules and may be <br /> removed from Airbnb if they don't.</p>
            </div>

            <div className="space-y-[30px]">
                <div className="pb-[30px] border-b-[1.5px] border-neutral-300 space-y-[30px]">
                    <div className="flex items-center justify-between">
                        <p className="text-[16px] text-neutral-800">Pets allowed</p>

                        <div className="flex items-center gap-x-[20px]">
                            <div 
                                className={cn(
                                    "flex items-center justify-center w-[32px] h-[32px] rounded-full cursor-pointer transition",
                                    !pet.petAllow ? "bg-slate-800 text-white" : "border border-neutral-400 hover:border-neutral-800"
                                )}
                                onClick={() => { handleAllow("pet", false) }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 25 25" strokeWidth={2} stroke="currentColor" className="size-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </div>

                            <div
                                className={cn(
                                    "flex items-center justify-center w-[32px] h-[32px] rounded-full border border-neutral-400 hover:border-neutral-800 transition cursor-pointer",
                                    pet.petAllow ? "bg-slate-800 text-white" : "border border-neutral-400 hover:border-neutral-800"
                                )}
                                onClick={() => { handleAllow("pet", true) }}
                            >
                                <MdDone size={15} />
                            </div>
                        </div>
                    </div>

                    {
                        pet.petAllow && (
                            <div className="flex items-center justify-between">
                                <p className="text-[16px] text-neutral-800">Maximum number of pets allowed</p>

                                <div className="flex items-center gap-x-[20px]">
                                    <div 
                                        className={cn(
                                            "flex items-center justify-center w-[32px] h-[32px] rounded-full cursor-pointer border border-neutral-400 hover:border-neutral-800 transition", 
                                            pet.petCount <= 1 ? "border-slate-200 text-slate-400 cursor-not-allowed hover:border-slate-200" : ""
                                        )}
                                        onClick={() => {
                                            if (pet.petCount > 1) {
                                                setPet(state => {
                                                    return {
                                                        ...state,
                                                        petCount: pet.petCount - 1,
                                                    }
                                                })
                                            }
                                        }}
                                    >
                                        <LuMinus size={20} />
                                    </div>

                                    <p>{pet.petCount}</p>

                                    <div
                                        className={cn(
                                            "flex items-center justify-center w-[32px] h-[32px] rounded-full border border-neutral-400 hover:border-neutral-800 transition cursor-pointer",
                                            pet.petCount >= 10 ? "border-slate-200 text-slate-400 cursor-not-allowed hover:border-slate-200" : ""
                                        )}
                                        onClick={() => {
                                            if (pet.petCount <= 9) {
                                                setPet(state => {
                                                    return {
                                                        ...state,
                                                        petCount: pet.petCount + 1,
                                                    }
                                                })
                                            }
                                        }}
                                    >
                                        <GoPlus size={20} />
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>

                <div className="flex items-center justify-between pb-[30px] border-b-[1.5px] border-neutral-300">
                    <p className="text-[16px] text-neutral-800">Events allowed</p>

                    <div className="flex items-center gap-x-[20px]">
                        <div 
                            className={cn(
                                "flex items-center justify-center w-[32px] h-[32px] rounded-full cursor-pointer transition",
                                !eventAllow ? "bg-slate-800 text-white" : "border border-neutral-400 hover:border-neutral-800"
                            )}
                            onClick={() => { handleAllow("event", false) }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 25 25" strokeWidth={2} stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </div>

                        <div
                            className={cn(
                                "flex items-center justify-center w-[32px] h-[32px] rounded-full border border-neutral-400 hover:border-neutral-800 transition cursor-pointer",
                                eventAllow ? "bg-slate-800 text-white" : "border border-neutral-400 hover:border-neutral-800"
                            )}
                            onClick={() => { handleAllow("event", true) }}
                        >
                            <MdDone size={15} />
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-between pb-[30px] border-b-[1.5px] border-neutral-300">
                    <p className="text-[16px] text-neutral-800">Smoking, vaping, e‑cigarettes allowed</p>

                    <div className="flex items-center gap-x-[20px]">
                        <div 
                            className={cn(
                                "flex items-center justify-center w-[32px] h-[32px] rounded-full cursor-pointer transition",
                                !smokeAllow ? "bg-slate-800 text-white" : "border border-neutral-400 hover:border-neutral-800"
                            )}
                            onClick={() => { handleAllow("smoke", false) }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 25 25" strokeWidth={2} stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </div>

                        <div
                            className={cn(
                                "flex items-center justify-center w-[32px] h-[32px] rounded-full border border-neutral-400 hover:border-neutral-800 transition cursor-pointer",
                                smokeAllow ? "bg-slate-800 text-white" : "border border-neutral-400 hover:border-neutral-800"
                            )}
                            onClick={() => { handleAllow("smoke", true) }}
                        >
                            <MdDone size={15} />
                        </div>
                    </div>
                </div>

                <div className="space-y-[30px] border-b-[1.5px] border-neutral-300">
                    <div className={cn(
                        "flex items-center justify-between",
                        !quietHour.quietHourAllow ? "pb-[30px]" : ""
                    )}>
                        <p className="text-[16px] text-neutral-800">Quiet hours</p>

                        <div className="flex items-center gap-x-[20px]">
                            <div 
                                className={cn(
                                    "flex items-center justify-center w-[32px] h-[32px] rounded-full cursor-pointer transition",
                                    !quietHour.quietHourAllow ? "bg-slate-800 text-white" : "border border-neutral-400 hover:border-neutral-800"
                                )}
                                onClick={() => { handleAllow("quietHour", false) }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 25 25" strokeWidth={2} stroke="currentColor" className="size-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </div>

                            <div
                                className={cn(
                                    "flex items-center justify-center w-[32px] h-[32px] rounded-full border border-neutral-400 hover:border-neutral-800 transition cursor-pointer",
                                    quietHour.quietHourAllow ? "bg-slate-800 text-white" : "border border-neutral-400 hover:border-neutral-800"
                                )}
                                onClick={() => { handleAllow("quietHour", true) }}
                            >
                                <MdDone size={15} />
                            </div>
                        </div>
                    </div>

                    {
                        quietHour.quietHourAllow && (
                            <div className="flex items-center pb-[30px] gap-x-[10px]">
                                <Select
                                    onValueChange={(value) => {
                                        setQuietHour((state) => {
                                            return {
                                                ...state,
                                                startQuietHour: value,
                                            }
                                        })
                                    }}
                                    defaultValue={quietHour.startQuietHour}
                                >
                                    <SelectTrigger className="py-[25px] text-[15px]">
                                        <SelectValue placeholder="Start time" />
                                    </SelectTrigger>

                                    <SelectContent>
                                        {Array.from({ length: 24 }).map((_, index) => {
                                            const hour = index % 12 || 12;
                                            const period = index < 12 ? "AM" : "PM";
                                            const label = `${hour}:00 ${period}`;
                                            
                                            return (
                                                <SelectItem key={index} value={label}>
                                                    {label}
                                                </SelectItem>
                                            );
                                        })}
                                    </SelectContent>
                                </Select>

                                <Select
                                    onValueChange={(value) => {
                                        setQuietHour((state) => {
                                            return {
                                                ...state,
                                                endQuietHour: value,
                                            }
                                        })
                                    }}
                                    defaultValue={quietHour.endQuietHour}
                                >
                                    <SelectTrigger className="py-[25px] text-[15px]">
                                        <SelectValue placeholder="End time" />
                                    </SelectTrigger>

                                    <SelectContent>
                                        {Array.from({ length: 24 }).map((_, index) => {
                                            const hour = index % 12 || 12;
                                            const period = index < 12 ? "AM" : "PM";
                                            const label = `${hour}:00 ${period}`;
                                            
                                            return (
                                                <SelectItem key={index} value={label}>
                                                    {label}
                                                </SelectItem>
                                            );
                                        })}
                                    </SelectContent>
                                </Select>
                            </div>
                        )
                    }
                </div>

                <div className="flex items-center justify-between pb-[30px] border-b-[1.5px] border-neutral-300">
                    <p className="text-[16px] text-neutral-800">Commercial photography and filming allowed</p>

                    <div className="flex items-center gap-x-[20px]">
                        <div 
                            className={cn(
                                "flex items-center justify-center w-[32px] h-[32px] rounded-full cursor-pointer transition",
                                !filmAllow ? "bg-slate-800 text-white" : "border border-neutral-400 hover:border-neutral-800"
                            )}
                            onClick={() => { handleAllow("film", false) }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 25 25" strokeWidth={2} stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </div>

                        <div
                            className={cn(
                                "flex items-center justify-center w-[32px] h-[32px] rounded-full border border-neutral-400 hover:border-neutral-800 transition cursor-pointer",
                                filmAllow ? "bg-slate-800 text-white" : "border border-neutral-400 hover:border-neutral-800"
                            )}
                            onClick={() => { handleAllow("film", true) }}
                        >
                            <MdDone size={15} />
                        </div>
                    </div>
                </div>

                <div className="space-y-[10px] mb-[30px]">
                    <p className="text-[16px] text-neutral-800">Additional rules</p>

                    <Textarea
                        placeholder="Share anything else you expect from guests."
                        value={additionalRules}
                        onChange={handleTextareaInput}
                        style={{ height: textareaHeight }}
                        className="border-none p-0 text-[15px] focus-visible:ring-0 focus-visible:ring-offset-0 resize-none"
                    />
                </div>
            </div>
        </div>
    )
}