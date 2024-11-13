import { useState } from "react";
import { FiPlus } from "react-icons/fi";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import CloudinaryUploadWidget from "@/assets/components/libs/CloudinaryUploadWidget";

export default function PhotoTour() {
    const [openWidget, setOpenWidget] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(false);

    const handleChooseLable = () => {
        setOpenWidget(true);
        setOpenDropdown(false);
    }
    
    return (
        <>
            <div className="flex items-center justify-between pb-[60px] bg-white z-[20]">
                <div className="space-y-[5px]">
                    <h2 className="text-[30px] font-semibold">Photo tour</h2>
                    <p className="text-[16px] text-neutral-400">Manage photos and add details. Guests will only see your tour if every room has a photo.</p>
                </div>

                <DropdownMenu open={openDropdown} onOpenChange={setOpenDropdown}>
                    <DropdownMenuTrigger>
                        <div className="group w-[35px] h-[35px] flex items-center justify-center bg-neutral-100 rounded-full cursor-pointer">
                            <FiPlus size={25} className="text-neutral-400 group-hover:text-neutral-600 transition" />
                        </div>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent
                        className="max-h-[500px] overflow-y-auto"
                        align="end"
                        sideOffset={15}
                    >
                        <DropdownMenuLabel
                            className="hover:bg-slate-100 cursor-pointer transition text-[14px] px-[20px] py-[8px] rounded-[5px]"
                            onClick={handleChooseLable}
                        >
                            Additional photos
                        </DropdownMenuLabel>

                        <DropdownMenuLabel
                            className="hover:bg-slate-100 cursor-pointer transition text-[14px] px-[20px] py-[8px] rounded-[5px]"
                            onClick={handleChooseLable}
                        >
                            Bedroom
                        </DropdownMenuLabel>

                        <DropdownMenuLabel
                            className="hover:bg-slate-100 cursor-pointer transition text-[14px] px-[20px] py-[8px] rounded-[5px]"
                            onClick={handleChooseLable}
                        >
                            Bathroom
                        </DropdownMenuLabel>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            <CloudinaryUploadWidget openWidget={openWidget} setOpenWidget={setOpenWidget} />

            <div className="relative space-y-[40px]">
                <div className="space-y-[15px] lg:space-y-0 lg:flex items-start gap-x-[20px]">
                    <h3 className="lg:sticky top-0 left-0 shrink-0 text-[18px] font-semibold w-[160px] whitespace-nowrap truncate">Additional photos</h3>

                    <div className="w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-[10px]">
                        <div className="w-full aspect-square rounded-[10px] bg-slate-300"></div>
                        <div className="w-full aspect-square rounded-[10px] bg-slate-300"></div>
                        <div className="w-full aspect-square rounded-[10px] bg-slate-300"></div>
                        <div className="w-full aspect-square rounded-[10px] bg-slate-300"></div>
                        <div className="w-full aspect-square rounded-[10px] bg-slate-300"></div>
                        <div className="w-full aspect-square rounded-[10px] bg-slate-300"></div>
                        <div className="w-full aspect-square rounded-[10px] bg-slate-300"></div>
                        <div className="w-full aspect-square rounded-[10px] bg-slate-300"></div>
                    </div>
                </div>

                <div className="space-y-[15px] lg:space-y-0 lg:flex items-start gap-x-[20px]">
                    <h3 className="lg:sticky top-0 left-0 shrink-0 text-[18px] font-semibold w-[160px] whitespace-nowrap truncate">Bedroom</h3>

                    <div className="w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-[10px]">
                        <div className="w-full aspect-square rounded-[10px] bg-slate-300"></div>
                        <div className="w-full aspect-square rounded-[10px] bg-slate-300"></div>
                        <div className="w-full aspect-square rounded-[10px] bg-slate-300"></div>
                        <div className="w-full aspect-square rounded-[10px] bg-slate-300"></div>
                        <div className="w-full aspect-square rounded-[10px] bg-slate-300"></div>
                        <div className="w-full aspect-square rounded-[10px] bg-slate-300"></div>
                        <div className="w-full aspect-square rounded-[10px] bg-slate-300"></div>
                        <div className="w-full aspect-square rounded-[10px] bg-slate-300"></div>
                    </div>
                </div>
            </div>
        </>
    )
}