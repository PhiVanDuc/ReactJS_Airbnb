import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

import { LuTrash } from "react-icons/lu";

export default function PropertyItem({ status }) {
    const navigate = useNavigate();

    const handleEdit = () => {
        if (status === "active") navigate("/hosting/listing/editor/123/details");
        else navigate("/become-a-host/123/about-your-place");
    }

    return (
        <Dialog>
            <DialogTrigger>
                <div className="relative w-full aspect-square rounded-[10px] bg-slate-500">
                    <div className="absolute left-[10px] top-[10px] flex items-center gap-x-[10px] px-[10px] py-[5px] rounded-full bg-white border border-neutral-100 shadow-sm">
                        {
                            status === "active" && (
                                <>
                                    <span className="w-[8px] h-[8px] rounded-full bg-green-500"></span>
                                    <p className="text-[13px] font-semibold">Operational</p>
                                </>
                            )
                        }

                        {
                            status === "pending" && (
                                <>
                                    <span className="w-[8px] h-[8px] rounded-full bg-amber-500"></span>
                                    <p className="text-[13px] font-semibold">Pending</p>
                                </>
                            )
                        }

                        {
                            status === "off" && (
                                <>
                                    <span className="w-[8px] h-[8px] rounded-full bg-red-600"></span>
                                    <p className="text-[13px] font-semibold">Non-operational</p>
                                </>
                            )
                        }
                    </div>
                </div>
            </DialogTrigger>

            <DialogContent className="p-[20px] rounded-[10px]">
                <div className="relative pt-[60px] space-y-[40px]">
                    <div className="flex flex-col items-center justify-center space-y-[15px]">
                        <div className="w-[150px] h-[150px] rounded-[5px] bg-slate-500"></div>
                        <DialogTitle><p className="text-[15px] font-medium">Your unique space listing</p></DialogTitle>
                    </div>

                    <div className="flex flex-col gap-y-[10px]">
                        <Button
                            className="h-[50px] text-[16px] font-medium"
                            onClick={handleEdit}
                        >
                            Edit listing
                        </Button>

                        <Button
                            variant="ghost"
                            className="h-[50px] space-x-[10px]"
                        >
                            <LuTrash size={20} />

                            <p className="text-[16px] font-medium ">Remove listing</p>
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
