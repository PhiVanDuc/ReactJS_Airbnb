import { lazy, Suspense } from "react";
import SuspenseLoading from "@/assets/components/loadings/SuspenseLoading";

import { Routes, Route } from "react-router-dom";

const AdminLayout = lazy(() => import("@/assets/layouts/AdminLayout"));
const Dashboard = lazy(() => import("@/assets/pages/admin/dashboard/Dashboard"));

export default function AdminRoute() {
    return (
        <Routes>
            <Route 
                path="/admin" 
                element={
                    <Suspense fallback={<SuspenseLoading />}>
                        <AdminLayout />
                    </Suspense>
                } 
            >
                <Route path="dashboard" element={<Dashboard />} />
            </Route>
        </Routes>
    )
}