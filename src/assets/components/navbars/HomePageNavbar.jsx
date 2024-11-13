import { useState } from "react";
import { Link } from "react-router-dom";

import InfoCard from "./InfoCard";
import CategoriesNavbar from "./CategoriesNavbar";
import Search from "./Search";

import { IoSearch } from "react-icons/io5";
import PropertyNavbar from "./PropertyNavbar";
import { toast } from "sonner";

export default function HomePageNavbar({ pathname }) {
    const [showSearch, setShowSearch] = useState(false);

    return (
        <>
            {
                !pathname.startsWith(import.meta.env.VITE_PROPERTY_URL) ? (
                    <div
                        className="sticky left-0 right-0 top-0 space-y-[15px] z-10 bg-white"
                    >
                        <div className='responsive-padding-x py-[20px] border-b shadow-sm'>
                            <div className="flex items-center justify-between gap-x-[20px]">
                                <Link to="/" className="shrink-0 hidden md:inline">
                                    <img src="/images/airbnb.png" alt="Logo" className="h-[35px] object-cover" />
                                </Link>

                                <div
                                    className="hidden lg:flex items-center cursor-pointer border border-neutral-300 rounded-full w-fit py-[8px] px-[10px] shadow-md"
                                    onClick={(event) => {
                                        event.stopPropagation();

                                        if (pathname.startsWith("/messages")) {
                                            toast.warning("Can't search right now.");
                                            return;
                                        }
                                        setShowSearch(true);
                                    }}
                                >
                                    <p className='text-[15px] font-medium px-[15px]'>Anywhere</p>
                                    <p className='text-[15px] font-medium px-[15px] border-l border-r border-neutral-300'>Any week</p>
                                    <p className='text-[15px] font-medium text-neutral-500 px-[15px]'>Add guests</p>

                                    <div className="flex items-center justify-center text-white bg-root w-[35px] h-[35px] rounded-full">
                                        <IoSearch size={20} />
                                    </div>
                                </div>

                                <div
                                    className="lg:hidden flex items-center gap-x-[15px] w-full px-[15px] py-[8px] rounded-full border border-neutral-300 shadow-md cursor-pointer"
                                    onClick={(event) => {
                                        event.stopPropagation();

                                        if (pathname.startsWith("/messages")) {
                                            toast.warning("Can't search right now.")
                                            return;
                                        }
                                        setShowSearch(true);
                                    }}
                                >
                                    <IoSearch size={25} className="shrink-0" />

                                    <div className="truncate">
                                        <h4 className="text-[15px] font-semibold">Where to?</h4>
                                        <div className="flex items-center gap-x-[15px] text-[13px] text-neutral-400">
                                            <span className="relative whitespace-nowrap">
                                                Anywhere
                                                <span className="absolute text-[18px] right-[-10px] top-[-4.5px] leading-none">.</span>
                                            </span>

                                            <span className="relative whitespace-nowrap">
                                                Anyweek
                                                <span className="absolute text-[18px] right-[-10px] top-[-4.5px] leading-none">.</span>
                                            </span>

                                            <span className="whitespace-nowrap truncate">Add guests</span>
                                        </div>
                                    </div>
                                </div>

                                <InfoCard />

                                <Search showSearch={showSearch} setShowSearch={setShowSearch} />
                            </div>
                        </div>

                        { pathname === "/" && <CategoriesNavbar /> }
                    </div>
                ) : <PropertyNavbar />
            }
        </>
    )
}
