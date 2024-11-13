import { GrHomeOption } from "react-icons/gr";

export default function CheckoutInstruction() {
    return (
        <div className="pb-[30px]">
            <h2 className='text-[22px] font-semibold mb-[20px]'>Checkout instruction</h2>

            <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-[15px]">
                <div className="flex items-start gap-x-[15px]">
                    <GrHomeOption className="text-[25px]" />

                    <div className="space-y-[5px]">
                        <p className="text-[18px] font-semibold">Gather used towels</p>
                        <p className="text-[14px] text-neutral-500">This is description of checkout instruction</p>
                    </div>
                </div>

                <div className="flex items-start gap-x-[15px]">
                    <GrHomeOption className="text-[25px]" />

                    <div className="space-y-[5px]">
                        <p className="text-[18px] font-semibold">Gather used towels</p>
                        <p className="text-[14px] text-neutral-500">This is description of checkout instruction</p>
                    </div>
                </div>

                <div className="flex items-start gap-x-[15px]">
                    <GrHomeOption className="text-[25px]" />

                    <div className="space-y-[5px]">
                        <p className="text-[18px] font-semibold">Gather used towels</p>
                        <p className="text-[14px] text-neutral-500">This is description of checkout instruction</p>
                    </div>
                </div>

                <div className="flex items-start gap-x-[15px]">
                    <GrHomeOption className="text-[25px]" />

                    <div className="space-y-[5px]">
                        <p className="text-[18px] font-semibold">Gather used towels</p>
                        <p className="text-[14px] text-neutral-500">This is description of checkout instruction</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
