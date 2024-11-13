import { Button } from "@/components/ui/button";
import { FaAirbnb } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export default function PublishCelebration() {
    const navigate = useNavigate();

    return (
        <div className="h-[100vh] flex flex-col bg-gradient-to-t from-[#3A2092] to-[#AE336A]">
            <div className="flex-grow flex items-center">
                <div className="responsive-padding-x  w-[50%] flex flex-col h-full">
                    <div className="py-[20px]">
                        <FaAirbnb size={30} className="text-white" />
                    </div>

                    <div className="flex-grow flex items-center w-full overflow-y-auto text-white">
                        <div className="space-y-[15px]">
                            <h2 className="text-[40px] font-medium">Check out your listing!</h2>
                            <p className="text-[18px]">This listing will visible to guests after you publish. You can add more info or make changes anytime.</p>
                        </div>
                    </div>
                </div>

                <div className="relative responsive-padding-x w-[50%] h-full bg-black">
                    <div className="absolute inset-0 bg-[url('/images/celebration.jpg')] bg-cover bg-center bg-no-repeat"></div>
                    <div className="absolute inset-0 bg-black/50"></div>

                    <Button
                        className="absolute right-[20px] bottom-[30px] bg-root px-[30px] py-[25px] text-[16px] font-semibold"
                        onClick={() => {
                            navigate("/hosting/listing");
                        }}
                    >
                        Publish
                    </Button>
                </div>
            </div>
        </div>
    )
}
