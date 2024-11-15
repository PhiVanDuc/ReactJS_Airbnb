import { Link, useNavigate } from "react-router-dom";
import AdminSidebarFooter from "./AdminSidebarFooter";

import { LayoutDashboard, Users, ChartColumnStacked, Zap, Settings } from "lucide-react";

import {
    Sidebar,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from "@/components/ui/sidebar";

import { cn } from "@/lib/utils";

const items = [
    {
        label: "General",
        contents: [
            {
                title: "Dashboard",
                href: "dashboard",
                icon: LayoutDashboard
            }
        ]
    },
    {
        label: "Profiles",
        contents: [
            {
                title: "Accounts",
                href: "accounts",
                icon: Users
            }
        ]
    },
    {
        label: "Configurations",
        contents: [
            {
                title: "Categories",
                href: "categories",
                icon: ChartColumnStacked
            },
            {
                title: "Utilities",
                href: "utilities",
                icon: Zap
            },
            {
                title: "Settings",
                href: "settings",
                icon: Settings
            }
        ]
    },
];

export default function AdminSidebar() {
    const navigate = useNavigate();
    const { open, isMobile, setOpenMobile } = useSidebar();    

    return (
        <Sidebar collapsible="icon">
            <SidebarHeader>
                <div
                    className={cn(
                        "flex justify-center mt-[10px] p-[10px] hover:bg-neutral-200 rounded-[10px] cursor-pointer",
                        (!open && !isMobile) && "hidden"
                    )}
                    onClick={() => { navigate("/") }}
                >
                    <img src="/images/airbnb.png" className="w-full max-w-[100px] object-cover" />
                </div>
            </SidebarHeader>

            <SidebarContent>
                {
                    items.map(item => (
                        <SidebarGroup key={item.label}>
                            <SidebarGroupLabel>{item.label}</SidebarGroupLabel>

                            <SidebarGroupContent>
                                <SidebarMenu>
                                    {
                                        item.contents.map(content => (
                                            <SidebarMenuItem key={content.title}>
                                                <SidebarMenuButton asChild>
                                                    <Link to={content.href} onClick={() => { setOpenMobile(false); }}>
                                                        <content.icon />
                                                        <span>{content.title}</span>
                                                    </Link>
                                                </SidebarMenuButton>
                                            </SidebarMenuItem>
                                        ))
                                    }
                                </SidebarMenu>
                            </SidebarGroupContent>
                        </SidebarGroup>
                    ))
                }
            </SidebarContent>

            <SidebarFooter>
                <AdminSidebarFooter />
            </SidebarFooter>
        </Sidebar>
    )
}