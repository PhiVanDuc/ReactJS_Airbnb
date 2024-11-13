import { GrHomeOption } from "react-icons/gr";
import { LuDoorOpen } from "react-icons/lu";

export default function CheckinMethod() {
    return (
        <div className="seperate-line-property">
            <h3 className="text-[22px] font-semibold mb-[20px]">Check-in method</h3>

            <div className="flex flex-col lg:flex-row items-start gap-x-[10px] gap-y-[30px] lg:gap-y-0">
                <div className="w-[50%] flex items-start gap-x-[15px]">
                    <GrHomeOption className="shrink-0 text-[25px]" />
                    
                    <div className="space-y-[2px]">
                        <h4 className="text-[18px] font-semibold">Smart lock</h4>
                        <p className="text-[14px] text-neutral-600">This is desc of check-in method</p>
                    </div>
                </div>

                <div className="w-[50%] flex items-start gap-x-[15px]">
                    <LuDoorOpen className="shrink-0 text-[25px]" />
                    
                    <div className="w-full">
                        <h4 className="text-[18px] font-semibold mb-[5px]">Check-in instructions</h4>
                        <p className="text-[14px] text-neutral-600 mb-[15px]">This is instructions of check-in</p>

                        <div className="w-full grid grid-cols-2 md:grid-cols-3">
                            <div className="w-full aspect-square rounded-[10px] bg-slate-500"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
