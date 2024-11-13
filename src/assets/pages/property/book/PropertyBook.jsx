import { useNavigate } from "react-router-dom";

import CancellationPolicy from "./CancellationPolicy";
import GroundRules from "./GroundRules";
import InfoBlock from "./InfoBlock";
import PaymentMethod from "./PaymentMethod";
import Trip from "./Trip";

import { LuChevronLeft } from "react-icons/lu";

export default function PropertyBook() {
    const navigate = useNavigate();

    return (
        <div className="flex-grow flex justify-center w-full pt-[40px]">
            <div className="responsive-padding-x w-[1280px] max-w-[1280px] space-y-[40px]">
                <div className="flex items-center gap-x-[15px]">
                    <div
                        className="group bg-transparent hover:bg-neutral-50 w-[35px] h-[35px] rounded-full flex items-center justify-center transition cursor-pointer"
                        onClick={() => {
                            navigate("/property/123")
                        }}
                    >
                        <LuChevronLeft className="text-[25px] text-neutral-400 group-hover:text-neutral-600 transition" />
                    </div>
                    <h2 className="text-[30px] font-semibold">Request to book</h2>
                </div>

                <div className="md:flex items-start gap-x-[40px]">
                    <InfoBlock />

                    <div className="w-full md:w-[60%] space-y-[30px] order-1">
                        <Trip />
                        <PaymentMethod />
                        <CancellationPolicy />
                        <GroundRules />
                    </div>
                </div>
            </div>
        </div>
    )
}