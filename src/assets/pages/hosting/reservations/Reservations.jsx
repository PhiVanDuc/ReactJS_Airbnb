import { Outlet } from "react-router-dom";
import ReservationSection from "./ReservationSection";

export default function Reservations() {
    return (
        <div className="responsive-padding-x pt-[40px] space-y-[20px]">
            <ReservationSection />

            <Outlet />
        </div>
    )
}
