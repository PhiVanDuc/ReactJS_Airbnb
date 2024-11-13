import { lazy, useState } from "react";
import { useNavigate, Link, useParams, Outlet } from "react-router-dom";

const DetailsList = lazy(() => import("./DetailsList"));
const ArrivalList = lazy(() => import("./ArrivalList"));
import SaveBar from "./SaveBar";

import { LuChevronLeft } from "react-icons/lu";

import { cn } from "@/lib/utils";

export default function PropertyEditor() {
    const navigate = useNavigate();
    const { propertyId, editSection } = useParams();

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex-grow h-full">
            <div className="flex h-full items-start overflow-y-auto">
                <div 
                    className={cn(
                        "lg:hidden fixed inset-0 bg-black/30 transition duration-500 z-10",
                        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    )}
                    onClick={() => { setIsOpen(!isOpen) }}
                ></div>

                <div
                    className={cn(
                        "shrink-0 pt-[20px] w-[420px] max-[420px]:w-full fixed top-0 left-0 translate-x-[-100%] lg:static lg:translate-x-[0%] flex flex-col h-full overflow-y-auto border-r border-neutral-200 space-y-[20px] bg-white z-10 transition duration-500",
                        isOpen ? "translate-x-[0%]" : ""
                    )}
                >
                    <div className="px-[40px] space-y-[40px]">
                        <div className="flex items-center gap-x-[10px] justify-between">
                            <div className="flex items-center gap-x-[10px]">
                                <div
                                    className="w-[35px] aspect-square rounded-full flex items-center justify-center bg-transparent hover:bg-slate-50 transition cursor-pointer"
                                    onClick={() => { navigate("/hosting/listing") }}
                                >
                                    <LuChevronLeft className="text-[20px] lg:text-[25px]" />
                                </div>
                                <h1 className="text-[22px] md:text-[24px] lg:text-[30px] font-semibold">Listing editor</h1>
                            </div>

                            <svg 
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6 cursor-pointer lg:hidden"
                                onClick={() => { setIsOpen(!isOpen) }}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </div>

                        <div className="flex items-center gap-x-[5px] bg-neutral-100 rounded-full py-[5px] px-[5px]">
                            <Link
                                to={`/hosting/listing/editor/${propertyId}/details`}
                                className={cn(
                                    "w-[50%] text-center text-[13px] font-medium rounded-full py-[10px] cursor-pointer hover:bg-white transition",
                                    editSection === "details" ? "bg-white shadow-md" : ""
                                )}
                            >
                                Your space
                            </Link>

                            <Link
                                to={`/hosting/listing/editor/${propertyId}/arrival`}
                                className={cn(
                                    "w-[50%] text-center text-[13px] font-medium rounded-full py-[10px] cursor-pointer hover:bg-white transition",
                                    editSection === "arrival" ? "bg-white shadow-md" : ""
                                )}
                            >
                                Arrival guide
                            </Link>
                        </div>
                    </div>

                    {
                        editSection === "details" ? <DetailsList setIsOpen={setIsOpen} /> : <ArrivalList setIsOpen={setIsOpen} />
                    }
                </div>

                <div className="h-full flex flex-col w-full">
                    <div className="flex-grow px-[40px] py-[20px] w-full overflow-y-auto">
                        <Outlet />
                    </div>

                    <SaveBar isOpen={isOpen} setIsOpen={setIsOpen} />
                </div>
            </div>
        </div>
    )
}