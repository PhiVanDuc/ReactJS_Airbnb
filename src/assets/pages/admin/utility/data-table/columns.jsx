import { Switch } from "@/components/ui/switch"
import { cn } from "@/lib/utils";
import { upperCase } from "@/utils/formatFirstLetter";

const columns = [
    {
        accessorKey: "basic_info",
        header: () => {
            return (
                <h3 className="whitespace-nowrap text-[13px] lg:text-[15px]">Info</h3>
            )
        },
        cell: info => {
            const row = info.row.original;
      
            return (
                <div className="space-y-[2px]">
                    <h4 className="text-[14px] lg:text-[15px] font-medium">{row.name}</h4>
                    <p className="text-[13px] text-neutral-600">{row.desc}</p>
                </div>
            )
        }
    },
    {
        accessorKey: "icon",
        header: () => {
            return (
                <h3 className="whitespace-nowrap text-[13px] lg:text-[15px]">Icon</h3>
            )
        },
        cell: info => {
            const row = info.row.original;

            return (
                <>
                    {row.icon}
                </>
            )
        },
    },
    {
        accessorKey: "total_properties",
        header: () => {
            return (
                <h3 className="whitespace-nowrap text-[13px] lg:text-[15px]">Total properties</h3>
            )
        },
        cell: info => {
            const row = info.row.original;
      
            return (
                <p>{row.totalProperties}</p>
            )
        }
    },
];

export default columns;