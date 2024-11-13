export default function Trip() {
    return (
        <div className="seperate-line-property space-y-[20px]">
            <h3 className="text-[22px] font-semibold">Your trip</h3>

            <div className="space-y-[20px]">
                <div className="flex items-center justify-between">
                    <div className="text-[15px] space-y-[2px]">
                        <p className="font-semibold">Date</p>
                        <p className="text-neutral-800">01 - Dec 10</p>
                    </div>

                    <p className="underline text-[16px] font-semibold cursor-pointer">Edit</p>
                </div>

                <div className="flex items-center justify-between">
                    <div className="text-[15px] space-y-[2px]">
                        <p className="font-semibold">Quantity</p>
                        <p className="text-neutral-800 flex items-center gap-x-[5px] flex-wrap">
                            <span>2 guests</span>
                            <span>-</span>
                            <span>1 bedroom</span>
                            <span>-</span>
                            <span>1 bed</span>
                            <span>-</span>
                            <span>1 bathroom</span>
                        </p>
                    </div>

                    <p className="underline text-[16px] font-semibold cursor-pointer">Edit</p>
                </div>
            </div>
        </div>
    )
}
