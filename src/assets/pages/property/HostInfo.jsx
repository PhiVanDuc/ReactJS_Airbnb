import { Button } from "@/components/ui/button";
import { FaStar } from "react-icons/fa";
import { IoShieldCheckmark } from "react-icons/io5";

export default function HostInfo({ navigate }) {
    return (
        <div className="seperate-line-property space-y-[30px] mt-[30px]">
            <h4 className="text-[15px] lg:text-[22px] font-semibold">Meet your host</h4>

            <div className="lg:flex items-center gap-x-[30px] space-y-[30px] lg:space-y-0">
                <div className="max-[420px]:block max-[420px]:space-y-[20px] flex items-start justify-between gap-x-[10px] rounded-[15px] border border-neutral-200 shadow-lg py-[30px] bg-white cursor-pointer">
                    <div className="flex flex-col items-center justify-center gap-y-[10px] w-full lg:w-[300px]">
                        <div className="w-[100px] h-[100px] rounded-full bg-slate-500"></div>

                        <div className="text-center">
                            <p className="text-[24px] font-bold">Phi Van Duc</p>
                            <p className="text-[14px] font-medium">Host</p>
                        </div>
                    </div>


                    <div className="space-y-[10px]">
                        <div className="space-y-[2px] pb-[10px] border-b border-b-neutral-300 pe-[20px] max-[420px]:ps-[20px]">
                            <p className="text-[18px] font-bold">94</p>
                            <p className="text-[10px] font-semibold">Reviews</p>
                        </div>

                        <div className="space-y-[2px] pb-[10px] border-b border-b-neutral-300 pe-[20px] max-[420px]:ps-[20px]">
                            <div className="flex items-center gap-x-[10px] text-[18px] font-bold">
                                <p>4.96</p>
                                <FaStar className="text-[15px]" />
                            </div>
                            <p className="text-[10px] font-semibold">Reviews</p>
                        </div>

                        <div className=" max-[420px]:ps-[20px]">
                            <p className="text-[18px] font-bold">8</p>
                            <p className="text-[10px] font-semibold">Years hosting</p>
                        </div>
                    </div>
                </div>

                <div className="space-y-[20px]">
                    <Button
                        className="text-[16px] font-semibold w-[160px] py-[25px] rounded-[10px]"
                        onClick={() => { navigate("/messages") }}
                    >
                        Message Host
                    </Button>
                    
                    <div className="flex items-center gap-x-[10px]">
                        <IoShieldCheckmark className="text-[25px] text-red-300" />
                        <p className="text-[11px] text-neutral-500">To protect your payment, never transfer money or communicate outside of the Airbnb website or app.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
