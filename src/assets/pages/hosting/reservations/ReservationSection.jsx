import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom"

export default function ReservationSection() {
    const { pathname } = useLocation();

    const [path, setPath] = useState(() => {
        const newPath = pathname.split("/");
        return newPath[newPath.length - 1];
    });

    useEffect(() => {
        setPath(() => {
            const newPath = pathname.split("/");
            return newPath[newPath.length - 1];
        });
    }, [pathname]);

    return (
        <div className="flex items-center gap-x-[10px] overflow-x-auto horizontal-custom-scrollbar pb-[10px] lg:pb-0">
            <Link
                to="upcoming"
                className={cn(
                    "px-[20px] py-[10px] rounded-full border text-[14px] lg:text-[15px] hover:border-neutral-600 transition shrink-0",
                    path === "upcoming" && "border-neutral-600 bg-neutral-100"
                )}
            >
                Upcoming
            </Link>

            <Link
                to="arriving-in"
                className={cn(
                    "px-[20px] py-[10px] rounded-full border text-[14px] lg:text-[15px] hover:border-neutral-600 transition shrink-0",
                    path === "arriving-in" && "border-neutral-600 bg-neutral-100"
                )}
            >
                Arriving in
            </Link>

            <Link
                to="currently-hosting"
                className={cn(
                    "px-[20px] py-[10px] rounded-full border text-[14px] lg:text-[15px] hover:border-neutral-600 transition shrink-0",
                    path === "currently-hosting" && "border-neutral-600 bg-neutral-100"
                )}
            >
                Currently hosting
            </Link>

            <Link
                to="checking-out"
                className={cn(
                    "px-[20px] py-[10px] rounded-full border text-[14px] lg:text-[15px] hover:border-neutral-600 transition shrink-0",
                    path === "checking-out" && "border-neutral-600 bg-neutral-100"
                )}
            >
                Checking out
            </Link>
        </div>
    )
}
