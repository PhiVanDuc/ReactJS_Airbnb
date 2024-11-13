import { useState } from "react";

import { Button } from "@/components/ui/button";
import Calendar from "./Calendar";

import { IoDiamondOutline } from "react-icons/io5";

export default function Reservation({ selectionRange, setSelectionRange, navigate }) {
    const [openCalender, setOpenCalender] = useState(false);

    const handleReservation = () => {
        navigate(`${import.meta.env.VITE_PROPERTY_URL}/${123}/book?data=data`);
    }

    return (
        <div className="sticky top-[40px] hidden lg:block w-[35%]">
            <div className="border border-neutral-200 shadow-lg bg-white p-[20px] rounded-[10px] space-y-[20px]">
                <h4 className="text-[20px] font-semibold">$32.90 <span className="text-[16px] font-medium">night</span></h4>

                <div
                    className="relative border border-neutral-400 rounded-[10px] flex items-start shadow-sm cursor-pointer"
                    onClick={() => { setOpenCalender(true); }}
                >
                    <div className="w-[50%] space-y-[5px] px-[15px] py-[10px] border-r border-neutral-400">
                        <p className="text-[10px] font-bold">CHECK-IN</p>
                        <p className="text-[15px] font-medium">10/1/2024</p>
                    </div>

                    <div className="w-[50%] space-y-[5px] px-[15px] py-[10px]">
                        <p className="text-[10px] font-bold">CHECKOUT</p>
                        <p className="text-[15px] text-neutral-400">Add date</p>
                    </div>

                    {
                        openCalender && <Calendar selectionRange={selectionRange} setSelectionRange={setSelectionRange} setOpen={setOpenCalender} />
                    }
                </div>

                <Button
                    className="w-full text-[15px] font-semibold py-[25px] bg-root"
                    onClick={handleReservation}
                >
                    Reservation
                </Button>

                <p className="text-center text-[14px]">You won't be charged yet</p>

                <div className="space-y-[10px] pb-[15px]">
                    <div className="flex items-center justify-between">
                        <p className="underline text-[15px]">$32.90 x 5 nights</p>
                        <p className="text-[15px] font-medium">$164.5</p>
                    </div>

                    <div className="flex items-center justify-between">
                        <p className="underline text-[15px]">Airbnb service fee</p>
                        <p className="text-[15px] font-medium">$20</p>
                    </div>
                </div>

                <div className="w-full h-[1px] bg-slate-300"></div>

                <div className="flex items-center justify-between gap-x-[10px] space-y-[5px] text-[17px] font-semibold">
                    <h4>Total</h4>
                    <p>$184.5</p>
                </div>
            </div>

            <div className="flex items-start gap-x-[15px] border border-neutral-200 shadow-md bg-white p-[20px] rounded-[10px] mt-[30px]">
                <IoDiamondOutline className="text-[35px] text-red-400" />

                <div className="space-y-[2px]">
                    <h5 className="text-[15px] font-semibold">This is a rare find</h5>
                    <p className="text-[13px] text-neutral-600">Name host's place is usually fully booked.</p>
                </div>
            </div>
        </div>
    )
}