import { GrHomeOption } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

export default function ArrivalList({ setIsOpen }) {
    const navigate = useNavigate();

    const handleClick = (param) => {
        setIsOpen(false);
        navigate(param);
    }

    return (
        <div className="px-[40px] flex-grow w-full overflow-y-auto space-y-[20px] pb-[40px]">

            {/* Check-in Checkout time */}
            <div
                className="flex items-start flex-col gap-y-[20px] sm:flex-row sm:gap-0 p-[30px] border border-neutral-200 shadow-md rounded-[10px] cursor-pointer hover:bg-neutral-50 transition"
                onClick={() => { handleClick("check-in-out") }} 
            >
                <div className="space-y-[5px] w-full sm:w-[50%] border-b sm:border-r sm:border-b-0 pb-[20px] sm:pb-0 border-neutral-300">
                    <h2 className="text-[16px] font-semibold">Check-in</h2>
                    <p className="text-[16px] text-neutral-500">3:00 PM</p>
                </div>

                <div className="space-y-[5px] w-full sm:w-[50%] sm:text-right">
                    <h2 className="text-[16px] font-semibold">Checkout</h2>
                    <p className="text-[16px] text-neutral-500">Add details</p>
                </div>
            </div>
            {/* End */}

            {/* Direction */}
            <div
                className="p-[30px] border border-neutral-200 shadow-md rounded-[10px] cursor-pointer hover:bg-neutral-50 transition space-y-[5px]"
                onClick={() => { handleClick("directions") }}
            >
                <h2 className="text-[16px] font-semibold">Direction</h2>
                <p className="text-[16px] text-neutral-500 overflow-hidden overflow-ellipsis line-clamp-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, placeat error at nulla alias asperiores eum maiores consequatur doloremque pariatur ut nihil nesciunt ad dolorem earum provident. Impedit, laboriosam omnis?</p>
            </div>
            {/* End */}

            {/* Check-in method */}
            <div
                className="p-[30px] border border-neutral-200 shadow-md rounded-[10px] cursor-pointer hover:bg-neutral-50 transition space-y-[5px]"
                onClick={() => { handleClick("check-in-instructions") }}
            >
                <h2 className="text-[16px] font-semibold">Check-in instructions</h2>
                <p className="text-[16px] text-neutral-500 overflow-hidden overflow-ellipsis line-clamp-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere sunt suscipit animi molestiae tempore voluptate minima vero expedita, tenetur sequi quisquam laudantium adipisci repellendus explicabo. Consectetur excepturi voluptate amet ipsam!</p>
            </div>
            {/* End */}

            {/* House rules */}
            <div
                className="p-[30px] border border-neutral-200 shadow-md rounded-[10px] cursor-pointer hover:bg-neutral-50 transition"
                onClick={() => { handleClick("house-rules") }}
            >
                <h2 className="text-[16px] font-semibold mb-[20px]">House rules</h2>
                
                <div className="space-y-[10px] mb-[10px]">
                    <div className="flex items-center gap-x-[10px]">
                        <GrHomeOption size={25} />
                        <p className="text-[16px] overflow-hidden overflow-ellipsis line-clamp-2">Check-in after 3:00 PM</p>
                    </div>

                    <div className="flex items-center gap-x-[10px]">
                        <GrHomeOption size={25} />
                        <p className="text-[16px] overflow-hidden overflow-ellipsis line-clamp-2">Events allowed</p>
                    </div>
                </div>

                <p className="text-[15px] text-neutral-500">+ 2 more</p>
            </div>
            {/* End */}

            {/* Checkout instructions */}
            <div
                className="p-[30px] border border-neutral-200 shadow-md rounded-[10px] cursor-pointer hover:bg-neutral-50 transition space-y-[5px]"
                onClick={() => { handleClick("checkout-instructions") }}
            >
                <h2 className="text-[16px] font-semibold">Checkout instructions</h2>
                <p className="text-[16px] text-neutral-500 overflow-hidden overflow-ellipsis line-clamp-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, placeat error at nulla alias asperiores eum maiores consequatur doloremque pariatur ut nihil nesciunt ad dolorem earum provident. Impedit, laboriosam omnis?</p>
            </div>
            {/* End */}
        </div>
    )
}