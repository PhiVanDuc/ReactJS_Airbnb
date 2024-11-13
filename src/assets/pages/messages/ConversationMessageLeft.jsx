export default function ConversationMessageLeft() {
    return (
        <div className="flex items-start gap-x-[15px]">
            <div className="relative w-[45px] h-[45px] rounded-full bg-slate-500">
                <span className="absolute top-[3px] right-[1px] w-[8px] h-[8px] rounded-full bg-green-400 outline outline-[2px] outline-white"></span>
            </div>

            <div className="space-y-[5px]">
                <div className="space-y-[10px]">
                    <div className="flex items-center gap-x-[10px]">
                        <p className="text-[13px] text-neutral-400">Time of this message sended</p>
                        <h4 className="text-[15px] font-semibold text-neutral-800">Name of paticipant</h4>
                    </div>
                    
                    <p className="px-[15px] py-[10px] rounded-[10px] bg-slate-100 text-[15px] w-fit">This is content of message</p>
                </div>

                <p className="text-[13px] text-neutral-400">Seen by who</p>
            </div>
        </div>
    )
}