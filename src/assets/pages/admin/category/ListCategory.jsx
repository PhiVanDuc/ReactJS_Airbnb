import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"  
import { Button } from "@/components/ui/button";
import DataTable from "./data-table/DataTable";
import columns from "./data-table/columns";

import { Plus, Home } from "lucide-react";

import { lowerCase } from "@/utils/formatFirstLetter";
import { cn } from "@/lib/utils";

const types = [
    {
        name: "All",
        desc: "All types of category."
    },
    {
        name: "Style-of-stay",
        desc: "Types of housing such as cottages, villas, cabins, etc."
    },
    {
        name: "Location-and-nature",
        desc: "Location types such as sea, mountain, lake, etc."
    },
    {
        name: "Experience-types",
        desc: "Types of experiences like skiing, surfing, camping, etc."
    },
    {
        name: "Unique-features",
        desc: "Special features like beautiful swimming pool, spa, etc."
    },
    {
        name: "Group-guests",
        desc: "Categories for guest groups such as families, large groups, pets."
    },
    {
        name: "Other",
        desc: "Other categories such as newly added, trending, etc."
    }
];

const demoData = [
    {
        id: 1,
        name: "Cabin",
        desc: "This is desc for category",
        icon: <Home />,
        totalProperties: 20
    }
]

export default function ListCategory() {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        // Giả lập việc tải dữ liệu
        setTimeout(() => {
            setData(demoData);
            setLoading(false);
        }, 2000);
    }, []);

    useEffect(() => {
        const type = searchParams.get("type");
        const validTypes = types.map(t => lowerCase(t.name));
    
        if (!type || !validTypes.includes(type)) {
            const newParams = new URLSearchParams(searchParams);
            newParams.set("type", "all");
            setSearchParams(newParams);
        }
    }, [searchParams]);

    const handleClickCreateButton = () => {
        navigate('create');
    }

    return (
        <div>
            <div className="flex items-center justify-between gap-x-[20px] mb-[20px] lg:mb-[40px]">
                <h2 className="text-[26px] font-semibold">Categories</h2>

                <Button
                    onClick={handleClickCreateButton}
                    className="hidden lg:flex"
                >
                    Add category
                </Button>
                <div
                    onClick={handleClickCreateButton}
                    className="lg:hidden w-[35px] h-[35px] flex items-center justify-center rounded-full shadow-md bg-slate-50 cursor-pointer text-neutral-600 hover:bg-slate-100 hover:text-neutral-800 transition"
                >
                    <Plus size={20} />
                </div>
            </div>

            <div className="flex items-center flex-nowrap md:flex-wrap gap-x-[5px] md:gap-y-[10px] w-full pb-[15px] md:pb-0 mb-[20px] overflow-auto">
                <TooltipProvider>
                    {
                        types.map(type => {
                            return (
                                <Tooltip>
                                    <TooltipTrigger>
                                        <Button
                                            key={type.name}
                                            className={cn(
                                                "text-[13px] md:text-[15px] rounded-full px-[20px] text-neutral-600",
                                                searchParams.get("type") === lowerCase(type.name) && "bg-slate-100 text-neutral-800"
                                            )}
                                            variant="outline"
                                            onClick={() => {
                                                if (loading) {
                                                    toast.warning("Please wait until the data arrives.");
                                                    return;
                                                }

                                                const formatType = lowerCase(type.name);
                                                const newParams = new URLSearchParams(searchParams.toString());
                                                newParams.set("type", formatType);
                                                setSearchParams(newParams);
                                            }}
                                        >
                                            {type.name.replace(/-/g, " ")}
                                        </Button>
                                    </TooltipTrigger>

                                    <TooltipContent>
                                        <p className="text-neutral-600">{type.desc}</p>
                                    </TooltipContent>
                                </Tooltip>
                            )
                        })
                    }
                </TooltipProvider>
            </div>

            <DataTable columns={columns} data={data} loading={loading} />
        </div>
    )
}
