import { useForm } from "react-hook-form";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form";

import { 
    Dialog, 
    DialogContent, 
    DialogHeader, 
    DialogTrigger,
    DialogTitle
} from "@/components/ui/dialog";

import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function PropertyType() {
    const form = useForm();

    const onSubmit = (values) => {}

    return (
        <div className='flex justify-center'>
            <div className='w-full max-w-[800px]'>
                <h2 className='text-[30px] font-semibold mb-[60px]'>Property type</h2>

                <div className="space-y-[50px]">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-[25px]">
                            <FormField
                                control={form.control}
                                name="property-type"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="font-semibold">Property type</FormLabel>

                                        <FormControl>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="Select property type" />
                                                </SelectTrigger>
                                                
                                                <SelectContent>
                                                    <SelectItem value="home">Home</SelectItem>
                                                    <SelectItem value="cabin">Cabin</SelectItem>
                                                    <SelectItem value="tree house">Tree house</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </FormControl>

                                        <FormDescription className="text-[12px]">A wooden house with a sloped roof popular for skiing or summer stays.</FormDescription>
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="listing-type"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="font-semibold">Listing type</FormLabel>

                                        <FormControl>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="Select listing room" />
                                                </SelectTrigger>
                                                
                                                <SelectContent>
                                                    <SelectItem value="entire place">Entire place</SelectItem>
                                                    <SelectItem value="Room">Room</SelectItem>
                                                    <SelectItem value="shared room">Shared room</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </FormControl>

                                        <FormDescription className="text-[12px]">Guests have their own room for sleeping. Other areas can be shared. Rooms are reviewed by Airbnb to see if they fit this criteria</FormDescription>
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="year-build"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="font-semibold">Year built</FormLabel>

                                        <FormControl>
                                            <Input
                                                {...field}
                                                placeholder="Type year built..."
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            <div className="flex items-center justify-between">
                                <p>How many property for this post?</p>

                                <div className="flex items-center gap-x-[15px]">
                                    <div className="flex items-center justify-center w-[30px] aspect-square rounded-full bg-slate-100 cursor-pointer">
                                        <FiMinus className="text-[15px] text-neutral-600" />
                                    </div>
                                    <p>1</p>
                                    <div className="flex items-center justify-center w-[30px] aspect-square rounded-full bg-slate-100 cursor-pointer">
                                        <FiPlus className="text-[15px] text-neutral-600" />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </Form>

                    <div className="h-[1px] w-full bg-neutral-200 rounded-full"></div>

                    <div className="space-y-[30px]">
                        <div className="space-y-[5px]">
                            <h3 className="text-[20px] font-semibold">Your category</h3>
                            <p className="text-[14px] text-neutral-400">Categories help guests find unique places to stay. To be included in a category, a listing has to meet some requirements.</p>
                        </div>

                        <div className="space-y-[20px]">
                            <div className="grid grid-cols-2 gap-x-[15px] gap-y-[30px]">
                                <div className="flex items-center gap-x-[15px]">
                                    <FiPlus className="text-[25px] text-neutral-600" />
                                    <p className="text-[15px]">Category 1</p>
                                </div>

                                <div className="flex items-center gap-x-[15px]">
                                    <FiPlus className="text-[25px] text-neutral-600" />
                                    <p className="text-[15px]">Category 1</p>
                                </div>

                                <div className="flex items-center gap-x-[15px]">
                                    <FiPlus className="text-[25px] text-neutral-600" />
                                    <p className="text-[15px]">Category 1</p>
                                </div>
                            </div>

                            <Dialog>
                                <DialogTrigger className="w-full">
                                    <div className="py-[10px] text-center border border-neutral-400 bg-neutral-50 rounded-[10px] text-[15px] font-medium text-neutral-500 cursor-pointer">Add more category</div>
                                </DialogTrigger>

                                <DialogContent className="w-full max-w-[800px] gap-y-[40px] max-h-[90vh] overflow-y-auto">
                                    <DialogHeader>
                                        <DialogTitle className="text-[20px] font-semibold text-center">
                                            Choose category
                                        </DialogTitle>
                                    </DialogHeader>

                                    <div className="space-y-[20px]">
                                        <div className="flex items-center gap-x-[10px]">
                                            <Input placeholder="Search category..." />
                                            <Button>Search</Button>
                                        </div>

                                        <div className="grid grid-cols-2 gap-[5px]">
                                            <div className="px-[20px] py-[15px] rounded-[5px] flex items-center gap-x-[15px] cursor-pointer hover:bg-slate-50">
                                                <FiPlus className="shrink-0 text-[25px] text-neutral-600" />
                                                <p className="text-[16px] text-neutral-600 truncate">Category 1</p>
                                            </div>

                                            <div className="px-[20px] py-[15px] rounded-[5px] flex items-center gap-x-[15px] cursor-pointer hover:bg-slate-50">
                                                <FiPlus className="shrink-0 text-[25px] text-neutral-600" />
                                                <p className="text-[16px] text-neutral-600 truncate">Category 1</p>
                                            </div>

                                            <div className="px-[20px] py-[15px] rounded-[5px] flex items-center gap-x-[15px] cursor-pointer hover:bg-slate-50">
                                                <FiPlus className="shrink-0 text-[25px] text-neutral-600" />
                                                <p className="text-[16px] text-neutral-600 truncate">Category 1</p>
                                            </div>

                                            <div className="px-[20px] py-[15px] rounded-[5px] flex items-center gap-x-[15px] cursor-pointer hover:bg-slate-50">
                                                <FiPlus className="shrink-0 text-[25px] text-neutral-600" />
                                                <p className="text-[16px] text-neutral-600 truncate">Category 1</p>
                                            </div>
                                        </div>
                                    </div>
                                </DialogContent>
                            </Dialog>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}