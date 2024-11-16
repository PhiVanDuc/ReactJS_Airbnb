import { Switch } from "@/components/ui/switch"
import { cn } from "@/lib/utils";
import { upperCase } from "@/utils/formatFirstLetter";

const columns = [
    {
        accessorKey: "infomation",
        header: () => {
            return (
                <h3 className="whitespace-nowrap text-[13px] lg:text-[15px]">Infomation</h3>
            )
        },
        cell: info => {
            const row = info.row.original;
      
            return (
                <div className="space-y-[2px]">
                    <h4 className="text-[14px] lg:text-[15px] font-medium">{row.preferred_name}</h4>
                    <p className="text-[13px] text-neutral-600">{row.email}</p>
                </div>
            )
        },
        filterFn: (row, columnId, filterValue) => {
            const rowData = row.getValue(columnId); // rowData là một object có cấu trúc { preferred_name, email }
            return (
                rowData.preferred_name.toLowerCase().includes(filterValue.toLowerCase()) ||
                rowData.email.toLowerCase().includes(filterValue.toLowerCase())
            );
        }
    },
    {
        accessorKey: "role",
        header: () => {
            return (
                <h3 className="whitespace-nowrap text-[13px] lg:text-[15px]">Roles</h3>
            )
        },
        cell: info => {
            const row = info.row.original;
            const arrRole = row.role.split(", ").map(item => upperCase(item));

            return (
                <div className="space-y-[5px]">
                    {
                        arrRole.map(role => (
                            <p key={role}>{role}</p>
                        ))
                    }
                </div>
            )
        },
    },
    {
        accessorKey: "toggle admin",
        header: () => {
            return (
                <h3 className="whitespace-nowrap text-[13px] lg:text-[15px] truncate">Toggle admin</h3>
            )
        },
        cell: info => {
            return (
                <Switch />
            )
        }
    },
    {
        accessorKey: "blocked",
        header: () => {
            return (
                <h3 className="whitespace-nowrap text-[13px] lg:text-[15px]">Blocked</h3>
            )
        },
        cell: info => {
            const row = info.row.original;

            return (
                <p
                    className={cn(
                        "text-[14px] lg:text-[16px] font-semibold",
                        !row.blocked ? "text-green-500" : "text-root"
                    )}
                >
                    {!row.blocked ? "Is Active" : "Blocked"}
                </p>
            )
        },
    }
];

export default columns;