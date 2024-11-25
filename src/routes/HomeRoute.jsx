import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import UserLayout from "../assets/layouts/UserLayout";
import HomePage from "../assets/pages/home/HomePage";
import ProtectedRoute from "./ProtectedRoute";

const SearchList = lazy(() => import("../assets/pages/home/SearchList"))
const DetailProperty = lazy(() => import("../assets/pages/property/DetailProperty"));
const PropertyBook = lazy(() => import("../assets/pages/property/book/PropertyBook"));
const Images = lazy(() => import("../assets/pages/property/images/Images"));
const Wishlist = lazy(() => import("../assets/pages/wishlist/Wishlist"));
const Trips = lazy(() => import("../assets/pages/trips/Trips"));
const PropertyInstructions = lazy(() => import("../assets/pages/trips/property/PropertyInstructions"));
const Messages = lazy(() => import("../assets/pages/messages/Messages"));
const Profile = lazy(() => import("../assets/pages/profile/Profile"));

const NotFound = lazy(() => import("@/assets/components/NotFound"));

export default function HomeRoute() {
    return (
        <Routes>
            <Route path="/" element={<UserLayout />}>
                <Route index element={<HomePage />} />
                <Route path="search" element={<SearchList />} />
                <Route path="property/:propertyId" element={<DetailProperty />} />
                <Route path="property/:propertyId/images" element={<Images />} />
                <Route element={<ProtectedRoute />}>
                    <Route path="property/:propertyId/book" element={<PropertyBook />} />
                    <Route path="/wishlist" element={<Wishlist />} />
                    <Route path="/trips" element={<Trips />} />
                    <Route path="/trips/property/:propertyId" element={<PropertyInstructions />} />
                    <Route path="/messages" element={<Messages />} />
                    <Route path="/profile" element={<Profile />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
}