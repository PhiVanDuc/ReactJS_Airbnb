import { useEffect, useRef, useState } from "react";

import { IoCameraOutline } from "react-icons/io5";
import { IoChevronBack } from "react-icons/io5";
import { IoChevronForward } from "react-icons/io5";

import { cn } from "@/lib/utils";

export default function CategoriesNavbar() {
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(false);
    const categoriesBarRef = useRef();

    useEffect(() => {
        const element = document.querySelector(".categories-bar");

        const handleScroll = () => {
            setShowLeftArrow(element.scrollLeft > 0);
            setShowRightArrow(Math.ceil(element.scrollLeft + element.offsetWidth) < element.scrollWidth);
        }

        if (element) {
            if (element?.offsetWidth < element?.scrollWidth) {
                if (element?.scrollLeft === 0) setShowRightArrow(true);
                element.addEventListener("scroll", handleScroll);
            }
        }

        return () => {
            if (element) element.removeEventListener("resize", handleScroll);
        }
    }, []);

    useEffect(() => {
        const element = document.querySelector(".categories-bar");

        const handleResize = () => {
            if (window.innerWidth <= 1023) {
                setShowLeftArrow(false);
                setShowRightArrow(false);
            } else {
                setShowLeftArrow(element.scrollLeft > 0);
                setShowRightArrow(Math.ceil(element.scrollLeft + element.offsetWidth) < element.scrollWidth);
            }
        }

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, []);

    const handleClick = (direction) => {
        if (categoriesBarRef?.current) {
            const scrollAmount = 200;
            const newScrollPosition = direction === "left"
                ? categoriesBarRef.current.scrollLeft - scrollAmount
                : categoriesBarRef.current.scrollLeft + scrollAmount;
    
            categoriesBarRef.current.scrollTo({
                left: newScrollPosition,
                behavior: 'smooth',
            });
        }
    }
    
    return (
        <div className="responsive-padding-x md:overflow-x-auto">
            <div className="relative md:overflow-x-auto">

                {/* Begin arrow */}
                <div
                    className={cn(
                        "hidden absolute left-0 w-[60px] h-full bg-gradient-to-r from-white to-transparent items-center z-10 pb-[15px]",
                        showLeftArrow ? "lg:flex" : "hidden"
                    )}
                >
                    <div
                        className="shrink-0 flex items-center justify-center w-[35px] h-[35px] rounded-full bg-white border border-slate-400 cursor-pointer"
                        onClick={() => { handleClick("left") }}
                    >
                        <IoChevronBack size={20} />
                    </div>
                </div>

                <div
                    className={cn(
                        "hidden absolute right-0 w-[60px] h-full bg-gradient-to-r from-transparent to-white items-center justify-end z-10 pb-[15px]",
                        showRightArrow ? "lg:flex" : "hidden"
                    )}
                >
                    <div
                        className="shrink-0 flex items-center justify-center w-[35px] h-[35px] rounded-full bg-white border border-slate-400 cursor-pointer"
                        onClick={() => { handleClick("right") }}
                    >
                        <IoChevronForward size={20} />
                    </div>
                </div>
                {/* End arrow */}

                <div
                    className="categories-bar flex items-center gap-x-[35px] pb-[15px] w-full overflow-x-auto lg:no-scrollbar horizontal-custom-scrollbar"
                    ref={categoriesBarRef}
                >
                    <div className="group relative flex flex-col justify-center items-center text-neutral-500 gap-y-[5px] hover:text-neutral-800 transition cursor-pointer">
                        <IoCameraOutline size={25} />
                        <p className="text-[12px]">Camera</p>

                        <span className="opacity-0 absolute left-0 right-0 h-[2.5px] rounded-full bg-slate-500 bottom-[-15px] group-hover:opacity-100 transition"></span>
                    </div>
                </div>  
            </div>
        </div>
    )
}
