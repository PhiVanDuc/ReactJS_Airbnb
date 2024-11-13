import { Button } from "@/components/ui/button";
import Address from "./Address";
import { useNavigate } from "react-router-dom";

export default function success_payment() {
	const navigate = useNavigate();

    return (
		<div className="flex items-center justify-center h-[100vh] text-white">
			<div className="fixed inset-0 bg-[url('/images/success.jpg')] bg-cover bg-center bg-no-repeat">
			</div>

			<div className="px-[20px]">
				<div className="relative h-[95vh] w-full max-w-[650px] bg-black/35 backdrop-blur-2xl rounded-[15px] overflow-y-auto">
					<div className="p-[30px] pb-0 space-y-[30px]">
						<div className="sticky top-[30px] flex justify-center z-[99]">
							<div className="w-fit px-[25px] py-[8px] rounded-[8px] bg-white shadow-md">
								<img src="/images/airbnb.png" className="h-[30px]" />
							</div>
						</div>

						<div className="space-y-[20px] seperate-line-property">
							<h2 className="text-[22px] lg:text-[30px] font-semibold">Your reservation is confirmed</h2>

							<div className="space-y-[5px]">
								<p className="text-[18px] font-semibold">Hi host's name</p>
								<p className="text-[14px]">Thank you for trusting in using airbnb service! Please review your reservation details below.</p>
							</div>
						</div>

						<div className="seperate-line-property space-y-[20px]">
							<div className="w-full aspect-video rounded-[10px] bg-slate-300"></div>

							<div className="flex items-center justify-between gap-x-[20px]">
								<div className="space-y-[5px]">
									<h3 className="text-[18px] font-semibold">This is title</h3>
									<p className="text-[14px]">Scope of property - hosted by host's name</p>
								</div>

								<div className="shrink-0 w-[50px] h-[50px] rounded-full bg-slate-500"></div>
							</div>
						</div>

						<div className="seperate-line-property flex items-start justify-between gap-x-[15px]">
							<div className="space-y-[4px]">
								<h3 className="text-[14px] font-bold">CHECK-IN</h3>
								<p className="text-[14px]">24/9/2024</p>
							</div>
							
							<div className="space-y-[4px] text-right">
								<h3 className="text-[14px] font-bold">CHECKOUT</h3>
								<p className="text-[14px]">26/9/2024</p>
							</div>
						</div>

						<Address />

						<div className="space-y-[20px] pb-[30px]">
							<div className="flex items-start justify-between gap-x-[20px]">
								<div className="space-y-[4px]">
									<h3 className="text-[16px] font-semibold">RESERVATION ID</h3>
									<p className="text-[14px]">Some random string right here</p>
								</div>

								<div className="space-y-[4px] text-right">
									<h3 className="text-[16px] font-semibold text-root">PAID</h3>
									<p className="text-[14px]">25/09/2024 21:14:19 PM</p>
								</div>
							</div>

							<div className="p-[30px] rounded-[10px] bg-neutral-50">
								<div className="seperate-line-property space-y-[10px] text-neutral-800">
									<div className="flex items-center justify-between text-[14px]">
										<p className="underline">$10 x 2 nights</p>
										<p className="text-[16px] font-medium">$20</p>
									</div>

									<div className="flex items-center justify-between text-[14px]">
										<p className="underline">Discount</p>
										<p className="text-[16px] font-medium">$20</p>
									</div>

									<div className="flex items-center justify-between text-[14px]">
										<p className="underline">Airbnb fee</p>
										<p className="text-[16px] font-medium">$20</p>
									</div>
								</div>

								<div className="space-y-[10px] pt-[30px]">
									<div className="flex items-center justify-between">
										<h4 className="text-[14px] font-medium text-neutral-400">Payment method</h4>
										<p className="text-[14px] font-medium text-neutral-400">Card</p>
									</div>

									<div className="flex items-center justify-between">
										<h4 className="text-[17px] font-semibold text-neutral-800">Total</h4>
										<p className="text-[17px] font-semibold text-neutral-800">$300</p>
									</div>
								</div>
							</div>

							<div className="flex items-start justify-end text-right gap-x-[5px]">
								<Button
									onClick={() => { navigate("/") }}
								>
									Home
								</Button>
								<Button>View rental</Button>
							</div>
						</div>
					</div>

					<div className="text-[15px] py-[20px] flex flex-col justify-center items-center bg-neutral-700">
						<p>Thank you for making reservation with <span className="text-root">Airbnb.</span></p>
						<p>Pack your bags and have a lovely trip!</p>
					</div>
				</div>
			</div>
		</div>
    )
}