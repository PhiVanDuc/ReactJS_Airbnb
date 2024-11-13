export default function ConversationItem() {
    return (
        <div className="flex items-start gap-x-[15px] p-[15px] rounded-[10px] bg-transparent hover:bg-slate-100 transition cursor-pointer">
            <div className="relative shrink-0 w-[40px] md:w-[50px] h-[40px] md:h-[50px] rounded-full bg-slate-500">
                <span className="absolute right-[3px] top-[3px] w-[10px] h-[10px] rounded-full bg-green-500 outline outline-[2px] outline-white"></span>
            </div>

            <div className="flex-1 space-y-[5px] overflow-hidden">
                <div>
                    <h3 className="w-full text-[14px] md:text-[16px] font-semibold truncate">
                        <span className="text-[12px] md:text-[14px] font-medium text-neutral-400">(Host)</span> Name of conversation
                    </h3>
                    <p className="text-[12px] md:text-[14px] font-medium text-neutral-400 overflow-hidden overflow-ellipsis line-clamp-1">Latest message</p>
                </div>

                <p className="text-[11px] md:text-[12px] text-neutral-400 overflow-hidden overflow-ellipsis line-clamp-1">Time of that message</p>
            </div>
        </div>
    )
}
