export default function SuspenseLoading() {
    return (
        <div className="fixed inset-0 z-[99] bg-black/10">
            <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] flex gap-2">
                <div className="w-[10px] h-[10px] rounded-full animate-pulse bg-root"></div>
                <div className="w-[10px] h-[10px] rounded-full animate-pulse bg-root"></div>
                <div className="w-[10px] h-[10px] rounded-full animate-pulse bg-root"></div>
            </div>
        </div>
    )
}
