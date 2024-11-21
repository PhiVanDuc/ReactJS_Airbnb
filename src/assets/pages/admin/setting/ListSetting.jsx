import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem
} from "@/components/ui/select";

export default function ListSetting() {
    return (
        <div className="max-w-[800px] w-full mx-auto">
            <h2 className="text-[26px] font-semibold mb-[20px] md:mb-[40px]">Settings</h2>

            <div className="space-y-[25px]">
                <div className="space-y-[15px]">
                    <div className="space-y-[2]">
                        <h3 className="text-[15px] font-semibold">Change icon</h3>
                        <p className="text-[14px] text-neutral-500">Describe this setting...</p>
                    </div>

                    <div className="flex items-center justify-between pb-[25px] border-b border-neutral-300">
                        <img
                            src="/images/airbnb.png"
                            alt="Logo"
                            className="max-w-[100px] object-cover"
                        />
                        <Button>Change logo</Button>
                    </div>
                </div>

                <div className="space-y-[15px]">
                    <div className="space-y-[2]">
                        <h3 className="text-[15px] font-semibold">Intermediate profit</h3>
                        <p className="text-[14px] text-neutral-500">Describe this setting...</p>
                    </div>

                    <div className="relative">
                        <Input
                            placeholder="Ex: 5%"
                        />
                        <span class="absolute top-[50%] right-4 translate-y-[-50%] text-[14px] font-semibold">%</span>
                    </div>
                </div>

                <div className="space-y-[15px]">
                    <div className="space-y-[2]">
                        <h3 className="text-[15px] font-semibold">Default columns</h3>
                        <p className="text-[14px] text-neutral-500">Describe this setting...</p>
                    </div>

                    <div className="relative">
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Select default columns layout." />
                            </SelectTrigger>

                            <SelectContent>
                                {
                                    Array.from({ length: 6 }).map((_, index) => {
                                        return (
                                            <SelectItem value={index + 1}>{index + 1}</SelectItem>
                                        )
                                    })
                                }
                            </SelectContent>
                        </Select>
                    </div>

                    <Button className="w-full">Save</Button>
                </div>
            </div>
        </div>
    )
}