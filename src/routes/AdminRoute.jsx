import { lazy, Suspense } from "react";
import SuspenseLoading from "@/assets/components/loadings/SuspenseLoading";

import { Routes, Route } from "react-router-dom";

const AdminLayout = lazy(() => import("@/assets/layouts/AdminLayout"));
const Dashboard = lazy(() => import("@/assets/pages/admin/dashboard/Dashboard"));
const ListAccount = lazy(() => import("@/assets/pages/admin/account/ListAccount"));
const EditAccount = lazy(() => import("@/assets/pages/admin/account/EditAccount"));
const ListCategory = lazy(() => import("@/assets/pages/admin/category/ListCategory"));
const NewCategory = lazy(() => import("@/assets/pages/admin/category/NewCategory"));
const EditCategory = lazy(() => import("@/assets/pages/admin/category/EditCategory"));
const ListUtility = lazy(() => import("@/assets/pages/admin/utility/ListUtility"));
const NewUtility = lazy(() => import("@/assets/pages/admin/utility/NewUtility"));
const EditUtility = lazy(() => import("@/assets/pages/admin/utility/EditUtility"));
const ListSetting = lazy(() => import("@/assets/pages/admin/setting/ListSetting"));

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

                <Route path="accounts" element={<ListAccount />} />
                <Route path="accounts/edit" element={<EditAccount />} />
                <Route path="accounts/edit/:userId" element={<EditAccount />} />

                <Route path="categories" element={<ListCategory />} />
                <Route path="categories/create" element={<NewCategory />} />
                <Route path="categories/edit/:categoryId" element={<EditCategory />} />

                <Route path="utilities" element={<ListUtility />} />
                <Route path="utilities/create" element={<NewUtility />} />
                <Route path="utilities/edit/:utilityId" element={<EditUtility />} />

                <Route path="settings" element={<ListSetting />} />
            </Route>
        </Routes>
    )
}