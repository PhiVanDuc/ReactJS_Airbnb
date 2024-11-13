import { useState, useRef, useEffect } from "react";

import { Dialog, DialogContent, DialogTitle, DialogHeader } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

import { FaStar } from "react-icons/fa";

const texts = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
    "Another short text.",
    "Another short text.",
    "Yet another paragraph with much longer content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet."
];

export default function DetailPropertyComments() {
    const [overflowingIndexes, setOverflowingIndexes] = useState([]);
    const [openDialog, setOpenDialog] = useState(false);
    const paragraphsRef = useRef([]);

    const checkOverflow = () => {
        const updatedOverflowingIndexes = [];
        
        paragraphsRef.current.forEach((paragraph, index) => {
            const lineHeight = parseInt(window.getComputedStyle(paragraph).lineHeight);
            const maxHeight = lineHeight * 3;
            if (paragraph.scrollHeight > maxHeight) {
                updatedOverflowingIndexes.push(index);
            }
        });
    
        setOverflowingIndexes(updatedOverflowingIndexes);
    };

    useEffect(() => {
        checkOverflow();
    }, []);

    return (
        <>
            <div className="seperate-line-property space-y-[50px] my-[30px]">
                <div className="max-[420px]:flex-col max-[420px]:gap-y-[10px] flex items-start justify-between gap-x-[30px]">
                    <div className="space-y-[2px] max-[420px]:order-2 order-1">
                        <div className="flex items-center gap-x-[15px]">
                            <p className="text-[12px] font-medium w-[5px] text-center">5</p>
                            <div className="relative w-[200px] h-[3px] rounded-full bg-slate-300 overflow-hidden">
                                <span className="absolute left-0 top-0 bottom-0 w-[80%] bg-slate-800"></span>
                            </div>
                        </div>

                        <div className="flex items-center gap-x-[15px]">
                            <p className="text-[12px] font-medium w-[5px] text-center">4</p>
                            <div className="relative w-[200px] h-[3px] rounded-full bg-slate-300 overflow-hidden">
                                <span className="absolute left-0 top-0 bottom-0 w-[50%] bg-slate-800"></span>
                            </div>
                        </div>

                        <div className="flex items-center gap-x-[15px]">
                            <p className="text-[12px] font-medium w-[5px] text-center">3</p>
                            <div className="w-[200px] h-[3px] rounded-full bg-slate-300"></div>
                        </div>

                        <div className="flex items-center gap-x-[15px]">
                            <p className="text-[12px] font-medium w-[5px] text-center">2</p>
                            <div className="w-[200px] h-[3px] rounded-full bg-slate-300"></div>
                        </div>

                        <div className="flex items-center gap-x-[15px]">
                            <p className="text-[12px] font-medium w-[5px] text-center">1</p>
                            <div className="w-[200px] h-[3px] rounded-full bg-slate-300"></div>
                        </div>
                    </div>

                    <div className="max-[420px]:order-1 order-2 space-y-[2px]">
                        <h5 className="text-[16px] font-semibold">Overall rating</h5>

                        <div className="flex items-center justify-end max-[420px]:justify-start gap-x-[5px]">
                            <p className="text-[14px] md:text-[16px] font-semibold">4.3</p>
                            <FaStar className="text-[15px]" />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-[50px] lg:gap-x-[100px] gap-y-[35px]">
                    {
                        texts.map((text, index) => {
                            return (
                                <div key={index}>
                                    <div className="flex items-center gap-x-[15px] mb-[10px]">
                                        <div className="shrink-0 w-[50px] h-[50px] rounded-full bg-slate-500"></div>

                                        <div>
                                            <p className="text-[16px] font-semibold">example@gmail.com</p>
                                            <p className="text-[14px] text-neutral-600">City, country</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-x-[10px] mb-[5px]">
                                        <div className="flex items-center gap-x-[2px]">
                                            <FaStar className="text-[10px]" />
                                            <FaStar className="text-[10px]" />
                                            <FaStar className="text-[10px] text-neutral-300" />
                                            <FaStar className="text-[10px] text-neutral-300" />
                                            <FaStar className="text-[10px] text-neutral-300" />
                                        </div>

                                        <p className="text-[14px] font-semibold">June, 2024</p>
                                    </div>

                                    <div>
                                        <p 
                                            className="text-[16px] overflow-hidden overflow-ellipsis line-clamp-3"
                                            ref={(el) => (paragraphsRef.current[index] = el)}
                                        >
                                            { text }
                                        </p>

                                        {
                                            overflowingIndexes.includes(index) && (
                                                <div
                                                    className="flex items-center gap-x-[5px] cursor-pointer"
                                                    onClick={() => {
                                                        setOpenDialog(true);
                                                    }}
                                                >
                                                    <p className="text-[15px] font-semibold underline">Show more</p>
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <Dialog
                open={openDialog}
                onOpenChange={setOpenDialog}
            >
                <DialogContent className="gap-y-[30px] max-h-[85vh] w-full md:max-w-[1000px] overflow-y-auto">
                    <DialogHeader className="space-y-[15px]">
                        <DialogTitle>
                            Number of reviews
                        </DialogTitle>

                        <Input placeholder="Search comment..." />
                    </DialogHeader>

                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-[50px] lg:gap-x-[100px] gap-y-[35px]">
                        {
                            texts.map((text, index) => {
                                return (
                                    <div key={index}>
                                        <div className="flex items-center gap-x-[15px] mb-[10px]">
                                            <div className="shrink-0 w-[50px] h-[50px] rounded-full bg-slate-500"></div>

                                            <div>
                                                <p className="text-[16px] font-semibold">example@gmail.com</p>
                                                <p className="text-[14px] text-neutral-600">City, country</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-x-[10px] mb-[5px]">
                                            <div className="flex items-center gap-x-[2px]">
                                                <FaStar className="text-[10px]" />
                                                <FaStar className="text-[10px]" />
                                                <FaStar className="text-[10px] text-neutral-300" />
                                                <FaStar className="text-[10px] text-neutral-300" />
                                                <FaStar className="text-[10px] text-neutral-300" />
                                            </div>

                                            <p className="text-[14px] font-semibold">June, 2024</p>
                                        </div>

                                        <div>
                                            <p 
                                                className="text-[16px]"
                                                ref={(el) => (paragraphsRef.current[index] = el)}
                                            >
                                                { text }
                                            </p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </DialogContent>
            </Dialog>
        </>
    )
}