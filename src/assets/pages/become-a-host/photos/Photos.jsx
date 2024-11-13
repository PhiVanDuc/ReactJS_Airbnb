import CloudinaryUploadWidget from "@/assets/components/libs/CloudinaryUploadWidget";
import { Button } from "@/components/ui/button";

export default function Photos() {
    return (
        <div className="flex items-center justify-center h-full">
            <div className="w-[640px] max-w-[640px] gap-y-[40px] space-y-[15px] my-auto">
                <div className="space-y-[5px] shrink-0">
                    <h2 className="text-[26px] lg:text-[30px] font-semibold">Add some photos of your cabin</h2>
                    <p className="text-[14px] md:text-[16px] lg:text-[18px] text-slate-400">You'll need 5 photos to get started. You can add more or make changes later.</p>
                </div>

                <CloudinaryUploadWidget
                    className="flex items-center justify-center border border-slate-400 border-dotted rounded-[5px] h-[600px] bg-slate-50 overflow-y-auto p-[20px]"
                    folder="airbnb_property"
                >
                    <Button className="text-[14px] text-slate-400 font-semibold bg-transparent border border-slate-400 hover:bg-transparent">Upload images</Button>
                </CloudinaryUploadWidget>
            </div>
        </div>
    )
}