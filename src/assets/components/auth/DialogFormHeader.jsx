import {
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";

export default function DialogFormHeader({ header, description }) {
    return (
        <DialogHeader className="space-y-[30px]">
            <div className="space-y-[5px]">
                <DialogTitle className="text-[24px] font-semibold text-center">{ header }</DialogTitle>
                <DialogDescription className="text-[15px] text-neutral-400 text-center">{ description }</DialogDescription>
            </div>
            
            <span className="block w-full h-[1px] bg-slate-200"></span>
        </DialogHeader>
    )
}
