import { useNavigate } from "react-router-dom";

import PropertyList from "./PropertyList";

import { LuPlus } from "react-icons/lu";

export default function Listing() {
    const navigate = useNavigate();

    return (
        <div className="responsive-padding-x pt-[40px] space-y-[40px]">
            <div className="flex items-center justify-between">
                <h2 className="text-[28px] font-semibold">Listing</h2>
                
                <div
                    className="group flex items-center justify-center w-[40px] h-[40px] rounded-full bg-transparent hover:bg-slate-50 transition cursor-pointer"
                    onClick={() => {
                        navigate("/become-a-host/123/about-your-place");
                    }}
                >
                    <LuPlus className="text-[25px] text-neutral-500 group-hover:text-neutral-800 transition" />
                </div>
            </div>

            <PropertyList />
        </div>
    )
}
