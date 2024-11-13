import { useState } from "react";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { FiEdit2 } from "react-icons/fi";
import { GrHomeOption } from "react-icons/gr";

export default function Receipt() {
    return (
        <div className="flex items-center justify-center h-full">
            <div className="w-[850px] max-w-[850px] space-y-[40px] my-auto">
                <div className="space-y-[5px]">
                    <h2 className="text-[26px] lg:text-[30px] font-semibold">
                        Review your listing
                    </h2>

                    <p className="text-[14px] md:text-[16px] lg:text-[18px] text-slate-400">
                        Here's what we'll show to guests. Make sure everything looks good.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-y-[60px] md:gap-y-0 md:gap-x-[60px]">
                    <Dialog asChild>
                        <DialogTrigger className="w-full md:w-[45%] p-[20px] rounded-[15px] shadow-lg border border-slate-100 space-y-[15px]">
                            <div className="w-full h-[300px] rounded-[15px] bg-slate-500"></div>

                            <div className="space-y-[5px] text-left">
                                <h5 className="text-[14px] font-medium">Title of property</h5>
                                <p className="text-[14px]">
                                    <span className="font-semibold">$300 / </span>
                                    night
                                </p>
                            </div>
                        </DialogTrigger>

                        <DialogContent className="p-0 max-w-[300px] xl:max-w-[1000px]">
                            <DialogHeader className="border-b border-slate-300 p-[20px]">
                                <DialogTitle className="text-[14px] xl:text-[16px] font-semibold xl:font-bold text-center">Full preview</DialogTitle>
                            </DialogHeader>

                            <div className="xl:flex gap-x-[20px] p-[20px] h-[70vh] overflow-y-auto space-y-[40px] xl:space-y-0">
                                <div className="xl:p-[20px] w-full xl:w-[50%] h-[200px] xl:h-[450px]">
                                    <div className="w-full h-full rounded-[15px] select-none bg-slate-500"></div>
                                </div>

                                <div className="xl:p-[20px] w-full xl:w-[50%] xl:h-full xl:overflow-y-auto xl:no-scrollbar">
                                    <h3 className="text-[28px] xl:text-[32px] font-bold">Title of property</h3>

                                    <div className="flex flex-col xl:flex-row items-center justify-between py-[32px] border-b border-slate-200 gap-y-[30px] xl:gap-x-[20px] xl:gap-y-0">
                                        <div className="space-y-[5px]">
                                            <h3 className="text-[18px] xl:text-[20px] font-medium">Category hosted by host's name</h3>
                                            <p className="text-[13px] xl:text-[16px] max-w-[300px] flex items-center">
                                                2 guests - 1 bedroom - 2 bed - 1 bath - 1 properties
                                            </p>
                                        </div>
                                        <div className="shrink-0 w-[55px] h-[55px] rounded-full bg-slate-400"></div>
                                    </div>

                                    <p className="py-[32px] text-[16px] border-b border-slate-200">This is some bullshit description and i don't know what should i write next, so mabe this should end right now.</p>

                                    <div className="space-y-[20px] py-[32px] border-b border-slate-200">
                                        <h4 className="text-[16px] font-medium">Utilities</h4>

                                        <div className="flex items-center justify-between">
                                            <p className="text-[14px]">utilities</p>
                                            <GrHomeOption size={20} />
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <p className="text-[14px]">utilities</p>
                                            <GrHomeOption size={20} />
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <p className="text-[14px]">utilities</p>
                                            <GrHomeOption size={20} />
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <p className="text-[14px]">utilities</p>
                                            <GrHomeOption size={20} />
                                        </div>
                                    </div>

                                    <div className="space-y-[20px] pt-[30px]">
                                        <h4 className="text-[16px] font-medium">Location</h4>

                                        <div>
                                            <p className="text-[16px]">Some detail location right here</p>
                                            <p className="text-[13px] text-slate-400">We’ll only share your address with guests who are booked as outlined in our</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </DialogContent>
                    </Dialog>

                    <div className="w-full md:w-[55%]">
                        <h3 className="text-[22px] font-semibold mb-[30px]">What's new?</h3>
                        
                        <div className="flex gap-x-[15px] items-start">
                            <FiEdit2 size={45} />
                            <div className="space-y-[5px]">
                                <h4 className="text-[18px] font-semibold">Adjust your settings</h4>
                                <p className="text-[14px] text-slate-500">Set house rules, select a cancellation policy, choose how guests book, and more.  </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
