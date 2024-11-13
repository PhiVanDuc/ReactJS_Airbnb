import { FaStar } from "react-icons/fa";

export default function InfoBlock() {
    return (
        <div className="order-2 md:sticky top-[40px] w-full md:w-[40%] p-[30px] rounded-[10px] border border-neutral-200 shadow-md space-y-[30px] mb-[30px] md:mb-0">
            <div className="seperate-line-property flex flex-col md:flex-row items-center gap-y-[15px] md:gap-y-[0px] gap-x-[15px]">
                <div className="w-[120px] aspect-square rounded-[10px] bg-slate-500"></div>

                <div className="space-y-[5px]">
                    <p className="text-[15px] font-semibold">Title of property</p>
                    <p className="text-[14px] text-neutral-600">Space of property</p>
                    <div className="flex items-center gap-x-[5px]">
                        <FaStar className="text-[10px]" />
                        <p className="text-[14px] font-medium">5.0 <span className="text-[13px] text-neutral-500">(14 reviews)</span></p>
                    </div>
                </div>
            </div>

            <div className="seperate-line-property space-y-[30px]">
                <h4 className="text-[22px] font-semibold">Price details</h4>

                <div className="space-y-[10px]">
                    <div className="flex items-center justify-between text-[15px] md:text-[17px] text-neutral-700">
                        <p>$32.2 x 5 nights</p>
                        <p>$300</p>
                    </div>

                    <div className="flex items-center justify-between text-[15px] md:text-[17px] text-neutral-700">
                        <p className="underline">Special offer</p>
                        <p>$300</p>
                    </div>

                    <div className="flex items-center justify-between text-[15px] md:text-[17px] text-neutral-700">
                        <p className="underline">Airbnb service fee</p>
                        <p>$300</p>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between text-[16px] font-semibold">
                <h4>Total (USD)</h4>
                <p>$1000.00</p>
            </div>
        </div>
    )
}
