import { Outlet } from "react-router-dom";
import HostingNavbar from "../components/navbars/HostingNavbar";

export default function HostingLayout() {
    return (
        <div className="flex flex-col h-[100vh]">
            <HostingNavbar />

            <div className="flex-grow w-full overflow-y-auto">
                <Outlet />
            </div>
        </div>
    )
}