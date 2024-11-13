import { Button } from "@/components/ui/button";
import { IoMenuOutline } from "react-icons/io5";

export default function SaveBar({ isOpen, setIsOpen }) {
    return (
        <div className="flex items-center justify-between lg:justify-end py-[20px] px-[40px] border-t border-neutral-200">
            <IoMenuOutline
                size={25}
                onClick={() => {
                    setIsOpen(!isOpen);
                }}
                className="lg:hidden cursor-pointer"
            />

            <Button className="w-[80px] text-[14px] md:w-[100px] md:text-[16px]">Save</Button>
        </div>
    )
}
