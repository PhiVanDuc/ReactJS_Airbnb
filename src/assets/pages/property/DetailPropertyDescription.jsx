import { useRef, useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle, DialogTrigger, DialogHeader } from "@/components/ui/dialog";

import { FiChevronRight } from "react-icons/fi";
import { cn } from "@/lib/utils";

export default function DetailPropertyDescription() {
    const descriptionsRef = useRef();
    const [showDescriptions, setShowDescriptions] = useState(false);

    useEffect(() => {
        if (descriptionsRef.current && descriptionsRef.current?.clientHeight > 200) {
            setShowDescriptions(true);
        }
        
    }, [descriptionsRef.current]);

    return (
        <div className="seperate-line-property">
            <div className={cn(
                "relative overflow-hidden max-h-[200px]",
                showDescriptions ? "mb-[30px]" : ""
            )}>
                <span className="absolute left-0 right-0 bottom-0 h-[30px] bg-gradient-to-t from-white to-transparent"></span>

                <div
                    className="leading-7"
                    ref={descriptionsRef}
                >
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                    Why do we use it?
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                </div>
            </div>

            {
                showDescriptions && (
                    <Dialog>
                        <DialogTrigger
                            className="flex items-center gap-x-[5px] cursor-pointer"
                        >
                            <p className="text-[15px] font-semibold underline">Show more</p>
                        </DialogTrigger>

                        <DialogContent className="max-h-[85vh] overflow-y-auto">
                            <DialogHeader>
                                <DialogTitle>
                                    About the place
                                </DialogTitle>
                            </DialogHeader>

                            <p className="text-[15px] text-neutral-600">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                                Why do we use it?
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                            </p>

                            <div className="space-y-[5px]">
                                <h4 className="text-[16px] font-semibold">Your property</h4>
                                <p className="text-[15px] text-neutral-600">Add detail</p>
                            </div>

                            <div className="space-y-[5px]">
                                <h4 className="text-[16px] font-semibold">Guest access</h4>
                                <p className="text-[15px] text-neutral-600">Add detail</p>
                            </div>

                            <div className="space-y-[5px]">
                                <h4 className="text-[16px] font-semibold">Interaction with guests</h4>
                                <p className="text-[15px] text-neutral-600">Add detail</p>
                            </div>

                            <div className="space-y-[5px]">
                                <h4 className="text-[16px] font-semibold">Other details to note</h4>
                                <p className="text-[15px] text-neutral-600">Add detail</p>
                            </div>
                        </DialogContent>
                    </Dialog>
                )
            }
        </div>
    )
}