import Footer from "@/assets/layouts/Footer";
import { useNavigate } from "react-router-dom";

import { IoSearch } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import { FaAirbnb } from "react-icons/fa";
import { LuMessageSquare } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { cn } from "@/lib/utils";

export default function HomePageNavbarButtom({ pathname }) {
    const navigate = useNavigate();

    const handleRedirect = (pathname) => {
        navigate(pathname);
    }

    return (
        <>
            {
                (pathname.startsWith(import.meta.env.VITE_PROPERTY_URL) || pathname.startsWith(import.meta.env.VITE_TRIPS_PROPERTY_URL)) ? <Footer /> :
                
                (
                    <div className="fixed left-0 right-0 bottom-0 lg:hidden flex justify-center py-[12px] md:py-[15px] border-t border-neutral-200 shadow-sm bg-white">
                        <div className="responsive-padding-x flex items-center justify-between w-[500px] max-w-[500px]">
                            <div
                                className={cn(
                                    "flex flex-col items-center gap-y-[4px] text-neutral-500 cursor-pointer hover:text-primary transition",
                                    pathname === "/" ? "text-root hover:text-root" : ""
                                )}
                                onClick={() => { handleRedirect("/") }}
                            >
                                <IoSearch className="text-[20px]" />
                                <p className="text-[12px]">Explore</p>
                            </div>

                            <div
                                className={cn(
                                    "flex flex-col items-center gap-y-[4px] text-neutral-500 cursor-pointer hover:text-primary transition",
                                    pathname.startsWith("/wishlist") ? "text-root hover:text-root" : ""
                                )}
                                onClick={() => { handleRedirect("/wishlist") }}
                            >
                                <IoHeartOutline className="text-[20px]" />
                                <p className="text-[12px]">Wishlist</p>
                            </div>

                            <div
                                className={cn(
                                    "flex flex-col items-center gap-y-[4px] text-neutral-500 cursor-pointer hover:text-primary transition",
                                    pathname.startsWith("/trips") ? "text-root hover:text-root" : ""
                                )}
                                onClick={() => { handleRedirect("/trips") }}
                            >
                                <FaAirbnb className="text-[20px]" />
                                <p className="text-[12px]">Trips</p>
                            </div>

                            <div
                                className={cn(
                                    "flex flex-col items-center gap-y-[4px] text-neutral-500 cursor-pointer hover:text-primary transition",
                                    pathname.startsWith("/messages") ? "text-root hover:text-root" : ""
                                )}
                                onClick={() => { handleRedirect("/messages") }}
                            >
                                <LuMessageSquare className="text-[20px]" />
                                <p className="text-[12px]">Messages</p>
                            </div>

                            <div
                                className={cn(
                                    "flex flex-col items-center gap-y-[4px] text-neutral-500 cursor-pointer hover:text-primary transition",
                                    pathname.startsWith("/profile") ? "text-root hover:text-root" : ""
                                )}
                                onClick={() => { handleRedirect("/profile") }}
                            >
                                <CgProfile className="text-[20px]" />
                                <p className="text-[12px]">Profile</p>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}
