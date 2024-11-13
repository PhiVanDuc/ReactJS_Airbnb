import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import ListAchivements from "./ListAchivements";
import Reservation from "./Reservation";
import DetailPropertyDescription from "./DetailPropertyDescription";
import DetailPropertyUtilities from "./DetailPropertyUtilities";
import Calendar from "./Calendar";
import HostInfo from "./HostInfo";
import DetailPropertyComments from "./DetailPropertyComments";
import ThingsToKnow from "./ThingsToKnow";

import { FaStar } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";

export default function DetailProperty() {
    const navigate = useNavigate();

    const [selectionRange, setSelectionRange] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    });

    return (
        <div className="flex justify-center w-full pt-[40px]">
            <div className="responsive-padding-x w-[1280px] max-w-[1280px]">
                <div className="space-y-[30px]">
                    {/* Title And Images */}
                    <div className="flex flex-col">
                        <h2 className="order-2 lg:order-1 w-full text-[24px] lg:text-[28px] font-semibold three-dots lg:mb-[10px]">Name or title of this property</h2>

                        <div className="relative order-1 lg:order-2 grid grid-cols-1 lg:grid-cols-2 gap-[10px] mb-[10px] lg:mb-0">
                            <div className="w-full aspect-video lg:aspect-8/6 rounded-[10px] bg-slate-500"></div>

                            <div className="w-full aspect-8/6 hidden lg:grid grid-cols-2 grid-rows-2 gap-[10px]">
                                <div className="w-full h-full bg-slate-300 rounded-[5px]"></div>
                                <div className="w-full h-full bg-slate-300 rounded-[5px]"></div>
                                <div className="w-full h-full bg-slate-300 rounded-[5px]"></div>
                                <div className="w-full h-full bg-slate-300 rounded-[5px]"></div>
                            </div>

                            <Link to="images" className="absolute flex items-center gap-x-[10px] bottom-[20px] right-[20px] py-[8px] px-[20px] bg-white/50 backdrop-blur-md border border-neutral-300 rounded-[10px] text-neutral-900 cursor-pointer">
                                <RxDashboard size={20} className="hidden sm:inline-block" />

                                <span className="text-[12px] sm:text-[14px] font-medium">Show all photos</span>
                            </Link>
                        </div>
                    </div>
                    {/* End */}

                    <div className="flex items-start lg:gap-x-[30px] xl:gap-x-[40px]">
                        <div className="w-full lg:w-[65%] space-y-[30px]">
                            {/* Basic Info */}
                            <div className="order-3 space-y-[8px] seperate-line-property">
                                <h3 className="w-full text-[15px] lg:text-[22px] font-semibold three-dots">Talk about the scope of use of the house when renting, the location is large after the country and the country</h3>

                                <p className="flex flex-wrap items-center gap-x-[15px] text-[13px] lg:text-[15px] font-medium text-neutral-600">
                                    <span className="relative">
                                        2 guests
                                        <span className="absolute text-[18px] right-[-10px] top-[-4.5px] lg:top-[-3px] leading-none">.</span>
                                    </span>
                                    <span className="relative">
                                        2 bedrooms
                                        <span className="absolute text-[18px] right-[-10px] top-[-4.5px] lg:top-[-3px] leading-none">.</span>
                                    </span>
                                    <span className="relative">
                                        2 beds
                                        <span className="absolute text-[18px] right-[-10px] top-[-4.5px] lg:top-[-3px] leading-none">.</span>
                                    </span>
                                    <span className="relative">
                                        2 baths
                                    </span>
                                </p>

                                <div className="flex items-center gap-x-[20px]">
                                    <FaStar className="text-[18px]" />

                                    <p className="relative text-[15px] font-semibold underline">
                                        <span className="text-[22px] absolute leading-none top-[-4px] left-[-13px]">.</span>
                                        46 reviews
                                    </p>
                                </div>
                            </div>
                            {/* End */}

                            {/* Host */}
                            <div className="seperate-line-property flex items-start gap-x-[15px]">
                                <div className="w-[40px] h-[40px] rounded-full bg-slate-400"></div>

                                <div>
                                    <h4 className="text-[15px] font-medium">Hosted by host name</h4>
                                    <p className="text-[14px] text-neutral-400">2 years hosting</p>
                                </div>
                            </div>
                            {/* End */}

                            {/* List achievements, standards, and house rules */}
                            <ListAchivements />
                            {/* End */}
                            
                            {/* Description */}
                            <DetailPropertyDescription />
                            {/* End */}

                            {/* Utilities */}
                            <DetailPropertyUtilities />
                            {/* End */}
                            
                            {/* Calender */}
                            <Calendar selectionRange={selectionRange} setSelectionRange={setSelectionRange} scope="single" />
                            {/* End */}
                        </div>

                        <Reservation selectionRange={selectionRange} setSelectionRange={setSelectionRange} navigate={navigate} />
                    </div>
                </div>

                {/* Host info */}
                <HostInfo navigate={navigate} />
                {/* End */}

                {/* Comment */}
                <DetailPropertyComments />
                {/* End */}

                {/* Thing to know */}
                <ThingsToKnow />
                {/* End */}
            </div>
        </div>
    )
}