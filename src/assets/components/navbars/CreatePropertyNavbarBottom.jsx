import { useCallback, useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";

import { steps } from "@/assets/pages/become-a-host/list_step";
import { cn } from "@/lib/utils";

const firstLength = steps.step_1.length;
const secondLength = steps.step_2.length;
const thirdLength = steps.step_3.length;

export default function CreatePropertyNavbarBottom() {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const ContainerProgressBarRef = useRef();
    const [transition, setTransition] = useState(false);

    const filterNameStep = useCallback(() => {
        const splitString = pathname.split("/");
        return splitString[splitString.length - 1];
    }, [pathname]);

    const nameStep = filterNameStep();

    const [currentStep, setCurrentStep] = useState(() => {
        const arrSteps = Object.keys(steps);
        let info = null;

        for (let i = 0; i < arrSteps.length; i++) {
            const index = steps[arrSteps[i]].findIndex(step => step === nameStep);

            if (index !== -1) {
                info = {
                    keyStep: arrSteps[i],
                    index
                }
                break;
            };
        }

        return info;
    }, []);

    useEffect(() => {
        const FirstProgress = document.querySelector(".first_progress");
        const SecondProgress = document.querySelector(".second_progress");
        const ThirdProgress = document.querySelector(".third_progress");
        
        if (currentStep) {
            const { keyStep, index } = currentStep;
            const width = ContainerProgressBarRef.current.offsetWidth;

            let widthPerStepWidth;
            let currentStepWidth;

            switch(keyStep) {
                case "step_1":
                    widthPerStepWidth = width / firstLength;
                    currentStepWidth = Math.ceil(widthPerStepWidth * index);
                    FirstProgress.style.width = currentStepWidth + "px";
                    break;
                case "step_2":
                    FirstProgress.style.width = width + "px";

                    widthPerStepWidth = width / secondLength;
                    currentStepWidth = Math.ceil(widthPerStepWidth * index);
                    SecondProgress.style.width = currentStepWidth + "px";
                    break;
                case "step_3":
                    FirstProgress.style.width = width + "px";
                    SecondProgress.style.width = width + "px";

                    widthPerStepWidth = width / thirdLength;
                    currentStepWidth = Math.ceil(widthPerStepWidth * index);
                    ThirdProgress.style.width = currentStepWidth + "px";
                    break;
            }
        }
    }, []);

    // Handle later
    // useEffect(() => {
    //     const handleResize = () => {

    //     }

    //     window.addEventListener("resize", handleResize);

    //     return () => {
    //         window.removeEventListener("resize", handleResize);
    //     }
    // }, []);

    const handleNext = () => {
        setTransition(true);

        if (currentStep) {
            const { keyStep, index } = currentStep;

            // Change url
            if (index < steps[keyStep].length - 1) {
                setCurrentStep({
                    ...currentStep,
                    index: index + 1,
                });

                navigate(steps[keyStep][index + 1]);
            }
            else if (index === steps[keyStep].length - 1) {
                let newKeyStep = "";

                if (keyStep === "step_1") newKeyStep = "step_2";
                else if (keyStep === "step_2") newKeyStep = "step_3";

                setCurrentStep({
                    keyStep: newKeyStep,
                    index: 0,
                });

                navigate(steps[newKeyStep][0]);
            }

            // Increase progress bars
            let ProgressBar;
            let widthPerStep = 0;

            function calcWidthPerStep(length) {
                widthPerStep = ContainerProgressBarRef.current.offsetWidth * ((100 / length) / 100);
            }
            
            switch(keyStep) {
                case "step_1":
                    ProgressBar = document.querySelector(".first_progress");
                    calcWidthPerStep(firstLength);
                    break;
                case "step_2":
                    ProgressBar = document.querySelector(".second_progress");
                    calcWidthPerStep(secondLength);
                    break;
                case "step_3":
                    ProgressBar = document.querySelector(".third_progress");
                    calcWidthPerStep(thirdLength);
                    break;
                default:
                    return;
            }

            const widthProgressBar = (ProgressBar.style.width).replace("px", "");
            ProgressBar.style.width = `${parseFloat(+widthProgressBar + widthPerStep)}px`;
        }
    }

    const handleBack = () => {
        setTransition(true);

        if (currentStep) {
            const { keyStep, index } = currentStep;

            let newKeyStep = keyStep;
            let newIndex = index;

            function trackKeyStep() {
                let result = keyStep;

                if ( keyStep === "step_3") result = "step_2";
                else if (keyStep === "step_2") result = "step_1";

                return result;
            }

            function trackIndex(newKeyStep) {
                let result = index;

                if (newKeyStep === "step_2") result = secondLength - 1;
                else if (newKeyStep === "step_1") result = firstLength - 1;

                return result;
            }

            // Change url
            if (index - 1 >= 0) {
                setCurrentStep({
                    ...currentStep,
                    index: index - 1,
                });

                navigate(steps[keyStep][index - 1]);
            }
            else if (index - 1 <= 0 && keyStep !== "step_1") {
                newKeyStep = trackKeyStep();
                newIndex = trackIndex(newKeyStep);

                setCurrentStep({
                    keyStep: newKeyStep,
                    index: newIndex,
                });

                navigate(steps[newKeyStep][newIndex]);
            }

            // Increase progress bars
            let ProgressBar;
            let widthPerStep = 0;

            function calcWidthPerStep(length) {
                widthPerStep = ContainerProgressBarRef.current.offsetWidth * ((100 / length) / 100);
            }

            switch(newKeyStep) {
                case "step_1":
                    ProgressBar = document.querySelector(".first_progress");
                    calcWidthPerStep(firstLength);
                    break;
                case "step_2":
                    ProgressBar = document.querySelector(".second_progress");
                    calcWidthPerStep(secondLength);
                    break;
                case "step_3":
                    ProgressBar = document.querySelector(".third_progress");
                    calcWidthPerStep(thirdLength);
                    break;
                default:
                    return;
            }

            if (newIndex - 1 <= 0) {
                ProgressBar.style.width = "0px";
                return;
            }

            const widthProgressBar = (ProgressBar.style.width).replace("px", "");
            ProgressBar.style.width = `${parseFloat(+widthProgressBar - widthPerStep)}px`;
        }
    }
    
    return (
        <div>
            <div className="flex gap-x-[5px] px-[5px]">
                <div
                    className="container-progress-bar relative flex-grow h-[7px] rounded-full bg-slate-300 overflow-hidden"
                    ref={ContainerProgressBarRef}
                >
                    <span className={cn(
                        "first_progress w-0 absolute top-0 left-0 bottom-0 bg-slate-500",
                        transition ? "trans" : ""
                    )}>
                    </span>
                </div>

                <div className="relative flex-grow h-[7px] rounded-full bg-slate-300 overflow-hidden">
                    <span className={cn(
                        "second_progress w-0 absolute top-0 left-0 bottom-0 bg-slate-500",
                        transition ? "trans" : ""
                    )}>
                    </span>
                </div>

                <div className="relative flex-grow h-[7px] rounded-full bg-slate-300 overflow-hidden">
                    <span className={cn(
                        "third_progress w-0 absolute top-0 left-0 bottom-0 bg-slate-500",
                        transition ? "trans" : ""
                    )}>
                    </span>
                </div>
            </div>

            <div className={cn(
                "responsive-padding-x flex items-center justify-between py-[20px]",
                nameStep !== "about-your-place" ? "justify-between" : "justify-end"
            )}>
                {
                    nameStep !== "about-your-place" && (
                        <Button
                            variant="ghost"
                            className="text-[16px] font-semibold w-[100px]"
                            onClick={handleBack}
                        >
                            Back
                        </Button>
                    )
                }

                <Button
                    variant=""
                    className="text-[16px] font-semibold w-[100px]"
                    onClick={handleNext}
                >
                    Next
                </Button>
            </div>
        </div>
    )
}