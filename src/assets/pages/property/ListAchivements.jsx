import { IoCalendarClearOutline } from "react-icons/io5";
import { PiMedalMilitary } from "react-icons/pi";

export default function ListAchivements() {
    return (
        <div className="seperate-line-property space-y-[20px]">
            <div className="flex items-start gap-x-[15px]">
                <PiMedalMilitary size={30} />
                <div className="space-y-[4px]">
                    <h4 className="text-[15px] font-medium">Top 5% of homes</h4>
                    <p className="text-[13px] text-neutral-400">This home is highly ranked based on ratings, reviews, and reliability.</p>
                </div>
            </div>

            <div className="flex items-start gap-x-[15px]">
                <IoCalendarClearOutline size={30} />
                <div className="space-y-[4px]">
                    <h4 className="text-[15px] font-medium">Free cancellation before 2:00 PM on Sep 24</h4>
                    <p className="text-[13px] text-neutral-400">Get a full refund if you change your mind.</p>
                </div>
            </div>
        </div>
    )
}
