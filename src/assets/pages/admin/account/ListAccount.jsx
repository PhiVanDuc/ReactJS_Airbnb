import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { lowerCase } from "@/utils/formatFirstLetter";

import { Button } from "@/components/ui/button";

import columns from "./data-table/columns";
import DataTable from "./data-table/DataTable";
import { cn } from "@/lib/utils";

const types = ["All", "User", "Owner", "Admin"];

const demoData = [
    {
        id: 1,
        preferred_name: "CuTienThinh",
        email: "cutienthinh325@gmail.com",
        role: "user, owner, admin",
        blocked: false
    },
    {
        id: 2,
        preferred_name: "PhiVanDuc",
        email: "phivanduc325@gmail.com",
        role: "user, owner, admin",
        blocked: false
    },
    {
        id: 3,
        preferred_name: "PhiVanDuc",
        email: "phivanduc325@gmail.com",
        role: "user, owner, admin",
        blocked: false
    },
    {
        id: 4,
        preferred_name: "PhiVanDuc",
        email: "phivanduc325@gmail.com",
        role: "user, owner, admin",
        blocked: false
    },
    {
        id: 5,
        preferred_name: "PhiVanDuc",
        email: "phivanduc325@gmail.com",
        role: "user, owner, admin",
        blocked: false
    },
    {
        id: 6,
        preferred_name: "PhiVanDuc",
        email: "phivanduc325@gmail.com",
        role: "user, owner, admin",
        blocked: false
    },
    {
        id: 7,
        preferred_name: "PhiVanDuc",
        email: "phivanduc325@gmail.com",
        role: "user, owner, admin",
        blocked: false
    },
    {
        id: 8,
        preferred_name: "PhiVanDuc",
        email: "phivanduc325@gmail.com",
        role: "user, owner, admin",
        blocked: false
    },
    {
        id: 9,
        preferred_name: "PhiVanDuc",
        email: "phivanduc325@gmail.com",
        role: "user, owner, admin",
        blocked: false
    },
    {
        id: 10,
        preferred_name: "PhiVanDuc",
        email: "phivanduc325@gmail.com",
        role: "user, owner, admin",
        blocked: false
    },
    {
        id: 11,
        preferred_name: "PhiVanDuc",
        email: "phivanduc325@gmail.com",
        role: "user, owner, admin",
        blocked: false
    },
    {
        id: 12,
        preferred_name: "PhiVanDuc",
        email: "phivanduc325@gmail.com",
        role: "user, owner, admin",
        blocked: false
    }
];

export default function ListAccount() {
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const type = searchParams.get("type");
        const validTypes = types.map(t => lowerCase(t));
    
        if (!type || !validTypes.includes(type)) {
            const newParams = new URLSearchParams(searchParams);
            newParams.set("type", "all");
            setSearchParams(newParams);
        }
    }, [searchParams]);
    

    return (
        <div>
            <h2 className="text-[26px] font-semibold mb-[20px] lg:mb-[40px]">Accounts</h2>

            <div className="flex items-center flex-nowrap gap-x-[5px] w-full pb-[15px] md:pb-0 mb-[20px] overflow-auto">
                {
                    types.map(type => {
                        return (
                            <Button
                                key={type}
                                className={cn(
                                    "text-[13px] md:text-[15px] rounded-full px-[20px] text-neutral-600",
                                    searchParams.get("type") === lowerCase(type) && "bg-slate-100 text-neutral-800"
                                )}
                                variant="outline"
                                onClick={() => {
                                    const formatType = lowerCase(type);
                                    const newParams = new URLSearchParams(searchParams.toString());
                                    newParams.set("type", formatType);
                                    setSearchParams(newParams);
                                }}
                            >
                                {type}
                            </Button>
                        )
                    })
                }
            </div>

            <DataTable columns={columns} data={demoData} />
        </div>
    )
}