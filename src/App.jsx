import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// import Test from "./assets/pages/test/Test";

import SuspenseLoading from "./assets/components/loadings/SuspenseLoading";
import HomeRoute from "./routes/homeRoute";
import HostingRoute from "./routes/HostingRoute";
import PropertyCreateRoute from "./routes/PropertyCreateRoute";
import { Toaster } from "sonner";

const SuccessPayment = lazy(() => import("./assets/pages/success_payment/SuccessPayment"));
const PublishCelebration = lazy(() => import("./assets/pages/become-a-host/publish-celebration/PublishCelebration"));

export default function App() {
    return (
        <div className="font-inter">
            <Toaster />
 
            {/* Home route */}
            <HomeRoute />
            {/* End */}

            {/* Hosting route */}
            <HostingRoute />
            {/* End */}

            {/* Property create route */}
            <PropertyCreateRoute />
            {/* End */}

            <Routes>
                {/* <Route path="/test" element={<Test />} /> */}
                
                {/* Success payment route */}
                <Route path="/success-payment" element={<SuccessPayment />} />
                {/* End */}

                <Route path="/become-a-host/:propertyId/publish-celebration" element={
                    <Suspense fallback={<SuspenseLoading />}>
                        <PublishCelebration />
                    </Suspense>
                } />
            </Routes>
        </div>
    )
}