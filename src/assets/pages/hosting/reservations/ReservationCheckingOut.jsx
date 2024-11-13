import { Button } from "@/components/ui/button";

import { TbDeviceIpadX } from "react-icons/tb";
import { FaPhoneAlt } from "react-icons/fa";
import { FaUserLarge } from "react-icons/fa6";

export default function ReservationCheckingOut() {
    return (
        <>
            {/* <div className="flex items-center justify-center bg-neutral-100 py-[40px] px-[20px] rounded-[10px]">
                <div className="flex flex-col items-center space-y-[10px]">
                    <TbDeviceIpadX className="text-[30px] text-neutral-600" />
                    <p className="text-[15px] text-neutral-600 w-full max-w-[250px] text-center">You don’t have any guests checking out today or tomorrow.</p>
                </div>
            </div> */}

            <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-[30px]">
                <div className="space-y-[20px]">
                    <div className="w-full aspect-video rounded-[10px] bg-slate-500"></div>

                    <div className="space-y-[15px]">
                        <div className="space-y-[3px]">
                            <h2 className="text-[18px] font-semibold">Title of property</h2>
                            <p className="text-[13px] font-medium text-neutral-400">Stay: 3 days.</p>
                        </div>

                        <div className="flex border border-neutral-200 rounded-[10px]">
                            <div className="w-[50%] border-r border-neutral-200 p-[15px] space-y-[5px]">
                                <h4 className="text-[11px] font-bold">CHECK-IN</h4>
                                <p className="text-[15px]">10/8/2024</p>
                            </div>

                            <div className="w-[50%] p-[15px] space-y-[10px]">
                                <h4 className="text-[11px] font-bold">CHECKOUT</h4>
                                <p className="text-[15px]">10/8/2024</p>
                            </div>
                        </div>

                        <div className="w-full flex items-center justify-between">
                            <div className="space-y-[5px]">
                                <h3 className="flex items-center gap-x-[10px] text-[15px] text-neutral-700 font-medium">
                                    <FaUserLarge className="text-[16px] text-neutral-400" />
                                    Phi Van Duc
                                </h3>

                                <p className="flex items-center gap-x-[10px] text-[15px] text-neutral-700 font-medium">
                                    <FaPhoneAlt className="text-[16px] text-neutral-400" />
                                    0328895451
                                </p>
                            </div>

                            <Button>Message</Button>
                        </div>
                    </div>

                    <Button className="font-semibold w-full py-[25px]">Check out</Button>
                </div>
            </div>
        </>
    )
}
