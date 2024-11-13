import { Link, useLocation } from "react-router-dom";

import { FaChevronLeft } from "react-icons/fa6";
import { HiOutlineHeart } from "react-icons/hi2";

export default function PropertyNavbar() {
    const { pathname } = useLocation();

    return (
        <div className="sticky top-0 left-0 right-0 flex justify-center border-b border-b-neutral-300 shadow-sm bg-white z-10">
            <div className="responsive-padding-x flex items-center justify-between w-[1280px] max-w-[1280px] py-[20px]">
                <Link
                    to="/"
                    className="flex items-center gap-x-[10px] text-[15px] font-medium hover:underline text-neutral-500 hover:text-neutral-950 transition"
                >
                    <FaChevronLeft className="text-[15px]" />
                    Home
                </Link>

                {
                    (pathname.includes(import.meta.env.VITE_PROPERTY_URL) && !pathname.includes("/book")) && (
                        <div className="w-[35px] h-[35px] rounded-full bg-transparent hover:bg-slate-100 flex items-center justify-center cursor-pointer transition">
                            <HiOutlineHeart size={25} />
                        </div>
                    )
                }
            </div>
        </div>
    )
}
