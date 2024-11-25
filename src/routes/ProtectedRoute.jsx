import { useEffect, useMemo } from "react";
import { Navigate, Outlet } from "react-router-dom";

import useLocalstorage from "@/hooks/useLocalstorage";
import Cookies from "js-cookie";
import { callApiSignOut } from "@/apis/auth";
import { toast } from "sonner";

export default function ProtectedRoute() {
    const { get, remove } = useLocalstorage();

    const accessToken = useMemo(() => Cookies.get("accessToken"), []);
    const info_user = useMemo(() => get("info_user"), []);

    useEffect(() => {
        (async () => {
            if (!info_user && accessToken) {
                await callApiSignOut();
                return;
            }
            else if (!accessToken && info_user || !accessToken && !info_user) {
                remove("info_user");
                toast.warning("Please sign in first.");
            }
        })();
    }, []);

    if (!info_user || !accessToken) {
        return <Navigate to="/" replace={true} />
    }

    return (
        <Outlet />
    )
}