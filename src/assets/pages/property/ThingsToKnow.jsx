import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { GrHomeOption } from "react-icons/gr";
import { useLocation } from "react-router-dom";

export default function ThingsToKnow() {
    const { pathname } = useLocation();

    return (
        <div className={cn(
            'pb-[40px]',
            pathname.startsWith("/trips/property") ? "seperate-line-property" : ""
        )}>
            <h4 className="text-[22px] font-semibold mb-[20px]">Things to know</h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] gap-y-[30px]">
                <div className="space-y-[5px] text-center md:text-left">
                    <h5 className="text-[16px] font-semibold">House rules</h5>

                    <div className="space-y-[5px]">
                        <p className="text-[16px]">Check-in after 3:00 PM</p>
                        <p className="text-[16px]">Checkout before 10:00 AM</p>
                    </div>

                    <Dialog>
                        <DialogTrigger>
                            <p className="text font-semibold underline cursor-pointer">Show more</p>
                        </DialogTrigger>

                        <DialogContent className="space-y-[20px] w-full max-w-[800px] max-h-[80vh] overflow-y-auto">
                            <DialogHeader className="space-y-[5px]">
                                <DialogTitle className="text-[28px] font-semibold">House rules</DialogTitle>
                                <p className="text-[17px]">You'll be staying in someone's home, so please treat it with care and respect.</p>
                            </DialogHeader>

                            <div className="space-y-[30px]">
                                <div>
                                    <h3 className="text-[18px] font-semibold">Checking in and out</h3>

                                    <div className="flex items-center gap-x-[10px] py-[30px] border-b border-neutral-200">
                                        <GrHomeOption className="text-[25px]" />
                                        <p className="text-[17px]">Check-in after 3:00 PM</p>
                                    </div>

                                    <div className="flex items-center gap-x-[10px] pt-[30px]">
                                        <GrHomeOption className="text-[25px]" />
                                        <p className="text-[17px]">Self check-in with building staff</p>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-[18px] font-semibold">During your stay</h3>

                                    <div className="flex items-center gap-x-[10px] py-[30px] border-b border-neutral-200">
                                        <GrHomeOption className="text-[25px]" />
                                        <p className="text-[17px]">2 guests maximum</p>
                                    </div>

                                    <div className="flex items-center gap-x-[10px] py-[30px]">
                                        <GrHomeOption className="text-[25px]" />
                                        <p className="text-[17px]">Pets allowed</p>
                                    </div>
                                </div>
                            </div>
                        </DialogContent>
                    </Dialog>
                </div>

                <div className="space-y-[5px] text-center md:text-left">
                    <h5 className="text-[16px] font-semibold">Safety & property</h5>

                    <div className="space-y-[5px]">
                        <p className="text-[16px]">No carbon monoxide alarm</p>
                        <p className="text-[16px]">No smoke alarm</p>
                        <p className="text-[16px]">Some spaces are shared</p>
                    </div>

                    <Dialog>
                        <DialogTrigger>
                            <p className="text font-semibold underline cursor-pointer">Show more</p>
                        </DialogTrigger>

                        <DialogContent className="space-y-[20px] w-full max-w-[800px]  max-h-[80vh] overflow-y-auto">
                            <DialogHeader className="space-y-[5px]">
                                <DialogTitle className="text-[28px] font-semibold">Safety & property</DialogTitle>
                                <p className="text-[17px]">Avoid surprises by looking over these important details about your Host's property.</p>
                            </DialogHeader>

                            <div className="space-y-[30px]">
                                <div>
                                    <h3 className="text-[18px] font-semibold">Safety devices</h3>

                                    <div className="flex items-center gap-x-[10px] py-[30px] border-b border-neutral-200">
                                        <GrHomeOption className="text-[25px]" />
                                        <p className="text-[17px]">Check-in after 3:00 PM</p>
                                    </div>

                                    <div className="flex items-center gap-x-[10px] pt-[30px]">
                                        <GrHomeOption className="text-[25px]" />
                                        <p className="text-[17px]">Self check-in with building staff</p>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-[18px] font-semibold">Property info</h3>

                                    <div className="flex items-start gap-x-[10px] py-[30px] border-b border-neutral-200">
                                        <GrHomeOption className="text-[25px]" />
                                        <div className="space-y-[2px]">
                                            <p className="text-[17px]">Some spaces are shared</p>
                                            <p className="text-[14px] font-medium text-neutral-400">"Pool"</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-x-[10px] py-[30px] border-b border-neutral-200">
                                        <GrHomeOption className="text-[25px]" />
                                        <div className="space-y-[2px]">
                                            <p className="text-[17px]">Pet(s) live on property</p>
                                            <p className="text-[14px] font-medium text-neutral-400">"Dog"</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-x-[10px] py-[30px]">
                                        <GrHomeOption className="text-[25px]" />
                                        <div className="space-y-[2px]">
                                            <p className="text-[17px]">Must climb stairs</p>
                                            <p className="text-[14px] font-medium text-neutral-400">"150"</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </DialogContent>
                    </Dialog>
                </div>

                <div className="space-y-[5px] text-center md:text-left">
                    <h5 className="text-[16px] font-semibold">Cancellation policy</h5>

                    <Dialog>
                        <DialogTrigger>
                            <p className="text font-semibold underline cursor-pointer">Show more</p>
                        </DialogTrigger>

                        <DialogContent className="max-h-[80vh] overflow-y-auto">
                            <DialogHeader className="space-y-[5px]">
                                <DialogTitle className="text-[28px] font-semibold">Cancellation policy</DialogTitle>
                                <p className="text-[17px]">Make sure you’re comfortable with this Host’s policy.</p>
                            </DialogHeader>

                            <div>
                                <div className="flex items-start py-[30px] border-b border-neutral-300">
                                    <div className="w-[30%]">
                                        <h3 className="text-[17px] font-medium">Before</h3>
                                        <p className="text-[16px] text-neutral-800">Oct 16</p>
                                        <p className="text-[16px] text-neutral-800">3:00 PM</p>
                                    </div>

                                    <div>
                                        <h3 className="text-[17px] font-medium">Full refund</h3>
                                        <p className="text-[16px] text-neutral-800">Get back 100% of what you paid.</p>
                                    </div>
                                </div>

                                <div className="flex items-start py-[30px] border-b border-neutral-300">
                                    <div className="shrink-0 w-[30%]">
                                        <h3 className="text-[17px] font-medium">Before</h3>
                                        <p className="text-[16px] text-neutral-800">Oct 17</p>
                                        <p className="text-[16px] text-neutral-800">3:00 PM</p>
                                    </div>

                                    <div>
                                        <h3 className="text-[17px] font-medium">Partial refund</h3>
                                        <p className="text-[16px] text-neutral-800">Get back every night but the first one. No refund of the first night or the service fee.</p>
                                    </div>
                                </div>

                                <p className="py-[30px] text-[17px]">Cleaning fees are refunded if you cancel before check-in.</p>
                            </div>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        </div>
    )
}