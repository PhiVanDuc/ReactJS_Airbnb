import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import SuspenseLoading from "../assets/components/loadings/SuspenseLoading";

const HostingLayout = lazy(() => import("../assets/layouts/HostingLayout"));
const Hosting = lazy(() => import("../assets/pages/hosting/Hosting"));
const Listing = lazy(() => import("../assets/pages/hosting/listing/Listing"));
const Reservations = lazy(() => import("../assets/pages/hosting/reservations/Reservations"));
const ReservationUpcoming = lazy(() => import("../assets/pages/hosting/reservations/ReservationUpcoming"));
const ReservationArriving = lazy(() => import("../assets/pages/hosting/reservations/ReservationArriving"));
const ReservationCurrentlyHosting = lazy(() => import("../assets/pages/hosting/reservations/ReservationCurrentlyHosting"));
const ReservationCheckingOut = lazy(() => import("../assets/pages/hosting/reservations/ReservationCheckingOut"));

const PropertyEditor = lazy(() => import("../assets/pages/hosting/listing/editor/PropertyEditor"));
const PhotoTour = lazy(() => import("../assets/pages/hosting/listing/editor/details/PhotoTour"));
const TitleEdit = lazy(() => import("../assets/pages/hosting/listing/editor/details/Title"));
const PropertyType = lazy(() => import("../assets/pages/hosting/listing/editor/details/PropertyType"));
const Pricing = lazy(() => import("../assets/pages/hosting/listing/editor/details/Pricing"));
const DescriptionEdit = lazy(() => import("../assets/pages/hosting/listing/editor/details/Description"));
const UtilitiesEdit = lazy(() => import("../assets/pages/hosting/listing/editor/details/Utilities"));
const LocationEdit = lazy(() => import("../assets/pages/hosting/listing/editor/details/Location"));

const CheckInOut = lazy(() => import("../assets/pages/hosting/listing/editor/arrival/CheckInOut"));
const Direction = lazy(() => import("../assets/pages/hosting/listing/editor/arrival/Direction"));
const CheckInInstruction = lazy(() => import("../assets/pages/hosting/listing/editor/arrival/CheckInInstruction"));
const HouseRule = lazy(() => import("../assets/pages/hosting/listing/editor/arrival/HouseRule"));
const CheckoutInstruction = lazy(() => import("../assets/pages/hosting/listing/editor/arrival/CheckoutInstruction"));

export default function HostingRoute() {
    return (
        <Routes>
            <Route
                path="/hosting"
                element={
                    <Suspense fallback={<SuspenseLoading />}>
                        <HostingLayout />
                    </Suspense>
                }
            >
                <Route index element={<Hosting />} />
                <Route path="listing" element={<Listing />} />
                <Route path="reservations" element={<Reservations />}>
                    <Route path="upcoming" element={<ReservationUpcoming />} />
                    <Route path="arriving-in" element={<ReservationArriving />} />
                    <Route path="currently-hosting" element={<ReservationCurrentlyHosting />} />
                    <Route path="checking-out" element={<ReservationCheckingOut />} />
                </Route>

                <Route path="listing/editor/:propertyId/:editSection" element={<PropertyEditor />}>
                    <Route path="photo-tour" element={<PhotoTour />} />
                    <Route path="title" element={<TitleEdit />} />
                    <Route path="property-type" element={<PropertyType />} />
                    <Route path="pricing" element={<Pricing />} />
                    <Route path="description" element={<DescriptionEdit />} />
                    <Route path="utilities" element={<UtilitiesEdit />} />
                    <Route path="location" element={<LocationEdit />} />
                    <Route path="check-in-out" element={<CheckInOut />} />
                    <Route path="directions" element={<Direction />} />
                    <Route path="check-in-instructions" element={<CheckInInstruction />} />
                    <Route path="house-rules" element={<HouseRule />} />
                    <Route path="checkout-instructions" element={<CheckoutInstruction />} />
                </Route>
            </Route>
        </Routes>
    )
}
