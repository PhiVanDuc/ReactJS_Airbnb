import { Link } from "react-router-dom";

import { SiAirbnb } from "react-icons/si";

export default function CreatePropertyNavbar() {
    return (
        <div className="responsive-padding-x flex items-center justify-between py-[20px] border-b border-neutral-200 shadow-sm">
            <SiAirbnb size={30} />

            <Link
                to="/hosting/listing"
                className="text-[14px] font-medium px-[20px] py-[10px] rounded-full border hover:bg-slate-50 transition"
            >
                Save and escape
            </Link>
        </div>
    )
}
