export default function Footer() {
    return (
        <div className="flex items-center justify-between responsive-padding-x py-[15px] bg-neutral-100 border-t border-t-neutral-200 shadow-sm">
            <div className="flex items-center gap-x-[20px] flex-wrap">
                <p className="text-[14px] text-neutral-800 cursor-pointer hover:underline">@ Airbnb, Inc</p>
                <p className="text-[14px] text-neutral-800 cursor-pointer hover:underline">Terms</p>
                <p className="text-[14px] text-neutral-800 cursor-pointer hover:underline">Sitemap</p>
                <p className="text-[14px] text-neutral-800 cursor-pointer hover:underline">Privacy</p>
                <p className="text-[14px] text-neutral-800 cursor-pointer hover:underline">Your Privacy Choices</p>
            </div>

            <p className="text-[14px] font-medium cursor-pointer">Support & resources</p>
        </div>
    )
}
