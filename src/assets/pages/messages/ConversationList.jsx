import { useState } from "react";
import ConversationItem from "./ConversationItem";

import { Input } from "@/components/ui/input";
import { IoSearch } from "react-icons/io5";
import { LuChevronLeft } from "react-icons/lu";
import { cn } from "@/lib/utils";

export default function ConversationList({ showList, setShowList }) {
    const [showForm, setShowForm] = useState(false);

    const handleSubmit = () => {}

    return (
        <>
            <div 
                className={cn(
                    'fixed inset-0 translate-x-[-100%] lg:static lg:translate-x-0 shrink-0 lg:w-[400px] flex flex-col h-full lg:border-r lg:border-r-neutral-300 bg-white transition duration-500 z-10',
                    showList ? "translate-x-0" : ""
                )}
            >
                <div className='flex-grow w-full px-[20px] lg:px-[40px] overflow-y-auto vertical-custom-scrollbar'>

                    {/* Header */}
                    <div className="sticky top-0 left-0 right-0 py-[20px] space-y-[10px] bg-white z-[10]">
                        <div className="flex items-center justify-between">
                            <h2 className='text-[22px] font-semibold'>Messages</h2>
                            
                            <div className="flex items-center gap-x-[10px]">
                                <div
                                    className="shrink-0 flex items-center justify-center text-white bg-transparent hover:bg-slate-100 w-[35px] h-[35px] rounded-full transition cursor-pointer"
                                    onClick={() => {
                                        setShowForm(!showForm);
                                    }}
                                >
                                    <IoSearch className="text-[20px] text-neutral-500" />
                                </div>

                                <div
                                    className="shrink-0 flex items-center justify-center text-white bg-transparent hover:bg-slate-100 w-[35px] h-[35px] rounded-full transition cursor-pointer"
                                    onClick={() => {
                                        setShowList(false);
                                    }}
                                >
                                    <LuChevronLeft className="text-[25px] text-neutral-500" />
                                </div>
                            </div>
                        </div>

                        <form
                            onSubmit={handleSubmit}
                            className={cn(
                                !showForm ? "hidden" : ""
                            )}
                        >
                            < Input
                                placeholder="Search name of conversation"
                            />
                        </form>
                    </div>
                    {/* End */}

                    {/* Conversation List */}
                    <div className="space-y-[5px]">
                        <ConversationItem />
                        <ConversationItem />
                        <ConversationItem />
                        <ConversationItem />
                        <ConversationItem />
                        <ConversationItem />
                        <ConversationItem />
                        <ConversationItem />
                        <ConversationItem />
                    </div>
                    {/* End */}
                </div>
            </div>
        </>
    )
}