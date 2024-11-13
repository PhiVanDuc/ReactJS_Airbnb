import { BiSolidMessageSquareDots } from "react-icons/bi";

export default function ConversationHeader({ setShowList }) {
    return (
        <div className='flex items-center gap-x-[20px] px-[20px] lg:px-[40px] py-[20px] border-b border-neutral-300'>
            <div className='shrink-0 relative w-[50px] h-[50px] lg:w-[70px] lg:h-[70px] rounded-full bg-slate-500'>
                <span className="absolute right-[6px] top-[4px] w-[12px] h-[12px] rounded-full bg-green-500 outline outline-[3px] outline-white"></span>
            </div>

            <div className='flex items-center justify-between gap-x-[20px] w-full'>
                <div>
                    <h2 className='text-[18px] lg:text-[20px] font-semibold'>Name of conversation</h2>
                    <p className='text-[14px] lg:text-[16px] font-medium text-neutral-400'>Host or tenant</p>
                </div>

                <p
                    className='lg:hidden'
                    onClick={() => {
                        setShowList(true);
                    }}
                >
                    <BiSolidMessageSquareDots className="text-[25px] text-neutral-400 cursor-pointer" />
                </p>
            </div>
        </div>
    )
}
