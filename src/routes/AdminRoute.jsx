import { lazy, Suspense } from "react";
import SuspenseLoading from "@/assets/components/loadings/SuspenseLoading";

import { Routes, Route, Navigate } from "react-router-dom";

const AdminLayout = lazy(() => import("@/assets/layouts/AdminLayout"));
const Dashboard = lazy(() => import("@/assets/pages/admin/dashboard/Dashboard"));
const ListAccount = lazy(() => import("@/assets/pages/admin/account/ListAccount"));
const EditAccount = lazy(() => import("@/assets/pages/admin/account/EditAccount"));
const ListProperty = lazy(() => import("@/assets/pages/admin/account/ListProperty"));
const ListCategory = lazy(() => import("@/assets/pages/admin/category/ListCategory"));
const NewCategory = lazy(() => import("@/assets/pages/admin/category/NewCategory"));
const EditCategory = lazy(() => import("@/assets/pages/admin/category/EditCategory"));
const ListUtility = lazy(() => import("@/assets/pages/admin/utility/ListUtility"));
const NewUtility = lazy(() => import("@/assets/pages/admin/utility/NewUtility"));
const EditUtility = lazy(() => import("@/assets/pages/admin/utility/EditUtility"));
const ListSetting = lazy(() => import("@/assets/pages/admin/setting/ListSetting"));

const NotFound = lazy(() => import("@/assets/components/NotFound"));

export default function AdminRoute() {
    return (
        <Routes>
            <Route 
                element={
                    <Suspense fallback={<SuspenseLoading />}>
                        <AdminLayout />
                    </Suspense>
                }
            >
                <Route index element={<Navigate to="dashboard" />} />
                <Route path="dashboard" element={<Dashboard />} />

                <Route path="accounts" element={<ListAccount />} />
                <Route path="accounts/edit" element={<EditAccount />} />
                <Route path="accounts/edit/:userId" element={<EditAccount />} />
                <Route path="accounts/edit/list-properties" element={<ListProperty />} />
                <Route path="accounts/edit/:userId/list-properties" element={<ListProperty />} />

                <Route path="categories" element={<ListCategory />} />
                <Route path="categories/create" element={<NewCategory />} />
                <Route path="categories/edit/:categoryId" element={<EditCategory />} />

                <Route path="utilities" element={<ListUtility />} />
                <Route path="utilities/create" element={<NewUtility />} />
                <Route path="utilities/edit/:utilityId" element={<EditUtility />} />

                <Route path="settings" element={<ListSetting />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    )
}