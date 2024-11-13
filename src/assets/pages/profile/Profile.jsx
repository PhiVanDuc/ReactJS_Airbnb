import { Fragment, useEffect, useState } from "react";

import LegalNameForm from "./LegalNameForm";
import PreferredNameForm from "./PreferredNameForm";
import EmailAddressForm from "./EmailAddressForm";
import PhoneNumbersForm from "./PhoneNumbersForm";
import AddressForm from "./AddressForm";
import EmergencyContactForm from "./EmergencyContactForm";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";

const listInfo = [
    {
        title: "Legal name",
        desc: "Make sure this matches the name on your government ID.",
        formName: "legalName",
        formComponent: <LegalNameForm />,
        value: "phi van duc"
    },
    {
        title: "Preferred name",
        desc: "This is how your first name will appear to Hosts and guests.",
        formName: "preferredName",
        formComponent: <PreferredNameForm />,
        value: ""
    },
    {
        title: "Email address",
        desc: "Use an address you’ll always have access to.",
        formName: "emailAddress",
        formComponent: <EmailAddressForm/>,
        value: ""
    },
    {
        title: "Phone numbers",
        desc: "Add a number so confirmed guests and Airbnb can get in touch. You can add other numbers and choose how they’re used.",
        formName: "phoneNumbers",
        formComponent: <PhoneNumbersForm/>,
        value: ""
    },
    {
        title: "Address",
        desc: "Use a permanent address where you can receive mail.",
        formName: "address",
        formComponent: <AddressForm/>,
        value: ""
    },
    {
        title: "Emergency contact",
        desc: "A trusted contact we can alert in an urgent situation.",
        formName: "emergencyContact",
        formComponent: <EmergencyContactForm/>,
        value: ""
    }
];

export default function Profile() {
    const [isEdit, setIsEdit] = useState({
        isEdit: false,
        formName: ""
    });

    useEffect(() => {
        document.documentElement.style.overflow = 'hidden';
    
        return () => {
          document.documentElement.style.overflow = 'auto';
        };
      }, []);

    const handleClickToggleForm = (name) => {
        if (isEdit.formName && name !== isEdit.formName) return;

        if (isEdit.formName && isEdit) {
            setIsEdit({
                isEdit: false,
                formName: ""
            })
        }
        else {
            setIsEdit({
                isEdit: true,
                formName: name
            })
        }
    }

    return (
        <div className="responsive-padding-x w-full max-w-[800px] mx-auto pt-[40px] overflow-hidden">
            <div className="space-y-[10px] mb-[50px]">
                <Breadcrumb>
                    <BreadcrumbList className="text-[15px]">
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/" className="font-medium">Home</BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbSeparator></BreadcrumbSeparator>

                        <BreadcrumbItem>
                            <BreadcrumbPage className="font-medium">Profile</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

                <h2 className="text-[30px] font-bold text-neutral-700">Personal info</h2>
            </div>

            <div className="space-y-[25px]">
                {
                    listInfo.map(item => {
                        return (
                            <Fragment key={item.formName}>
                                <div className={cn(
                                    "pb-[25px] border-b border-neutral-300",
                                    isEdit.isEdit && isEdit.formName !== item.formName ? "opacity-20" : ""
                                )}>
                                    <div className="flex items-center justify-between gap-x-[10px]">
                                        <div className="space-y-[4px]">
                                            <h3 className="text-[16px] font-medium">{item.title}</h3>
                                            <p className="text-[14px] text-neutral-600">
                                                {
                                                    item.value !== "" && (item.formName !== isEdit.formName || !isEdit.isEdit) 
                                                        ? item.value 
                                                        : item.desc
                                                }
                                            </p>
                                        </div>

                                        <p 
                                            className={cn(
                                                "relative text-[14.5px] font-semibold cursor-pointer",
                                                (item.formName !== isEdit.formName && isEdit.isEdit) ? "cursor-default" : ""
                                            )}
                                            onClick={() => { handleClickToggleForm(item.formName) }}
                                        >
                                            {
                                                (item.formName === isEdit.formName && isEdit.isEdit) ? "Close" : item.value !== "" ? "Edit" : "Add"
                                            }
                                            <span className="absolute inline-block left-0 bottom-[-1px] w-full h-[2px] rounded-full bg-black"></span>
                                        </p>
                                    </div>

                                    {
                                        (item.formName === isEdit.formName && isEdit.isEdit) && item.formComponent
                                    }
                                </div>
                            </Fragment>
                        )
                    })
                }

                <div className="text-right pb-[40px]">
                    <Button className="bg-root">Delete account</Button>
                </div>
            </div>
        </div>
    )
}