import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import CreatePropertyLayout from "../assets/layouts/CreatePropertyLayout";
const AboutYourPlace = lazy(() => import("../assets/pages/become-a-host/about-your-place/AboutYourPlace"));
const Structure = lazy(() => import("../assets/pages/become-a-host/structure/Structure"));
const PrivacyType = lazy(() => import("../assets/pages/become-a-host/privacy-type/PrivacyType"));
const Location = lazy(() => import("../assets/pages/become-a-host/location/Location"));
const FloorPlan = lazy(() => import("../assets/pages/become-a-host/floor-plan/FloorPlan"));
const StandOut = lazy(() => import("../assets/pages/become-a-host/stand-out/StandOut"));
const Utilities = lazy(() => import("../assets/pages/become-a-host/utilities/Utilities"));
const Photos = lazy(() => import("../assets/pages/become-a-host/photos/Photos"));
const Title = lazy(() => import("../assets/pages/become-a-host/title/Title"));
const Description = lazy(() => import("../assets/pages/become-a-host/description/Description"));
const FinishStep = lazy(() => import("../assets/pages/become-a-host/finish-step/FinishStep"));
const Price = lazy(() => import("../assets/pages/become-a-host/price/Price"));
const Discount = lazy(() => import("../assets/pages/become-a-host/discount/Discount"));
const Receipt = lazy(() => import("../assets/pages/become-a-host/receipt/Receipt"));

const NotFound = lazy(() => import("@/assets/components/NotFound"));

export default function PropertyCreateRoute() {
    return (
        <Routes>
            <Route
                element={<CreatePropertyLayout />}
            >
                <Route path="about-your-place" element={<AboutYourPlace />} />
                <Route path="structure" element={<Structure />} />
                <Route path="privacy-type" element={<PrivacyType />} />
                <Route path="location" element={<Location />} />
                <Route path="floor-plan" element={<FloorPlan />} />
                <Route path="stand-out" element={<StandOut />} />
                <Route path="utilities" element={<Utilities />} />
                <Route path="photos" element={<Photos />} />
                <Route path="title" element={<Title />} />
                <Route path="description" element={<Description />} />
                <Route path="finish-step" element={<FinishStep />} />
                <Route path="price" element={<Price />} />
                <Route path="discount" element={<Discount />} />
                <Route path="receipt" element={<Receipt />} />

                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    )
}
