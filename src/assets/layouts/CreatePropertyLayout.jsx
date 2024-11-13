import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import CreatePropertyNavbar from "../components/navbars/CreatePropertyNavbar";
import CreatePropertyNavbarBottom from "../components/navbars/CreatePropertyNavbarBottom";

export default function CreatePropertyLayout() {
    return (
        <div className="flex flex-col h-[100vh]">
            <CreatePropertyNavbar />

            <div className="px-[24px] md:px-[60px] flex-grow w-full overflow-y-auto">
                <Suspense fallback="">
                    <Outlet />
                </Suspense>
            </div>

            <CreatePropertyNavbarBottom />
        </div>
    )
}
