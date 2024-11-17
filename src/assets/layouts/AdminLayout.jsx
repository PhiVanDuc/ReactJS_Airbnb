import { Outlet, useLocation, useParams } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";

import AdminSidebar from "../components/sidebar/AdminSidebar";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { lowerCase, upperCase } from "@/utils/formatFirstLetter";

export default function AdminLayout() {
    // const location = useLocation();
    // const params = useParams();

    // const [arrPathname, setArrPathname] = useState(() => {
    //     return location.pathname
    //       .split("/")
    //       .filter((segment) => segment)
    //       .map((segment) => upperCase(segment));
    // });

    // useEffect(() => {
    //     setArrPathname(() => {
    //         const pathSegments = location.pathname
    //           .split("/")
    //           .filter((segment) => segment)
    //           .map((segment) => upperCase(segment));

    //         return pathSegments.filter((segment) => {
    //             return !Object.values(params).includes(segment.toLowerCase());
    //         });
    //     });
    // }, [location, params]);

    return (
        <SidebarProvider>
            <AdminSidebar />

            <main className="w-full">
                <header className="flex items-center px-[20px] py-[15px] border-b border-neutral-200 w-full bg-sidebar">
                    <SidebarTrigger />
                    <Separator orientation="vertical" className="mx-2 mr-4 h-4 bg-slate-300" />
{/* 
                    <Breadcrumb>
                        <BreadcrumbList>
                            {
                                arrPathname.map((path, index) => {
                                    if (arrPathname.length === 1 || index === arrPathname.length - 1) {
                                        return (
                                            <BreadcrumbItem key={path}>
                                                <BreadcrumbPage>
                                                    {path}
                                                </BreadcrumbPage>
                                            </BreadcrumbItem>
                                        )
                                    }

                                    if (arrPathname.length > 1 && index < arrPathname.length - 1) {
                                        return (
                                            <Fragment key={path}>
                                                <BreadcrumbItem>
                                                    <BreadcrumbLink href={lowerCase(path)}>
                                                        {path}
                                                    </BreadcrumbLink>
                                                </BreadcrumbItem>

                                                <BreadcrumbSeparator />
                                            </Fragment>
                                        )
                                    }
                                })
                            }
                        </BreadcrumbList>
                    </Breadcrumb> */}
                </header>

                <div className="p-[20px]">
                    <Outlet />
                </div>
            </main>
        </SidebarProvider>
    )
}