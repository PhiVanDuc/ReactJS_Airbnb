import { useState } from "react";

import { PiTowel } from "react-icons/pi";
import { IoChevronUp } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
import { PiTrashSimple } from "react-icons/pi";
import { FaPowerOff } from "react-icons/fa6";
import { IoLockClosedOutline } from "react-icons/io5";
import { LuKey } from "react-icons/lu";
import { FaRegClipboard } from "react-icons/fa";

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { DialogTitle } from "@radix-ui/react-dialog";

export default function CheckoutInstruction() {
    const [isEdit, setIsEdit] = useState({
        titleInstruction: "",
        description: "",
        exist: false,
        edit: false
    });
    const [isOpen, setIsOpen] = useState(false);
    const [textareaHeight, setTextareaHeight] = useState("auto");

    const handleClick = (infoObject) => {
        if (infoObject.exist) setIsOpen(true);

        setIsEdit(infoObject)
    }

    const handleTextareaInput = (e) => {
        const textarea = e.target;

        if (textarea.value === "") {
            setTextareaHeight('auto');
            return;
        }

        setTextareaHeight(`${textarea.scrollHeight}px`);
    };

    const handleClickCloseReset = () => {
        setIsEdit({
            titleInstruction: "",
            description: "",
            exist: false,
            edit: false
        })
    }
 
    return (
        <div className='w-full max-w-[800px] mx-auto pb-[20px]'>
            <div className='space-y-[15px] mb-[50px]'>
                <h2 className='text-[26px] font-semibold'>Checkout instructions</h2>
                <p className='text-[16px] text-neutral-500'>Explain what’s essential for guests to do before they leave. Anyone can read these before they book.</p>
            </div>

            <div className="space-y-[10px] mb-[30px]">
                <div
                    className="relative flex gap-x-[15px] items-start p-[20px] rounded-[10px] cursor-pointer hover:bg-neutral-100 transition"
                    onClick={() => { handleClick({
                        titleInstruction: "Gather used towels",
                        description: "Please describe instruction right here.",
                        exist: true,
                        edit: true
                    }) }}
                >
                    <PiTowel size={30} className="shrink-0" />

                    <div className="space-y-[5px]">
                        <h3 className="text-[16px] font-semibold three-dots">Gather used towels</h3>
                        <p className="text-[15px] text-neutral-500 three-dots line-clamp-4">Please describe instruction right here.</p>
                    </div>

                    <IoChevronUp size={25} className="hidden lg:inline absolute top-[50%] right-[20px] translate-y-[-50%]" />
                </div>
            </div>

            <Drawer open={isOpen} onOpenChange={setIsOpen}>
                <DrawerTrigger className="w-full">
                    <div className="flex items-center justify-center gap-x-[10px] py-[15px] w-full border border-neutral-200 rounded-[15px] hover:bg-neutral-100 transition">
                        <BsPlus size={30} />
                        <span className="text-[16px] font-medium">Add instructions</span>
                    </div>
                </DrawerTrigger>

                <DrawerContent>
                    <div className="h-[100vh] lg:max-h-[70vh] flex flex-col justify-between overflow-y-auto">
                        <div>
                            <DrawerHeader className="mb-[30px]">
                                <DialogTitle className="text-[24px] font-semibold">
                                    {
                                        !isEdit.edit ? "Choose an instruction" : `${isEdit.titleInstruction}`
                                    }
                                </DialogTitle>
                            </DrawerHeader>

                            {
                                !isEdit.edit ?
                                (
                                    <div className="px-[20px] grid grid-cols-1 md:grid-cols-2 gap-[10px]">
                                        <div 
                                            className="flex items-center gap-x-[20px] text-neutral-800 p-[20px] border border-neutral-300 rounded-[10px] cursor-pointer hover:bg-neutral-100 hover:border-neutral-600 hover:scale-[0.99] transition"
                                            onClick={() => { handleClick({
                                                titleInstruction: "Throw trash away",
                                                description: "Please describe instruction right here.",
                                                exist: false,
                                                edit: true
                                            }) }}
                                        >
                                            <PiTrashSimple className="text-[22px] lg:text-[26px]" />
                                            <h4 className="text-[15px] lg:text-[18px] line-clamp-1 overflow-hidden overflow-ellipsis">Throw trash away</h4>
                                        </div>

                                        <div 
                                            className="flex items-center gap-x-[20px] text-neutral-800 p-[20px] border border-neutral-300 rounded-[10px] cursor-pointer hover:bg-neutral-100 hover:border-neutral-600 hover:scale-[0.99] transition"
                                            onClick={() => { handleClick({
                                                titleInstruction: "Turn things off",
                                                description: "Please describe instruction right here.",
                                                exist: false,
                                                edit: true
                                            }) }}
                                        >
                                            <FaPowerOff className="text-neutral-700 text-[22px] lg:text-[26px]" />
                                            <h4 className="text-[15px] lg:text-[18px] line-clamp-1 overflow-hidden overflow-ellipsis">Turn things off</h4>
                                        </div>

                                        <div 
                                            className="flex items-center gap-x-[20px] text-neutral-800 p-[20px] border border-neutral-300 rounded-[10px] cursor-pointer hover:bg-neutral-100 hover:border-neutral-600 hover:scale-[0.99] transition"
                                            onClick={() => { handleClick({
                                                titleInstruction: "Lock up",
                                                description: "Please describe instruction right here.",
                                                exist: false,
                                                edit: true
                                            }) }}
                                        >
                                            <IoLockClosedOutline className="text-[22px] lg:text-[26px]" />
                                            <h4 className="text-[15px] lg:text-[18px] line-clamp-1 overflow-hidden overflow-ellipsis">Lock up</h4>
                                        </div>

                                        <div 
                                            className="flex items-center gap-x-[20px] text-neutral-800 p-[20px] border border-neutral-300 rounded-[10px] cursor-pointer hover:bg-neutral-100 hover:border-neutral-600 hover:scale-[0.99] transition"
                                            onClick={() => { handleClick({
                                                titleInstruction: "Return keys",
                                                description: "Please describe instruction right here.",
                                                exist: false,
                                                edit: true
                                            }) }}
                                        >
                                            <LuKey className="text-[22px] lg:text-[26px]" />
                                            <h4 className="text-[15px] lg:text-[18px] line-clamp-1 overflow-hidden overflow-ellipsis">Return keys</h4>
                                        </div>

                                        <div 
                                            className="flex items-center gap-x-[20px] text-neutral-800 p-[20px] border border-neutral-300 rounded-[10px] cursor-pointer hover:bg-neutral-100 hover:border-neutral-600 hover:scale-[0.99] transition"
                                            onClick={() => { handleClick({
                                                titleInstruction: "Additional request",
                                                description: "Please describe instruction right here.",
                                                exist: false,
                                                edit: true
                                            }) }}
                                        >
                                            <FaRegClipboard className="text-[22px] lg:text-[26px]" />
                                            <h4 className="text-[15px] lg:text-[18px] line-clamp-1 overflow-hidden overflow-ellipsis">Additional request</h4>
                                        </div>
                                    </div>
                                ) :
                                (
                                    <div className="px-[20px]">
                                        <Textarea
                                            placeholder="Add optional details."
                                            onChange={handleTextareaInput}
                                            style={{ height: textareaHeight }}
                                            className="border-none p-0 text-[15px] focus-visible:ring-0 focus-visible:ring-offset-0 resize-none"
                                        />
                                    </div>
                                )
                            }
                        </div>

                        <div>
                            {
                                isEdit.edit && (
                                    <div className="px-[20px] flex flex-col gap-x-[5px] mt-[20px] space-y-[10px]">
                                        <Button variant="outline" className="w-full text-[15px] border-neutral-300 py-[22px]">
                                            {
                                                isEdit.exist ? "Apply" : "Add"
                                            }
                                        </Button>
                                        
                                        {
                                            isEdit.exist && <Button variant="outline" className="w-full text-[15px] border-neutral-300 py-[22px]">Delete</Button>
                                        }
                                    </div>
                                )
                            }

                            <DrawerFooter className="flex flex-row items-center justify-between pt-[10px]">
                                {
                                    isEdit.edit && (
                                        <div
                                            className="inline-block text-center gap-x-[10px] py-[10px] w-[100px] rounded-[10px] text-[15px] font-medium bg-neutral-800 text-white cursor-pointer"
                                            onClick={handleClickCloseReset}
                                        >
                                            Back
                                        </div>
                                    )
                                }

                                <DrawerClose className="w-full text-right">
                                    <div
                                        className="inline-block text-center gap-x-[10px] py-[10px] w-[100px] border border-neutral-200 rounded-[10px] hover:bg-neutral-100 hover:border-neutral-500 transition text-[15px] font-medium text-neutral-800"
                                        onClick={handleClickCloseReset}
                                    >
                                        Close
                                    </div>
                                </DrawerClose>
                            </DrawerFooter>
                        </div>
                    </div>
                </DrawerContent>
            </Drawer>
        </div>
    )
}