import { useRef, useState, useEffect } from "react";

import { Dialog, DialogContent, DialogTitle, DialogTrigger, DialogHeader } from "@/components/ui/dialog";

import { PiFlowerLotusLight } from "react-icons/pi";
import { FiChevronRight } from "react-icons/fi";
import { cn } from "@/lib/utils";

export default function DetailPropertyUtilities() {
    const utilitiesRef = useRef();
    const [showUtilities, setShowUtilities] = useState(false);

    useEffect(() => {
        if (utilitiesRef.current && utilitiesRef.current?.clientHeight > 200) {
            setShowUtilities(true);
        }
    }, [utilitiesRef.current]);

    return (
        <div className="seperate-line-property">
            <div className={cn(
                "relative overflow-hidden max-h-[200px]",
                showUtilities ? "mb-[30px]" : ""
            )}>
                <span className="absolute left-0 right-0 bottom-0 h-[30px] bg-gradient-to-t from-white to-transparent"></span>

                <div
                    className="space-y-[20px]"
                    ref={utilitiesRef}
                >
                    <h4 className="text-[15px] lg:text-[22px] font-semibold">What this place offers</h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[15px]">
                        <div className="flex items-center gap-x-[10px]">
                            <PiFlowerLotusLight className="text-[30px]" />
                            <p className="text-[16px] text-neutral-600">Garden view</p>
                        </div>

                        <div className="flex items-center gap-x-[10px]">
                            <PiFlowerLotusLight className="text-[30px]" />
                            <p className="text-[16px] text-neutral-600">Garden view</p>
                        </div>

                        <div className="flex items-center gap-x-[10px]">
                            <PiFlowerLotusLight className="text-[30px]" />
                            <p className="text-[16px] text-neutral-600">Garden view</p>
                        </div>

                        <div className="flex items-center gap-x-[10px]">
                            <PiFlowerLotusLight className="text-[30px]" />
                            <p className="text-[16px] text-neutral-600">Garden view</p>
                        </div>

                        <div className="flex items-center gap-x-[10px]">
                            <PiFlowerLotusLight className="text-[30px]" />
                            <p className="text-[16px] text-neutral-600">Garden view</p>
                        </div>

                        <div className="flex items-center gap-x-[10px]">
                            <PiFlowerLotusLight className="text-[30px]" />
                            <p className="text-[16px] text-neutral-600">Garden view</p>
                        </div>

                        <div className="flex items-center gap-x-[10px]">
                            <PiFlowerLotusLight className="text-[30px]" />
                            <p className="text-[16px] text-neutral-600">Garden view</p>
                        </div>

                        <div className="flex items-center gap-x-[10px]">
                            <PiFlowerLotusLight className="text-[30px]" />
                            <p className="text-[16px] text-neutral-600">Garden view</p>
                        </div>

                        <div className="flex items-center gap-x-[10px]">
                            <PiFlowerLotusLight className="text-[30px]" />
                            <p className="text-[16px] text-neutral-600">Garden view</p>
                        </div>
                    </div>
                </div>
            </div>

            {
                showUtilities && (
                    <Dialog>
                        <DialogTrigger
                            className="flex items-center gap-x-[5px] cursor-pointer"
                        >
                            <p className="text-[15px] font-semibold underline">Show more</p>
                            <FiChevronRight className="text-[20px]" />
                        </DialogTrigger>

                        <DialogContent className="max-h-[85vh] overflow-y-auto">
                            <DialogHeader>
                                <DialogTitle>
                                    What this place offers
                                </DialogTitle>
                            </DialogHeader>

                            <div className="space-y-[40px]">
                                <div className="space-y-[10px]">
                                    <h4 className="text-[16px] font-semibold">Scenic views</h4>
                                    
                                    <div>
                                        <div className="flex items-center gap-x-[15px] py-[20px] border-b border-neutral-300">
                                            <PiFlowerLotusLight className="text-[30px]" />
                                            <p className="text-[16px] text-neutral-800">Garden views</p>
                                        </div>

                                        <div className="flex items-center gap-x-[15px] py-[20px] border-b border-neutral-300">
                                            <PiFlowerLotusLight className="text-[30px]" />
                                            <p className="text-[16px] text-neutral-800">Garden views</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-[10px]">
                                    <h4 className="text-[16px] font-semibold">Scenic views</h4>
                                    
                                    <div>
                                        <div className="flex items-center gap-x-[15px] py-[20px] border-b border-neutral-300">
                                            <PiFlowerLotusLight className="text-[30px]" />
                                            <p className="text-[16px] text-neutral-800">Garden views</p>
                                        </div>

                                        <div className="flex items-center gap-x-[15px] py-[20px] border-b border-neutral-300">
                                            <PiFlowerLotusLight className="text-[30px]" />
                                            <p className="text-[16px] text-neutral-800">Garden views</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </DialogContent>
                    </Dialog>
                )
            }
        </div>
    )
}
