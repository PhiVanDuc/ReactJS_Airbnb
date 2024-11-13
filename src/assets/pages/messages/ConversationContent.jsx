import ConversationMessageLeft from "./ConversationMessageLeft";
import ConversationMessageRight from "./ConversationMessageRight";


export default function ConversationContent() {
    return (
        <div className="px-[20[px] lg:px-[40px] py-[30px] flex-grow w-full space-y-[15px] overflow-y-auto">
            {/* <ConversationMessageLeft />
            <ConversationMessageRight />
            <ConversationMessageLeft />
            <ConversationMessageRight />
            <ConversationMessageLeft />
            <ConversationMessageRight />
            <ConversationMessageLeft />
            <ConversationMessageRight />
            <ConversationMessageLeft />
            <ConversationMessageRight />
            <ConversationMessageLeft />
            <ConversationMessageRight />
            <ConversationMessageLeft />
            <ConversationMessageRight /> */}

            <div className="h-full flex items-center justify-center">
                <p className="text-[18px] font-medium text-neutral-300">Start a conversation.</p>
            </div>
        </div>
    )
}
