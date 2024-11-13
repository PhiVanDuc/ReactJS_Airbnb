import { useState } from "react";

import { GrHomeOption } from "react-icons/gr";
import { FiTrash } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Utilities() {
    const [editMode, setEditMode] = useState(false);

    return (
        <div className="flex justify-center">
            <div className="w-full max-w-[800px]">
                <div className="flex items-center justify-between mb-[60px]">
                    <div className="space-y-[5px]">
                        <h2 className="text-[30px] font-semibold">Utilities</h2>
                        <p className="text-[16px] text-neutral-400">You’ve added these to your listing so far.</p>
                    </div>

                    <div className="flex items-center gap-x-[10px]">
                        <div
                            className="text-[14px] font-medium px-[20px] py-[10px] rounded-full bg-neutral-100 cursor-pointer"
                            onClick={() => {
                                setEditMode(!editMode);
                            }}
                        >
                            {
                                editMode ? "Done" : "Edit"
                            }
                        </div>
                        
                        <Drawer>
                            <DrawerTrigger>
                                <div className="h-[41px] flex items-center justify-center aspect-square rounded-full bg-neutral-100 cursor-pointer">
                                    <FiPlus className="text-[20px] text-neutral-400" />
                                </div>
                            </DrawerTrigger>

                            <DrawerContent>
                                <div className="h-[100vh] lg:max-h-[70vh] overflow-y-auto">
                                    <DrawerHeader className="pb-[30px] sticky top-0 bg-white space-y-[8px]">
                                        <DrawerTitle>Add utilities...</DrawerTitle>

                                        <Input
                                            type="text"
                                            placeholder="Search utilites"
                                        />
                                    </DrawerHeader>

                                    <div className="px-[16px] space-y-[30px]">
                                        <div className="flex items-center gap-[10px] flex-wrap">
                                            <div className="shrink-0 text-[14px] font-medium px-[15px] py-[8px] border rounded-full cursor-pointer hover:bg-slate-50 transition bg-slate-50">All</div>

                                            <div className="shrink-0 text-[14px] font-medium px-[15px] py-[8px] border rounded-full cursor-pointer hover:bg-slate-50 transition">Basics</div>

                                            <div className="shrink-0 text-[14px] font-medium px-[15px] py-[8px] border rounded-full cursor-pointer hover:bg-slate-50 transition">Bathroom</div>

                                            <div className="shrink-0 text-[14px] font-medium px-[15px] py-[8px] border rounded-full cursor-pointer hover:bg-slate-50 transition">Bedroom and laundary</div>

                                            <div className="shrink-0 text-[14px] font-medium px-[15px] py-[8px] border rounded-full cursor-pointer hover:bg-slate-50 transition">Entertainment</div>

                                            <div className="shrink-0 text-[14px] font-medium px-[15px] py-[8px] border rounded-full cursor-pointer hover:bg-slate-50 transition">Heating and cooling</div>

                                            <div className="shrink-0 text-[14px] font-medium px-[15px] py-[8px] border rounded-full cursor-pointer hover:bg-slate-50 transition">Home safety</div>

                                            <div className="shrink-0 text-[14px] font-medium px-[15px] py-[8px] border rounded-full cursor-pointer hover:bg-slate-50 transition">Bedroom and laundary</div>

                                            <div className="shrink-0 text-[14px] font-medium px-[15px] py-[8px] border rounded-full cursor-pointer hover:bg-slate-50 transition">Intenet and office</div>

                                            <div className="shrink-0 text-[14px] font-medium px-[15px] py-[8px] border rounded-full cursor-pointer hover:bg-slate-50 transition">Kitchen and dining</div>

                                            <div className="shrink-0 text-[14px] font-medium px-[15px] py-[8px] border rounded-full cursor-pointer hover:bg-slate-50 transition">Location features</div>

                                            <div className="shrink-0 text-[14px] font-medium px-[15px] py-[8px] border rounded-full cursor-pointer hover:bg-slate-50 transition">Outdoor</div>

                                            <div className="shrink-0 text-[14px] font-medium px-[15px] py-[8px] border rounded-full cursor-pointer hover:bg-slate-50 transition">Parking and facilities</div>

                                            <div className="shrink-0 text-[14px] font-medium px-[15px] py-[8px] border rounded-full cursor-pointer hover:bg-slate-50 transition">Services</div>
                                        </div>

                                        <div className="space-y-[30px]">
                                            <div className="flex items-center justify-between px-[20px]">
                                                <div className="flex items-center gap-x-[10px]">
                                                    <GrHomeOption className="text-[25px]" />
                                                    <p className="text-[16px]">Utilites</p>
                                                </div>

                                                <div className="flex items-center justify-center w-[35px] h-[35px] border rounded-full">
                                                    <FiPlus className="text-[20px] cursor-pointer" />
                                                </div>
                                            </div>

                                            <div className="flex items-center justify-between px-[20px]">
                                                <div className="flex items-center gap-x-[10px]">
                                                    <GrHomeOption className="text-[25px]" />
                                                    <p className="text-[16px]">Utilites</p>
                                                </div>

                                                <div className="flex items-center justify-center w-[35px] h-[35px] border rounded-full">
                                                    <FiPlus className="text-[20px] cursor-pointer" />
                                                </div>
                                            </div>

                                            <div className="flex items-center justify-between px-[20px]">
                                                <div className="flex items-center gap-x-[10px]">
                                                    <GrHomeOption className="text-[25px]" />
                                                    <p className="text-[16px]">Utilites</p>
                                                </div>

                                                <div className="flex items-center justify-center w-[35px] h-[35px] border rounded-full">
                                                    <FiPlus className="text-[20px] cursor-pointer" />
                                                </div>
                                            </div>

                                            <div className="flex items-center justify-between px-[20px]">
                                                <div className="flex items-center gap-x-[10px]">
                                                    <GrHomeOption className="text-[25px]" />
                                                    <p className="text-[16px]">Utilites</p>
                                                </div>

                                                <div className="flex items-center justify-center w-[35px] h-[35px] border rounded-full">
                                                    <FiPlus className="text-[20px] cursor-pointer" />
                                                </div>
                                            </div>

                                            <div className="flex items-center justify-between px-[20px]">
                                                <div className="flex items-center gap-x-[10px]">
                                                    <GrHomeOption className="text-[25px]" />
                                                    <p className="text-[16px]">Utilites</p>
                                                </div>

                                                <div className="flex items-center justify-center w-[35px] h-[35px] border rounded-full">
                                                    <FiPlus className="text-[20px] cursor-pointer" />
                                                </div>
                                            </div>

                                            <div className="flex items-center justify-between px-[20px]">
                                                <div className="flex items-center gap-x-[10px]">
                                                    <GrHomeOption className="text-[25px]" />
                                                    <p className="text-[16px]">Utilites</p>
                                                </div>

                                                <div className="flex items-center justify-center w-[35px] h-[35px] border rounded-full">
                                                    <FiPlus className="text-[20px] cursor-pointer" />
                                                </div>
                                            </div>

                                            <div className="flex items-center justify-between px-[20px]">
                                                <div className="flex items-center gap-x-[10px]">
                                                    <GrHomeOption className="text-[25px]" />
                                                    <p className="text-[16px]">Utilites</p>
                                                </div>

                                                <div className="flex items-center justify-center w-[35px] h-[35px] border rounded-full">
                                                    <FiPlus className="text-[20px] cursor-pointer" />
                                                </div>
                                            </div>

                                            <div className="flex items-center justify-between px-[20px]">
                                                <div className="flex items-center gap-x-[10px]">
                                                    <GrHomeOption className="text-[25px]" />
                                                    <p className="text-[16px]">Utilites</p>
                                                </div>

                                                <div className="flex items-center justify-center w-[35px] h-[35px] border rounded-full">
                                                    <FiPlus className="text-[20px] cursor-pointer" />
                                                </div>
                                            </div>

                                            <div className="flex items-center justify-between px-[20px]">
                                                <div className="flex items-center gap-x-[10px]">
                                                    <GrHomeOption className="text-[25px]" />
                                                    <p className="text-[16px]">Utilites</p>
                                                </div>

                                                <div className="flex items-center justify-center w-[35px] h-[35px] border rounded-full">
                                                    <FiPlus className="text-[20px] cursor-pointer" />
                                                </div>
                                            </div>

                                            <div className="flex items-center justify-between px-[20px]">
                                                <div className="flex items-center gap-x-[10px]">
                                                    <GrHomeOption className="text-[25px]" />
                                                    <p className="text-[16px]">Utilites</p>
                                                </div>

                                                <div className="flex items-center justify-center w-[35px] h-[35px] border rounded-full">
                                                    <FiPlus className="text-[20px] cursor-pointer" />
                                                </div>
                                            </div>

                                            <div className="flex items-center justify-between px-[20px]">
                                                <div className="flex items-center gap-x-[10px]">
                                                    <GrHomeOption className="text-[25px]" />
                                                    <p className="text-[16px]">Utilites</p>
                                                </div>

                                                <div className="flex items-center justify-center w-[35px] h-[35px] border rounded-full">
                                                    <FiPlus className="text-[20px] cursor-pointer" />
                                                </div>
                                            </div>

                                            <div className="flex items-center justify-between px-[20px]">
                                                <div className="flex items-center gap-x-[10px]">
                                                    <GrHomeOption className="text-[25px]" />
                                                    <p className="text-[16px]">Utilites</p>
                                                </div>

                                                <div className="flex items-center justify-center w-[35px] h-[35px] border rounded-full">
                                                    <FiPlus className="text-[20px] cursor-pointer" />
                                                </div>
                                            </div>

                                            <div className="flex items-center justify-between px-[20px]">
                                                <div className="flex items-center gap-x-[10px]">
                                                    <GrHomeOption className="text-[25px]" />
                                                    <p className="text-[16px]">Utilites</p>
                                                </div>

                                                <div className="flex items-center justify-center w-[35px] h-[35px] border rounded-full">
                                                    <FiPlus className="text-[20px] cursor-pointer" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <DrawerFooter className="sticky bottom-0 bg-white">
                                        <div className="text-end">
                                            <DrawerClose className="max-w-[200px] w-full">
                                                <Button variant="outline" className="w-full">Close</Button>
                                            </DrawerClose>
                                        </div>
                                    </DrawerFooter>
                                </div>
                            </DrawerContent>
                        </Drawer>
                    </div>
                </div>

                <div className="space-y-[10px]">
                    <div className="flex items-center justify-between p-[20px] rounded-[10px] hover:bg-slate-50 transition cursor-pointer">
                        <div className="flex items-center gap-x-[10px]">
                            <GrHomeOption className="text-[25px]" />
                            <p className="text-[16px]">Utilites</p>
                        </div>

                        {
                            editMode && <FiTrash className="text-[20px] cursor-pointer" />
                        }
                    </div>

                    <div className="flex items-center justify-between p-[20px] rounded-[10px] hover:bg-slate-50 transition cursor-pointer">
                        <div className="flex items-center gap-x-[10px]">
                            <GrHomeOption className="text-[25px]" />
                            <p className="text-[16px]">Utilites</p>
                        </div>

                        {
                            editMode && <FiTrash className="text-[20px] cursor-pointer" />
                        }
                    </div>

                    <div className="flex items-center justify-between p-[20px] rounded-[10px] hover:bg-slate-50 transition cursor-pointer">
                        <div className="flex items-center gap-x-[10px]">
                            <GrHomeOption className="text-[25px]" />
                            <p className="text-[16px]">Utilites</p>
                        </div>

                        {
                            editMode && <FiTrash className="text-[20px] cursor-pointer" />
                        }
                    </div>

                    <div className="flex items-center justify-between p-[20px] rounded-[10px] hover:bg-slate-50 transition cursor-pointer">
                        <div className="flex items-center gap-x-[10px]">
                            <GrHomeOption className="text-[25px]" />
                            <p className="text-[16px]">Utilites</p>
                        </div>

                        {
                            editMode && <FiTrash className="text-[20px] cursor-pointer" />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}