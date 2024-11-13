import React from 'react';
import videoStep1 from "/videos/videoStep1.mp4";

export default function AboutYourPlace() {
    return (
        <div className="flex justify-center h-full w-full">
            <div className="my-auto">
                <div className="flex flex-col md:flex-row md:items-center">
                    <div className="max-w-[540px] order-2 lg:order-1">
                        <h3 className="text-[16px] lg:text-[18px] font-semibold mb-[10px]">Step 1</h3>
                        <h2 className="text-[32px] lg:text-[46px] font-semibold mb-[10px]">Tell us about your place</h2>
                        <p className="text-[16px] lg:text-[18px] pb-[20px] lg:pb-0 w-full">In this step, we'll ask you which type of property you have and if guests will book the entire place or just a room. Then let us know the location and how many guests can stay.</p>
                    </div>

                    <div className="w-full md:w-[600px] md:max-x-[600px] order-1 md:order-2">
                        <video
                            autoPlay
                            muted
                            preload="auto"
                            className="outline outline-[10px] outline-white outline-offset-[-5px] w-full h-full object-cover"
                        >
                            <source src={videoStep1} type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
        </div>
    )
}
