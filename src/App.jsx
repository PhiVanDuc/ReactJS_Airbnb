import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import SuspenseLoading from "./assets/components/loadings/SuspenseLoading";
import HomeRoute from "./routes/homeRoute";
import HostingRoute from "./routes/HostingRoute";
import PropertyCreateRoute from "./routes/PropertyCreateRoute";
import AdminRoute from "./routes/AdminRoute";
import ProtectedRoute from "./routes/ProtectedRoute";

const SuccessPayment = lazy(() => import("./assets/pages/success_payment/SuccessPayment"));
const PublishCelebration = lazy(() => import("./assets/pages/become-a-host/publish-celebration/PublishCelebration"));
const NotFound = lazy(() => import("@/assets/components/NotFound"));

import { Toaster } from "sonner";

export default function App() {
    return (
        <div className="font-inter">
            <Toaster />

            <Routes>
                {/* Home route */}
                <Route path="/*" element={<HomeRoute />} />
                {/* End */}

                <Route element={<ProtectedRoute />}>
                    {/* Admin Route */}
                    <Route path="admin/*" element={<AdminRoute />} />
                    {/* End */}

                    {/* Hosting route */}
                    <Route path="hosting/*" element={<HostingRoute />} />
                    {/* End */}

                    {/* Property create route */}
                    <Route path="become-a-host/:propertyId/*" element={<PropertyCreateRoute />} />
                    {/* End */}

                    {/* Success payment route */}
                    <Route path="success-payment" element={<SuccessPayment />} />
                    {/* End */}

                    <Route path="become-a-host/:propertyId/publish-celebration" element={
                        <Suspense fallback={<SuspenseLoading />}>
                            <PublishCelebration />
                        </Suspense>
                    } />
                </Route>

                <Route path="*" element={
                    <Suspense fallback={<SuspenseLoading />}>
                        <NotFound />
                    </Suspense>
                } />
            </Routes>
        </div>
    )
}