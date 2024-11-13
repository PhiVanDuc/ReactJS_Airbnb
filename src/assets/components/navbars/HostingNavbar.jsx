import InfoCard from "./InfoCard";

import { FaRegBell } from "react-icons/fa";
import { SiAirbnb } from "react-icons/si";
import { Link, useLocation } from "react-router-dom";

export default function HostingNavbar() {
    const { pathname } = useLocation();

    return (
        <div className='responsive-padding-x py-[20px] flex items-center justify-between border-b border-neutral-200 shadow-sm'>
            <Link to="/">
                <SiAirbnb className="text-[26px] md:text-[32px] text-root" />
            </Link>

            <div>
                <Link
                    to="/hosting/listing"
                    className="group relative text-[13px] md:text-[14px] font-medium px-[16px] md:px-[20px] py-[8px] md:py-[12px] rounded-full hover:bg-neutral-100 transition"
                >
                    Listing

                    {
                        pathname.startsWith("/hosting/listing") &&
                        <span className="group-hover:hidden absolute bottom-[-1.5px] left-[50%] translate-x-[-50%] w-[25px] h-[2.5px] rounded-full bg-slate-600"></span>
                    }
                </Link>

                <Link
                    to="/hosting/reservations"
                    className="group relative text-[13px] md:text-[14px] font-medium px-[16px] md:px-[20px] py-[8px] md:py-[12px] rounded-full hover:bg-neutral-100 transition"
                >
                    Reservations

                    {
                        pathname.startsWith("/hosting/reservations") &&
                        <span className="group-hover:hidden absolute bottom-[-1.5px] left-[50%] translate-x-[-50%] w-[25px] h-[2.5px] rounded-full bg-slate-600"></span>
                    }
                </Link>
            </div>

            <div className="flex items-center gap-x-[15px]">
                <div className="shrink-0 w-[35px] h-[35px] rounded-full flex items-center justify-center border border-x-neutral-200 cursor-pointer hover:bg-slate-50 transition">
                    <FaRegBell size={17} className="text-neutral-700" />
                </div>

                <InfoCard pathname={pathname} />
            </div>
        </div>
    )
}
