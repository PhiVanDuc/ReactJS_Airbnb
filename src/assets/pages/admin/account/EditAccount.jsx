import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import { cn } from "@/lib/utils";
import { Switch } from "@/components/ui/switch";

export default function EditAccount() {
    const params = useParams();
    const navigate = useNavigate();
    const [listInfo, setListInfo] = useState([
        {
            title: "Legal name",
            desc: "Make sure this matches the name on your government ID.",
            formName: "legalName",
            value: "This is value."
        },
        {
            title: "Preferred name",
            desc: "This is how your first name will appear to Hosts and guests.",
            value: "This is value."
        },
        {
            title: "Email address",
            desc: "Use an address you’ll always have access to.",
            value: "This is value."
        },
        {
            title: "Phone numbers",
            desc: "Add a number so confirmed guests and Airbnb can get in touch. You can add other numbers and choose how they’re used.",
            value: "This is value."
        },
        {
            title: "Address",
            desc: "Use a permanent address where you can receive mail.",
            value: "This is value."
        },
        {
            title: "Emergency contact",
            desc: "A trusted contact we can alert in an urgent situation.",
            value: "This is value."
        },
        {
            title: "Admin roles",
            desc: "Assign role for this account.",
            value: true,
            toggle: true
        },
        {
            title: "Block business",
            desc: "Landowners who violate Airbnb's rules will be blocked for a certain period of time",
            value: false,
            toggle: true
        },
        {
            title: "Block account",
            desc: "Block all activity of the current account.",
            value: false,
            toggle: true
        },
    ]);

    const [missingParams, setMissingParams] = useState(() => {
        if (!params?.userId) return true;
        else return false;
    })

    useEffect(() => {
        if (missingParams) navigate("/admin/accounts");
    }, [params]);

    return (
        <>
            {
                missingParams ?
                (
                    <h2 className="w-full text-center text-[22px] font-medium text-neutral-600">Redirecting...</h2>
                ) :
                (
                    <div className="w-full max-w-[800px] mx-auto">
                        <h2 className="text-[26px] font-semibold mb-[20px] lg:mb-[40px]">Edit account</h2>

                        <div className="space-y-[25px]">
                            {
                                listInfo.map(item => {
                                    return (
                                        <div
                                            className={cn(
                                                "pb-[25px] border-b border-neutral-300 space-y-[4px]",
                                                !item.toggle && "cursor-not-allowed"
                                            )}
                                            key={item.title}
                                        >
                                            <div className="flex items-center justify-between gap-x-[20px]">
                                                <div className="space-y-[4px]">
                                                    <h3 className="text-[16px] font-medium">{item.title}</h3>
                                                    <p className="text-[14px] text-neutral-600">
                                                        {
                                                            item.toggle ? item.desc :
                                                            item.value !== "" ?
                                                            item.value :
                                                            item.desc
                                                        }
                                                    </p>
                                                </div>

                                                {
                                                    item.toggle && <Switch checked={item.value} />
                                                }
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>

                        <div className="flex justify-center">
                            <Link to="list-properties" className="text-[14px] md:text-[15px] font-medium w-fit pt-[25px] text-root underline underline-offset-2 cursor-pointer">Visit properties</Link>
                        </div>
                    </div>
                )
            }
        </>
    )
}