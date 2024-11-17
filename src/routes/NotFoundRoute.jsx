import { lazy, Suspense } from "react";
import SuspenseLoading from "@/assets/components/loadings/SuspenseLoading";

import { Routes, Route } from "react-router-dom";

const NotFound = lazy(() => import("@/assets/components/NotFound"));

export default function NotFoundRoute() {
    return (
        <Routes>
            <Route path="*" element={
                <Suspense fallback={<SuspenseLoading />}>
                    <NotFound />
                </Suspense>
            } />

            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}