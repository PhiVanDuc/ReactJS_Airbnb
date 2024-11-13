import PropertyItem from "../home/PropertyItem";

import { LuChevronLeft } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

export default function Wishlist() {
    const navigate = useNavigate();

    return (
        <div className="responsive-padding-x pt-[40px] space-y-[40px]">
            <div className="flex items-center gap-x-[15px]">
                <div
                    className="group bg-transparent hover:bg-neutral-50 w-[35px] h-[35px] rounded-full flex items-center justify-center transition cursor-pointer"
                    onClick={() => {
                        navigate("/");
                    }}
                >
                    <LuChevronLeft className="text-[25px] text-neutral-400 group-hover:text-neutral-600 transition" />
                </div>
                <h2 className="text-[30px] font-semibold tracking-wide">Wistlist</h2>
            </div>

            <div className="grid max-[400px]:grid-cols-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 min-[2000px]:grid-cols-6 gap-x-[25px] gap-y-[35px] pb-[20px] pt-[15px]">
                <PropertyItem wishlist={true} />
                <PropertyItem wishlist={true} />
                <PropertyItem wishlist={true} />
                <PropertyItem wishlist={true} />
            </div>
        </div>
    )
}
