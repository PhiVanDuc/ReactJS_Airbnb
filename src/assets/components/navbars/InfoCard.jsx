import { lazy, useState } from "react";
import { LuMenu } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuTrigger,
    DropdownMenuSeparator
} from "@/components/ui/dropdown-menu";

import { cn } from "@/lib/utils";
import { callApiSignOut } from "@/apis/auth";

const FormSignIn = lazy(() => import("../auth/FormSignIn"));
const FormRegistor = lazy(() => import("../auth/FormRegistor"));
const FormForgotPassword = lazy(() => import("../auth/FormForgotPassword"));

export default function InfoCard({ pathname = "" }) {
    const navigate = useNavigate();
    const isHosting = pathname.startsWith("/hosting");

    const [showDropdownMenu, setShowDropdownMenu] = useState(false);
    const [showFormSignIn, setShowFormSignIn] = useState(false);
    const [showFormRegistor, setShowFormRegistor] = useState(false);
    const [showFormForgotPassword, setShowFormForgotPassword] = useState(false);

    const handleOpenDialog = (item) => {
        switch(item) {
            case "sign in":
                setShowFormSignIn(true);
                break;
            case "registor":
                setShowFormRegistor(true);
                break;
            case "forgot password":
                setShowFormForgotPassword(true);
                break;
            default:
                return;
        }
        setShowDropdownMenu(false);
    }

    return (
        <div className="shrink-0 hidden lg:flex items-center gap-x-[15px]">
            {
                !isHosting && (
                    <Link
                        to="/hosting/listing"
                        className="text-[14px] font-semibold"
                    >
                        Airbnb your home
                    </Link>
                )
            }

            <DropdownMenu
                open={showDropdownMenu}
                onOpenChange={setShowDropdownMenu}
            >
                <DropdownMenuTrigger>
                    <div className={cn(
                        "lg:flex items-center gap-x-[10px] ps-[12px] pe-[5px] py-[5px] border border-slate-300 rounded-full cursor-pointer",
                        isHosting ? "p-0 gap-0 w-[36px] h-[36px] justify-center" : ""
                    )}>
                        {
                            !isHosting && <LuMenu size={20} />
                        }
                        <div className="shrink-0 w-[30px] h-[30px] bg-slate-300 rounded-full"></div>
                    </div>
                </DropdownMenuTrigger>

                <DropdownMenuContent align="end" side="bottom" sideOffset={10}>
                    <DropdownMenuLabel 
                        className="px-[20px] py-[8px] cursor-pointer rounded-[5px] hover:bg-slate-100 transition"
                        onClick={() => { handleOpenDialog("sign in") }}
                    >
                        Sign in
                    </DropdownMenuLabel>

                    <DropdownMenuLabel 
                        className="px-[20px] py-[8px] cursor-pointer rounded-[5px] hover:bg-slate-100 transition"
                        onClick={() => { handleOpenDialog("registor") }}
                    >
                        Registor
                    </DropdownMenuLabel>

                    <DropdownMenuLabel
                        className="px-[20px] py-[8px] cursor-pointer rounded-[5px] hover:bg-slate-100 transition"
                        onClick={() => { handleOpenDialog("forgot password") }}
                    >
                        Forgot password
                    </DropdownMenuLabel>

                    <DropdownMenuLabel
                        className="px-[20px] py-[8px] cursor-pointer rounded-[5px] hover:bg-slate-100 transition"
                        onClick={() => { navigate("/profile") }}
                    >
                        Profile
                    </DropdownMenuLabel>

                    <DropdownMenuLabel
                        className="px-[20px] py-[8px] cursor-pointer rounded-[5px] hover:bg-slate-100 transition"
                        onClick={async () => {
                            await callApiSignOut();
                            navigate("/");
                        }}
                    >
                        Sign out
                    </DropdownMenuLabel>

                    <DropdownMenuSeparator />

                    <DropdownMenuLabel
                        className="px-[20px] py-[8px] cursor-pointer rounded-[5px] hover:bg-slate-100 transition"
                        onClick={() => { navigate("/admin") }}
                    >
                        Admin page
                    </DropdownMenuLabel>

                    <DropdownMenuLabel
                        className="px-[20px] py-[8px] cursor-pointer rounded-[5px] hover:bg-slate-100 transition"
                        onClick={() => { navigate("/messages") }}
                    >
                        Messages
                    </DropdownMenuLabel>

                    <DropdownMenuLabel
                        className="px-[20px] py-[8px] cursor-pointer rounded-[5px] hover:bg-slate-100 transition"
                        onClick={() => { navigate("/wishlist") }}
                    >
                        Wishlist
                    </DropdownMenuLabel>

                    <DropdownMenuLabel
                        className="px-[20px] py-[8px] cursor-pointer rounded-[5px] hover:bg-slate-100 transition"
                        onClick={() => { navigate("/trips") }}
                    >
                        Trips
                    </DropdownMenuLabel>
                </DropdownMenuContent>
            </DropdownMenu>

            { showFormSignIn && <FormSignIn showFormSignIn={showFormSignIn} setShowFormSignIn={setShowFormSignIn} /> }

            { showFormRegistor && <FormRegistor showFormRegistor={showFormRegistor} setShowFormRegistor={setShowFormRegistor} /> }

            { showFormForgotPassword && <FormForgotPassword showFormForgotPassword={showFormForgotPassword} setShowFormForgotPassword={setShowFormForgotPassword} /> }
        </div>
    )
}