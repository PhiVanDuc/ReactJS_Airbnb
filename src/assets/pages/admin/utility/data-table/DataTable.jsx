import {
    flexRender,
    getCoreRowModel,
    useReactTable,
} from "@tanstack/react-table";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { Skeleton } from "@/components/ui/skeleton";

export default function DataTable ({ columns, data, loading }) {
    const navigate = useNavigate();
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    const handleClickRow = (info) => {
        navigate(`edit/${info.id}`)
    }

    return (
        <div className="space-y-[10px]">
            <div className="flex items-center gap-x-[10px] w-full">
                <Button>Search</Button>
                <Input
                    placeholder="Filter name category..."
                    className="w-full"
                />
            </div>

            <div className="rounded-md border">
                <Table>
                    {/* Table Header */}
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {
                                    headerGroup.headers.map((header) => {
                                        return (
                                            <TableHead key={header.id}>
                                                {
                                                    header.isPlaceholder ?
                                                    null :
                                                    flexRender(
                                                        header.column.columnDef.header,
                                                        header.getContext()
                                                    )
                                                }
                                            </TableHead>
                                        )
                                    })
                                }
                            </TableRow>
                        ))}
                    </TableHeader>
                    {/* End */}
                    
                    {/* Table Body */}
                    <TableBody>
                        {
                            table.getRowModel().rows?.length ?
                            (
                                table.getRowModel().rows.map((row) => (
                                    <TableRow
                                        key={row.id}
                                        data-state={row.getIsSelected() && "selected"}
                                        className="cursor-pointer"
                                        onClick={() => { handleClickRow(row.original) }}
                                    >
                                        {
                                            row.getVisibleCells().map((cell) => (
                                                <TableCell key={cell.id}>
                                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                                </TableCell>
                                            ))
                                        }
                                    </TableRow>
                                ))
                            ) :
                            loading ?
                            (
                                <TableRow>
                                    <TableCell colSpan={columns.length} className="space-y-[10px]">
                                        {
                                            [...Array(10)].map((_, index) => (
                                                <Skeleton
                                                    key={index}
                                                    className="w-full h-[60px] rounded-[10px] bg-slate-300 mb-2"
                                                />
                                            ))
                                        }
                                    </TableCell>
                                </TableRow>
                            ) :
                            (
                                (
                                    <TableRow>
                                        <TableCell colSpan={columns.length} className="h-24 text-center">
                                            No results.
                                        </TableCell>
                                    </TableRow>
                                )
                            )
                        }
                    </TableBody>
                    {/* End */}
                </Table>
            </div>

            <div className="flex items-center justify-between pb-4">
                <div
                    className="text-[14px] font-semibold text-neutral-400"
                >
                    {
                        table.getRowModel().rows.length ?
                        (
                            <p>Page <span className="text-neutral-500">1</span> of <span className="text-neutral-500">10</span> pages.</p>
                        ) :
                        loading && <Skeleton className="w-[100px] h-[30px] bg-slate-200 rounded-[10px]" />
                    }

                    
                </div>

                <div className="flex items-center justify-end space-x-2">
                    <Button
                        variant="outline"
                        size="sm"
                        disabled={loading}
                    >
                        Previous
                    </Button>

                    <Button
                        variant="outline"
                        size="sm"
                        disabled={loading}
                    >
                        Next
                    </Button>
                </div>
            </div>
        </div>
    )
}