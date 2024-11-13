import { useLocation, useNavigate } from "react-router-dom";

import { TiStarFullOutline } from "react-icons/ti";
import { FaHeart } from "react-icons/fa";
import { cn } from "@/lib/utils";

export default function PropertyItem({ wishlist }) {
    const { pathname } = useLocation();
    const naviage = useNavigate();

    const handleClickFavor = (e) => {
        e.stopPropagation();
        const target = e.target;

        const flag = target.classList.contains("text-red-500/60");

        if (flag) target.classList.remove("text-red-500/60");
        else target.classList.add("text-red-500/60");
    }

    const handleChangePath = () => {
        naviage(pathname.startsWith("/trips") ? "/trips/property/123" : "/property/123");
    }

    return (
        <div
            className="space-y-[10px] cursor-pointer"
            onClick={handleChangePath}
        >
            <div className="group relative w-full aspect-square rounded-[10px] bg-slate-300">
                <FaHeart
                    className={cn(
                        "absolute top-[10px] right-[10px] text-[22px] hover:scale-[1.1] transition duration-500",
                        wishlist ? "text-red-500/60" : "text-black/25"
                    )}
                    onClick={handleClickFavor}
                />
            </div>

            <div className="space-y-[5px]">
                <div className="flex items-center justify-between gap-x-[15px]">
                    <h3 className="text-[13px] lg:text-[14px] font-semibold line-clamp-2 overflow-hidden text-ellipsis">Title properties that might be  long and span two lines or more
                    </h3>
                    <div className="text-neutral-600 flex items-center gap-x-[5px]">
                        <p className="text-[12px] lg:text-[14px] font-medium">4,5</p>
                        <TiStarFullOutline className="text-[15px] lg:text-[20px]" />
                    </div>
                </div>
                <p className="text-[12px] lg:text-[13px] text-neutral-400">Flexible dates</p>
                <p><span className="font-semibold text-[12px] lg:text-[14px]">$40</span> <span className="text-[12px] lg:text-[13px]">/ night</span></p>
            </div>
        </div>
    )
}

// text-black/25
// text-red-500/60