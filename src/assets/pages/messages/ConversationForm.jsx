import { Input } from "@/components/ui/input";

import { FaImage } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
import { TiCancel } from "react-icons/ti";

export default function ConversationForm() {
    const handleSubmit = () => {

    }

    return (
        <div className="space-y-[10px] px-[20px] lg:px-[40px] py-[20px] border-t border-neutral-300 shadow-md max-w-full">
            {/* <div className="flex items-start gap-[5px] flex-wrap">
                <div className="relative w-[60px] aspect-square rounded-[5px] bg-slate-300">
                    <span className="group absolute right-0 w-[20px] aspect-square rounded-full flex items-center justify-center transition cursor-pointer">
                        <TiCancel className="text-[16px] text-white group-hover:text-red-500 transition" />
                    </span>
                </div>
            </div> */}

            <div className="flex items-center gap-x-[20px]">
                <FaImage className="text-[25px] text-neutral-400 hover:text-neutral-600 transition cursor-pointer" />
                <Input
                    placeholder="Type message here..."
                />
                <IoIosSend className="text-[30px] text-neutral-600 cursor-pointer hover:text-neutral-800 transition" />
            </div>
        </div>
    )
}
