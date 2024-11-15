import {
    ChevronsUpDown,
    LogOut,
    UserPen,
    PanelsTopLeft
} from "lucide-react";

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar
} from "@/components/ui/sidebar";
import { useNavigate } from "react-router-dom";

export default function AdminSidebarFooter() {
    const { isMobile } = useSidebar();
    const navigate = useNavigate();

    return (
        <SidebarMenu>
            <SidebarMenuItem>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <SidebarMenuButton
                            size="lg"
                            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                        >
                            <Avatar className="h-8 w-8 rounded-lg">
                                <AvatarImage src="/images/success.jpg" alt="Avatar" />
                                <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                            </Avatar>

                            <div className="grid flex-1 text-left text-sm leading-tight">
                                <span className="truncate font-semibold">PhiVanDuc</span>
                                <span className="truncate text-xs">phivanduc325@gmail.com</span>
                            </div>

                            <ChevronsUpDown className="ml-auto size-4" />
                        </SidebarMenuButton>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent
                        className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                        side={isMobile ? "bottom" : "right"}
                        align="end"
                        sideOffset={4}
                    >
                        <DropdownMenuLabel className="p-0 font-normal">
                            <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                                <Avatar className="h-8 w-8 rounded-lg">
                                    <AvatarImage src="/images/success.jpg" alt="Avatar" />
                                    <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                                </Avatar>

                                <div className="grid flex-1 text-left text-sm leading-tight">
                                    <span className="truncate font-semibold">PhiVanDuc</span>
                                    <span className="truncate text-xs">phivanduc325@gmail.com</span>
                                </div>
                            </div>
                        </DropdownMenuLabel>

                        <DropdownMenuSeparator />

                        <DropdownMenuGroup>
                            <DropdownMenuItem
                                className="gap-x-[10px] text-neutral-600 cursor-pointer"
                                onClick={() => { navigate("/") }}
                            >
                                <PanelsTopLeft size={20} />
                                User page
                            </DropdownMenuItem>

                            <DropdownMenuItem className="gap-x-[10px] text-neutral-600 cursor-pointer">
                                <UserPen size={20} />
                                Profile
                            </DropdownMenuItem>
                        </DropdownMenuGroup>

                        <DropdownMenuSeparator />

                        <DropdownMenuItem className="gap-x-[10px] text-neutral-600 cursor-pointer">
                            <LogOut size={20} />
                            Sign out
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </SidebarMenuItem>
        </SidebarMenu>
    )
}