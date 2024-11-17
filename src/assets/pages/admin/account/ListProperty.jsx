import { Switch } from "@/components/ui/switch";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"

export default function ListProperty() {
    const params = useParams();
    const navigate = useNavigate();

    const [missingParams, setMissingParams] = useState(() => {
        if (!params?.userId) return true;
        else return false;
    })

    useEffect(() => {
        if (missingParams) navigate("/admin/accounts");
    }, [params]);

    const handleClickNavigate = (id) => {
        navigate(`/property/${id}`);
    }

    const handleClickSwitchBar = (e) => {
        e.stopPropagation();
    }

    return (
        <>
            {
                missingParams ?
                (
                    <h2 className="w-full text-center text-[22px] font-medium text-neutral-600">Redirecting...</h2>
                ) :
                (
                    <div>
                        <h2 className="text-[26px] font-semibold mb-[20px] lg:mb-[40px]">List property</h2>

                        <div className="grid max-[450px]:grid-cols-1 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-[15px]">
                            <div
                                className="relative w-full aspect-square rounded-[10px] bg-slate-400 cursor-pointer"
                                onClick={() => { handleClickNavigate(123) }}
                            >
                                <span
                                    className="absolute top-[10px] left-[10px] right-[10px] flex items-center justify-between bg-white shadow-md rounded-[10px] p-[10px] border-neutral-200 cursor-default"
                                    onClick={handleClickSwitchBar}
                                >
                                    <p className="text-[13px] md:text-[14px] font-medium text-neutral-800">Block buisness</p>
                                    <Switch />
                                </span>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}