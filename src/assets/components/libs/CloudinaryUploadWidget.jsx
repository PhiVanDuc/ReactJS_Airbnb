import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

export default function CloudinaryUploadWidget({
    className = "",
    folder = "",
    api,
    openWidget,
    setOpenWidget,
    children
}) {
    const cloudinaryRef = useRef();
    const widgetRef = useRef();

    useEffect(() => {
        cloudinaryRef.current = window.cloudinary;
        
        widgetRef.current = cloudinaryRef.current.createUploadWidget(
            {
                cloudName: import.meta.env.VITE_CLOUDINARY_NAME,
                uploadPreset: import.meta.env.VITE_CLOUDINARY_NAME_PRESET,
                folder
            },
            (error, result) => {
                if (result.event === "success" || result.event === "close") {
                    setOpenWidget(false);
                }
            }
        );
    }, []);
    
    useEffect(() => {
        if (openWidget) widgetRef.current.open();
    }, [openWidget]);

    return (
        <div
            className={cn(className)}
            onClick={() => {
                widgetRef.current.open();
            }}
        >
            { children }
        </div>
    )
}